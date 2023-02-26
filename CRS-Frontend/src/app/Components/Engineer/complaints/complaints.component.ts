import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Complaint } from 'src/app/complaint';
import { ComplaintService } from 'src/app/Services/complaint.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  assignedEngineer!: string;
  complaint!: Complaint[];
  constructor(private loginService: LoginService, private complaintService: ComplaintService, private router: Router) {
    this.assignedEngineer = this.loginService.getUserDetails().username;
  }
  ngOnInit(): void {
    this.getAllAssignedComplaints();
  }
  getAllAssignedComplaints() {
    this.complaintService.getAllComplaintsAssigned(this.assignedEngineer).subscribe({
      next: (ticket) => {
        this.complaint = ticket;
      }, error: (error) => {
        console.log(error);
        alert("No Assigned Complaints Found!");
      }
    })
  }

  onClick(id: number) {
    let url = "/engineer/assign-status/" + id;
    this.router.navigateByUrl(url);
  }



}
