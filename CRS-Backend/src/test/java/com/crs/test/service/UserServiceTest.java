package com.crs.test.service;



import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import com.crs.entities.User;
import com.crs.entities.UserRole;
import com.crs.repo.RoleRepo;
import com.crs.repo.UserRepo;
import com.crs.service.UserService;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {
	
	@Mock
	private UserRepo userRepo;
	
	@Mock
	private RoleRepo roleRepo;
	
	@InjectMocks
	UserService userService;

	@Test
	void testServiceCreateUser() {
		Set<UserRole> userRole = new HashSet<>();
		User user = mock(User.class);
		UserRole uR = mock(UserRole.class);
		userRole.add(uR);
		//stubbing
		when(this.userRepo.save(any(User.class))).thenReturn(user);
		this.userService.createUser(user, userRole);
		verify(this.userRepo).save(user);
	}
	
	@Test
	void testServiceGetUser() {
		User user = mock(User.class);
		when(this.userRepo.findByUsername(anyString())).thenReturn(user);
		User result = this.userService.getUserName(anyString());
		verify(this.userRepo).findByUsername(anyString());
		assertThat(result).isNotNull();
	}
	
	@Test
	void testDeleteUser() {
		Integer userId = 1;
		doNothing().when(this.userRepo).deleteById(1);
		this.userService.deleteUserById(userId);
		verify(this.userRepo).deleteById(userId);
	}
	
	@Test
	void testGetUserByRole() {
		List<User> user = new ArrayList<>();
		User u = mock(User.class);
		user.add(u);
		String roleName = "ADMIN";
		when(this.userRepo.findByRoleName(anyString())).thenReturn(user);
		List<User> result = this.userService.getUserByRole(roleName);
		verify(this.userRepo).findByRoleName(roleName);
		assertThat(result).isNotEmpty();
	}
	
	@Test
	void testUpdateUser() {
		User user = new User();
		when(this.userRepo.findByUsername(anyString())).thenReturn(user);
		user.setFirstName("abc");
		user.setLastName("abc");
		user.setEmail("abc");
		user.setPhone("12345");
		user.setPinCode(452123);
		when(this.userRepo.save(any(User.class))).thenReturn(user);
		this.userService.updateUserByUsername(anyString(), user);
		verify(this.userRepo).save(user);
	}
}
