import { Component, OnInit } from '@angular/core';
import { Complaint } from 'src/app/complaint';
import { ComplaintService } from 'src/app/Services/complaint.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-assigned-complaints',
  templateUrl: './assigned-complaints.component.html',
  styleUrls: ['./assigned-complaints.component.css']
})
export class AssignedComplaintsComponent implements OnInit {
  pinCode!: number;
  complaint!: Complaint[];
  constructor(private loginService: LoginService, private complaintService: ComplaintService) {
    this.pinCode = this.loginService.getUserDetails().pinCode;
  }
  ngOnInit(): void {
    this.getAssignedComplaints();
  }
  getAssignedComplaints() {
    this.complaintService.findAssignedComplaints(this.pinCode).subscribe({
      next: (ticket) => {
        this.complaint = ticket;
      }, error: (error) => {
        console.log(error);
        alert("No Assigned Complaints found!");
      }
    })

  }


}

