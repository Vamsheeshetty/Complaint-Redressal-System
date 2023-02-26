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
import com.crs.entities.User;
import com.crs.service.ComplaintService;
import com.crs.service.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/manager")
public class ManagerController {
	
	@Autowired
	private ComplaintService complaintService;
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/get-complaints")
	public ResponseEntity<?> getAllComplaints(){
		List<Complaint> complaints = this.complaintService.findAllComplaint();
		if(complaints.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}else {
			return ResponseEntity.ok(complaints);
		}
	}
	
	@GetMapping("/complaints/{isAssigned}")
	public ResponseEntity<?> getAllAssignedComplaints(@PathVariable("isAssigned") boolean isAssigned){
		List<Complaint> complaints = this.complaintService.findAssignedComplaint(isAssigned);
		if(complaints.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}else {
			return ResponseEntity.ok(complaints);
		}
	}
	
	@GetMapping("/unassigned-complaint/{pinCode}")
	public ResponseEntity<?> getUnassignedComplaints(@PathVariable("pinCode") int pinCode){
		List<Complaint> complaints = this.complaintService.getComplaintByPinCode(pinCode, false);
		if(complaints.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}else {
			return ResponseEntity.ok(complaints);
		}
	}
	
	@GetMapping("/assigned-complaint/{pinCode}")
	public ResponseEntity<?> getAssignedComplaints(@PathVariable("pinCode") int pinCode){
		List<Complaint> complaints = this.complaintService.getComplaintByPinCode(pinCode, true);
		if(complaints.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}else {
			return ResponseEntity.ok(complaints);
		}
	}
	
	@PutMapping("/assign-engineer/{id}")
	public ResponseEntity<?> complaintAssignEngineer(@PathVariable("id") int id, @RequestBody Complaint complaint){
		this.complaintService.assignEngineer(id, complaint);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@GetMapping("/get-engineers")
	public ResponseEntity<?> getAllEngineers(){
		List<User> engineers = this.userService.getUserByRole("ENGINEER");
		if(engineers.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}else {
			return ResponseEntity.ok(engineers);
		}
	}

}
