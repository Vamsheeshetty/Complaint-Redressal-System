package com.crs.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.crs.entities.Complaint;

@Repository
public interface ComplaintRepo extends CrudRepository<Complaint, Integer>{
	public List<Complaint> findByUsername(String username);
	public List<Complaint> findByAssignedEngineer(String assignedEngineer);
	public Complaint findByComplaintAndUsernameAndIsActive(String complaint, String username, boolean isActive);
	public List<Complaint> findByIsAssigned(boolean isAssigned);
	public List<Complaint> findByPinCodeAndIsAssigned(int pinCode, boolean isAssigned);
}
