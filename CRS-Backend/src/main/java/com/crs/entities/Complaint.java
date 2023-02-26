package com.crs.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Entity
public class Complaint {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@NotNull(message = "username field is required")
	private String username;

	@NotNull(message = "first name field is required")
	private String firstName;

	@NotNull(message = "last name field is required")
	private String lastName;

	@NotNull(message = "address field is required")
	private String address;

	@NotNull(message = "enter 6 digit pincode")
	@Min(100000)
	private int pinCode;

	@NotNull(message = "state field is required")
	private String state;

	@NotNull(message = "contact field is required")
	private String contact;

	@NotNull(message = "complaint field is required")
	private String complaint;

	private String status;
	
	private String assignedEngineer;
	
	private String remark;
	
	private String date;
	
	private boolean isActive;
	
	private boolean isAssigned;

	public Complaint() {

	}

	public Complaint(int id, String username, String firstName, String lastName, String address, int pinCode,
			String state, String contact, String complaint, String status, String assignedEngineer, String remark, String date, boolean isActive, boolean isAssigned) {
		super();
		this.id = id;
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.pinCode = pinCode;
		this.state = state;
		this.contact = contact;
		this.complaint = complaint;
		this.status = status;
		this.assignedEngineer = assignedEngineer;
		this.remark = remark;
		this.date = date;
		this.isActive = isActive;
		this.isAssigned = isAssigned;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getPinCode() {
		return pinCode;
	}

	public void setPinCode(int pinCode) {
		this.pinCode = pinCode;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getComplaint() {
		return complaint;
	}

	public void setComplaint(String complaint) {
		this.complaint = complaint;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getAssignedEngineer() {
		return assignedEngineer;
	}

	public void setAssignedEngineer(String assignedEngineer) {
		this.assignedEngineer = assignedEngineer;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public boolean isActive() {
		return isActive;
	}

	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}

	public boolean isAssigned() {
		return isAssigned;
	}

	public void setAssigned(boolean isAssigned) {
		this.isAssigned = isAssigned;
	}
	
}
