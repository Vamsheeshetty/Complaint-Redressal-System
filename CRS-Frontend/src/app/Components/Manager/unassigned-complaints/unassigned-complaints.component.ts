import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Complaint } from 'src/app/complaint';
import { ComplaintService } from 'src/app/Services/complaint.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-unassigned-complaints',
  templateUrl: './unassigned-complaints.component.html',
  styleUrls: ['./unassigned-complaints.component.css']
})
export class UnassignedComplaintsComponent implements OnInit {
  pinCode!: number;
  complaint!: Complaint[];
  constructor(private loginService: LoginService, private complaintService: ComplaintService, private router: Router) {
    this.pinCode = this.loginService.getUserDetails().pinCode;
  }
  ngOnInit(): void {
    this.getUnassignedComplaints();
  }
  getUnassignedComplaints() {
    this.complaintService.findUnassignedComplaints(this.pinCode).subscribe({
      next: (ticket) => {
        this.complaint = ticket;
      }, error: (error) => {
        console.log(error);
        alert("No Unassigned Complaints found!");
      }
    })

  }
  onClick(id: number) {
    let url = "/assign-engineer/complaint/" + id;
    this.router.navigateByUrl(url);
  }

}
