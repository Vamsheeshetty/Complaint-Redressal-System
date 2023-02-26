package com.crs.test.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.crs.entities.Complaint;
import com.crs.repo.ComplaintRepo;
import com.crs.service.ComplaintService;

@ExtendWith(MockitoExtension.class)
public class ComplaintServiceTest {
	
	@Mock
	private ComplaintRepo complaintRepo;
	
	@InjectMocks
	private ComplaintService complaintService;
	
	@Test
	void testCreateComplaint() throws Exception {
		Complaint complaint = mock(Complaint.class);
		when(this.complaintRepo.save(any(Complaint.class))).thenReturn(complaint);
		Complaint result = this.complaintService.createComplaint(complaint);
		assertThat(result).isNotNull();
	}
	
	@Test
	void testFindCompliantByUsername() {
		List<Complaint> complaints = new ArrayList<>();
		Complaint complaint = mock(Complaint.class);
		complaints.add(complaint);
		when(this.complaintRepo.findByUsername(anyString())).thenReturn(complaints);
		List<Complaint> result = this.complaintService.findComplaintByUsername(anyString());
		assertThat(result).isNotNull();
	}
	
	@Test
	void testFindAllComplaint() {
		List<Complaint> complaints = new ArrayList<>();
		Complaint complaint = mock(Complaint.class);
		complaints.add(complaint);
		when(this.complaintRepo.findAll()).thenReturn(complaints);
		List<Complaint> result = this.complaintService.findAllComplaint();
		assertThat(result).isNotNull();
	}
	
	@Test
	void testFindIsAssignedComplaint() {
		List<Complaint> complaints = new ArrayList<>();
		Complaint complaint = mock(Complaint.class);
		complaints.add(complaint);
		when(this.complaintRepo.findByIsAssigned(false)).thenReturn(complaints);
		List<Complaint> result = this.complaintService.findAssignedComplaint(false);
		assertThat(result).isNotNull();
	}
	
	@Test
	void testGetComplaint() {
		Complaint complaint = mock(Complaint.class);
		when(this.complaintRepo.findById(anyInt())).thenReturn(Optional.of(complaint));
		Complaint result = this.complaintService.getComplaint(anyInt());
		assertThat(result).isNotNull();
		
	}
	
	@Test
	void testAssignEngineer() {
		Complaint complaint = mock(Complaint.class);
		when(this.complaintRepo.findById(anyInt())).thenReturn(Optional.of(complaint));
		when(this.complaintRepo.save(any(Complaint.class))).thenReturn(complaint);
		Complaint result = this.complaintService.assignEngineer(anyInt(), complaint);
		assertThat(result).isInstanceOf(Complaint.class);
		assertThat(result).isNotNull();
	
	}
	
	@Test
	void testGetComplaintByPinCode() {
		List<Complaint> complaints = new ArrayList<>();
		Complaint complaint = mock(Complaint.class);
		complaints.add(complaint);
		when(this.complaintRepo.findByPinCodeAndIsAssigned(123456, false)).thenReturn(complaints);
		List<Complaint> result = this.complaintService.getComplaintByPinCode(123456, false);
		assertThat(result).isNotNull();
	}

}
