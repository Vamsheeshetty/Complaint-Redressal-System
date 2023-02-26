package com.crs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crs.entities.Complaint;
import com.crs.service.ComplaintService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/engineer")
public class EngineerController {
	
	@Autowired
	private ComplaintService complaintService;
	
	@GetMapping("/get-all-complaints/{assignedEngineer}")
	public ResponseEntity<?> getAssignedComplaints(@PathVariable("assignedEngineer") String assignedEngineer){
		List<Complaint> complaints = this.complaintService.assignedComplaints(assignedEngineer);
		if(complaints.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}else {
			return ResponseEntity.ok(complaints);
		}
	}
	
	@PutMapping("/update-status/{id}")
	public ResponseEntity<?> updateComplaintStatus(@PathVariable("id") int id, @RequestBody Complaint complaint){
		this.complaintService.updateStatus(id, complaint);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	

}
