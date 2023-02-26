import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Complaint } from 'src/app/complaint';
import { ComplaintService } from 'src/app/Services/complaint.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-all-complaints',
  templateUrl: './all-complaints.component.html',
  styleUrls: ['./all-complaints.component.css']
})
export class AllComplaintsComponent implements OnInit {
  complaint!: Complaint[];
  constructor(private complaintService: ComplaintService, private router: Router) {
  }
  ngOnInit(): void {
    this.getAllComplaints();
  }
  getAllComplaints() {
    this.complaintService.findAllComplaints().subscribe({
      next: (ticket) => {
        this.complaint = ticket;
      }, error: (error) => {
        console.log(error);
        alert("No Complaints found!");
      }
    })

  }
  onClick(id: number) {
    let url = "/assign-engineer/complaint/" + id;
    this.router.navigateByUrl(url);
  }


}