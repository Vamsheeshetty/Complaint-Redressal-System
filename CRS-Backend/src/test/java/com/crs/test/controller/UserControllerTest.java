package com.crs.test.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anySet;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import com.crs.controller.UserController;
import com.crs.entities.User;
import com.crs.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebMvcTest(value=UserController.class)
@WithMockUser(username = "admin", password = "admin123", roles = "ADMIN")
public class UserControllerTest {
	
	@MockBean
	private UserService userService;
	
	@Autowired
	private MockMvc mockMvc;
	
	private User user;
	
	@BeforeEach
	void setUp() {
		this.user = new User();
		this.user.setUsername("admin");
		this.user.setFirstName("twarit");
		this.user.setLastName("soni");
		this.user.setEmail("ts@soni");
		this.user.setPassword("admin123");
		this.user.setPhone("123456874");
		this.user.setPinCode(482005);
		this.user.setRoleName("ADMIN");
	}
	
	@AfterEach
	void destroy() {
		this.user = null;
	}
	
	@Test
	void testCreateUser() throws Exception {
		when(this.userService.createUser(any(User.class), anySet())).thenReturn(user);
		ObjectMapper objectMapper = new ObjectMapper(); 
		String userJson = objectMapper.writeValueAsString(user);
		MockHttpServletRequestBuilder mockHttpServletRequestBuilder = MockMvcRequestBuilders.post("/user/create-user").contentType(MediaType.APPLICATION_JSON).content(userJson);
		ResultActions resultActions = this.mockMvc.perform(mockHttpServletRequestBuilder);
		MvcResult result = resultActions.andReturn();
		MockHttpServletResponse response = result.getResponse();
		int status = response.getStatus();
		assertEquals(201, status);
	}
	
	@Test
	void testGetUserByName() throws Exception {
		String username = "username";
		when(this.userService.getUserName(username)).thenReturn(user);
		MockHttpServletRequestBuilder mockHttpServletRequestBuilder = MockMvcRequestBuilders.get("/user/get-user/{username}",username);
		ResultActions resultActions = mockMvc.perform(mockHttpServletRequestBuilder);
		MvcResult mvcResult = resultActions.andReturn();
		MockHttpServletResponse response = mvcResult.getResponse();
		int status = response.getStatus();
		assertEquals(200,status);
	}
	
	@Test
	void testDeleteUser() throws Exception {
		Integer userId = 1;
		doNothing().when(this.userService).deleteUserById(userId);
		MockHttpServletRequestBuilder mockHttpServletRequestBuilder = MockMvcRequestBuilders.delete("/user/delete-user/{userId}",userId);
		ResultActions resultActions = mockMvc.perform(mockHttpServletRequestBuilder);
		MvcResult mvcResult = resultActions.andReturn();
		MockHttpServletResponse response = mvcResult.getResponse();
		int status = response.getStatus();
		assertEquals(200,status);
	}
	@Test
	void testUpdateUser() throws Exception {
		String username = "username";
		when(this.userService.updateUserByUsername(anyString(), any(User.class))).thenReturn(user);
		ObjectMapper objectMapper = new ObjectMapper(); 
		String userJson = objectMapper.writeValueAsString(user);
		MockHttpServletRequestBuilder mockHttpServletRequestBuilder = MockMvcRequestBuilders.put("/user/update-user/{username}",username).contentType(MediaType.APPLICATION_JSON).content(userJson);
		ResultActions resultActions = this.mockMvc.perform(mockHttpServletRequestBuilder);
		MvcResult result = resultActions.andReturn();
		MockHttpServletResponse response = result.getResponse();
		int status = response.getStatus();
		assertEquals(201, status);
	}
	
	@Test
	void testGetAllUserByRole() throws Exception {
		String roleName = "ADMIN";
		List<User> users = new ArrayList<>();
		users.add(user);
		when(this.userService.getUserByRole(anyString())).thenReturn(users);
		MockHttpServletRequestBuilder mockHttpServletRequestBuilder = MockMvcRequestBuilders.get("/user/get-all/{roleName}",roleName);
		ResultActions resultActions = mockMvc.perform(mockHttpServletRequestBuilder);
		MvcResult mvcResult = resultActions.andReturn();
		MockHttpServletResponse response = mvcResult.getResponse();
		int status = response.getStatus();
		assertEquals(200,status);
		
	}

}
