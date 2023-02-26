package com.crs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Service;

import com.crs.entities.Complaint;
import com.crs.entities.Feedback;
import com.crs.repo.ComplaintRepo;
import com.crs.repo.FeedbackRepo;

@Service
public class ComplaintService {
	
	@Autowired
	private ComplaintRepo complaintRepo;
	
	@Autowired
	private FeedbackRepo feedbackRepo;
	
	public ComplaintService(ComplaintRepo complaintRepo) {
		this.complaintRepo = complaintRepo;
	}
	
	//create a new complaint
	public Complaint createComplaint(Complaint complaint) throws Exception {
		Complaint ticket = this.complaintRepo.findByComplaintAndUsernameAndIsActive(complaint.getComplaint(), complaint.getUsername(), complaint.isActive());
		if(ticket!=null) {
			throw new Exception("Complaint is already registered!");
		}else {
			ticket = this.complaintRepo.save(complaint);
		}
		return ticket;
	}
	
	//get complaint by username
	public List<Complaint> findComplaintByUsername(String username){
		List<Complaint> complaints = this.complaintRepo.findByUsername(username);
		return complaints;
	}
	
	//get all complaints
	public List<Complaint> findAllComplaint(){
		Iterable<Complaint> complaints = this.complaintRepo.findAll();
		List<Complaint> tickets = Streamable.of(complaints).toList();	
		return tickets;
	}
	
	//get all isAssigned complaints
	public List<Complaint> findAssignedComplaint(boolean isAssigned){
		List<Complaint> complaints = this.complaintRepo.findByIsAssigned(isAssigned);
		return complaints;
	}
	
	//find complaint by id
	public Complaint getComplaint(int id) {
		Complaint complaint = this.complaintRepo.findById(id).get();
		return complaint;
	}
	
	//find assigned complaint by PinCode
	public List<Complaint> getComplaintByPinCode(int pinCode, boolean isAssigned){
		List<Complaint> complaints = this.complaintRepo.findByPinCodeAndIsAssigned(pinCode, isAssigned);
		return complaints;
	}
	
	//assign engineer
	public Complaint assignEngineer(int id, Complaint complaint) {
		Complaint updateComplaint = this.complaintRepo.findById(id).get();
		updateComplaint.setAssigned(true);
		updateComplaint.setAssignedEngineer(complaint.getAssignedEngineer());
		updateComplaint.setRemark("Assigned to Engineer");
		Complaint assignedComplaint = this.complaintRepo.save(updateComplaint);
		return assignedComplaint;
	}
	
	//find complaint by assigned engineer
	public List<Complaint> assignedComplaints(String assignedEngineer){
		List<Complaint> complaints = this.complaintRepo.findByAssignedEngineer(assignedEngineer);
		return complaints;
	}
	
	//update status by engineer
	public Complaint updateStatus(int id, Complaint complaint) {
		Complaint updateComplaint = this.complaintRepo.findById(id).get();
		if(complaint.getStatus().contentEquals("WIP")) {
			updateComplaint.setStatus(complaint.getStatus());
			updateComplaint.setRemark(complaint.getRemark());
			updateComplaint.setActive(true);
		}else {
			updateComplaint.setStatus(complaint.getStatus());
			updateComplaint.setRemark(complaint.getRemark());
			updateComplaint.setActive(false);
		}
		
		Complaint resolveComplaint = this.complaintRepo.save(updateComplaint);
		return resolveComplaint;
	}
	
	//save feedback
	public Feedback saveFeedback(Feedback feedback) throws Exception {
		Feedback getFeedback = this.feedbackRepo.findByCid(feedback.getCid());
		if(getFeedback==null) {
			Feedback save = this.feedbackRepo.save(feedback);
			return save;
		}else {
			throw new Exception("Feedback already registered!");
		}
	}
	
	//get all feedback
	public List<Feedback> findAllFeedback(){
		List<Feedback> feedbacks = this.feedbackRepo.findAll();
		return feedbacks;
	}

	
}
