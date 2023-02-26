package com.crs.service;

import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.crs.entities.User;
import com.crs.entities.UserRole;
import com.crs.repo.RoleRepo;
import com.crs.repo.UserRepo;

@Service
public class UserService {
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private RoleRepo roleRepo;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	public UserService(UserRepo userRepo, RoleRepo roleRepo) {
		super();
		this.userRepo = userRepo;
		this.roleRepo = roleRepo;
	}

	// creating new user
	public User createUser(User user, Set<UserRole> userRole){
		User local = this.userRepo.findByUsername(user.getUsername());
		try {
			if(local!=null) {
				throw new Exception("Username already exists!");
			}
			else {
				//user creation
				
				//saving role from userRole
				for(UserRole ur : userRole) {
					roleRepo.save(ur.getRole());
				}
				//assign userRole in user
				user.getUserRoles().addAll(userRole);
				
				//encode password
				user.setPassword(this.passwordEncoder.encode(user.getPassword()));

				local = this.userRepo.save(user);
			}
		}catch(Exception e) {
			System.out.println(e);
		}
		return local;
		
	}
	//find user by username
	public User getUserName(String username) {
		User findUser = this.userRepo.findByUsername(username);
		return findUser;
	}
	
	//find user by role
	public List<User> getUserByRole(String roleName){
		return this.userRepo.findByRoleName(roleName);
	}
	
	//delete user by userid
	public void deleteUserById(Integer userId) {
		this.userRepo.deleteById(userId);
	}
	
	//update user by username
	public User updateUserByUsername(String username,User user) {
		User u = this.userRepo.findByUsername(username);
		u.setFirstName(user.getFirstName());
		u.setLastName(user.getLastName());
		u.setPhone(user.getPhone());
		u.setEmail(user.getEmail());
		u.setPinCode(user.getPinCode());
		User updatedUser = this.userRepo.save(u);
		return updatedUser;
	}

}
