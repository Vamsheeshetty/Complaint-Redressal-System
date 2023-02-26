package com.crs.controller;

import java.net.URI;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.validation.Valid;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.crs.entities.Role;
import com.crs.entities.User;
import com.crs.entities.UserRole;
import com.crs.service.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService userService;
	
	//create user
	@PostMapping("/create-user")
	public ResponseEntity<User> createNewUser(@Valid @RequestBody User user){
		Set<UserRole> userRole = new HashSet<>();
		Role role = new Role();
		if(user.getRoleName().contentEquals("CUSTOMER")) {
			role.setRoleId(102);
			role.setRoleName(user.getRoleName());
		}else if(user.getRoleName().contentEquals("MANAGER")) {
			role.setRoleId(104);
			role.setRoleName(user.getRoleName());
		}else if(user.getRoleName().contentEquals("ENGINEER")) {
			role.setRoleId(106);
			role.setRoleName(user.getRoleName());
		}
		
		UserRole uR = new UserRole();
		uR.setUser(user);
		uR.setRole(role);
		userRole.add(uR);
		if(this.userService.getUserName(user.getUsername())!=null) {
			System.out.println("Username already exist!");
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}else {
			User createUser = this.userService.createUser(user, userRole);
			URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createUser.getUserId()).toUri();
			return ResponseEntity.created(location).build();
		}
	}

	//create admin
	@PostConstruct
	public void createAdmin() {
		User admin = new User();
		admin.setUsername("crs-admin@abc.com");
		admin.setPassword("admin@crs");
		admin.setFirstName("Twarit");
		admin.setLastName("Soni");
		admin.setEmail("twarit.soni@gmail.com");
		admin.setPinCode(110001);
		admin.setPhone("+916265458854");
		admin.setRoleName("ADMIN");
		Role role = new Role();
		role.setRoleId(101);
		role.setRoleName(admin.getRoleName());
		Set<UserRole> userRole = new HashSet<>();
		UserRole uR = new UserRole();
		uR.setUser(admin);
		uR.setRole(role);
		userRole.add(uR);
		User userAdmin = this.userService.createUser(admin, userRole);
		System.out.println("Admin Username: "+userAdmin.getUsername());
	}
	
	//get user by username
	@GetMapping("/get-user/{username}")
	public ResponseEntity<User> getUserByUsername(@PathVariable("username") String username){
		User user = this.userService.getUserName(username);
		if(user!=null) {
			return ResponseEntity.ok(user);
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	
	//delete user by userid
	@DeleteMapping("/delete-user/{userId}")
	public ResponseEntity<?> deleteUser(@PathVariable("userId") Integer userId){
		this.userService.deleteUserById(userId);
		return ResponseEntity.status(HttpStatus.OK).build();
	}
	
	//update user by username
	@PutMapping("/update-user/{username}")
	public ResponseEntity<User> updateUser(@PathVariable("username") String username,@RequestBody User user){
		this.userService.updateUserByUsername(username, user);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	//get user by role name
	@GetMapping("/get-all/{roleName}")
	public ResponseEntity<?> getAllUserByRole(@PathVariable("roleName") String roleName){
		List<User> users = this.userService.getUserByRole(roleName);
		if(users.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}else {
			return ResponseEntity.ok(users);
		}
	}
	
}
