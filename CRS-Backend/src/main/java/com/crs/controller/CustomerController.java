package com.crs.controller;

import java.text.DateFormat;
import java.util.Calendar;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crs.entities.Complaint;
import com.crs.entities.Feedback;
import com.crs.service.ComplaintService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/customer")
public class CustomerController {
	
	@Autowired
	private ComplaintService complaintService;
	
	@PostMapping("/create-complaint")
	public ResponseEntity<Complaint> createComplaint(@Valid @RequestBody Complaint complaint) throws Exception{
		DateFormat df = DateFormat.getDateInstance();
		Calendar cl = Calendar.getInstance();
		String complaintDate = df.format(cl.getTime());
		complaint.setDate(complaintDate);
		complaint.setStatus("RAISED");
		complaint.setActive(true);
		complaint.setAssigned(false);
		complaint.setRemark("Ticket Raised.");
		Complaint newComplaint = this.complaintService.createComplaint(complaint);
//		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newComplaint.getId()).toUri();
//		return ResponseEntity.created(location).build();
		return ResponseEntity.ok(newComplaint);
	}
	
	@GetMapping("/get-complaint/{username}")
	public ResponseEntity<?> getComplaintByUsername(@PathVariable("username") String username){
		List<Complaint> complaints = this.complaintService.findComplaintByUsername(username);
		if(complaints.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}else {
			return ResponseEntity.ok(complaints);
		}
	}
	
	@GetMapping("/complaint-feedback/{id}")
	public ResponseEntity<?> getComplaintById(@PathVariable("id") int id){
		Complaint complaint = this.complaintService.getComplaint(id);
		return ResponseEntity.ok(complaint);
	}
	
	@PostMapping("/save-feedback")
	public ResponseEntity<?> saveFeedback(@RequestBody Feedback feedback) throws Exception{
		Feedback savedFeedback = this.complaintService.saveFeedback(feedback);
		return ResponseEntity.ok(savedFeedback);
	}
	
	
}
