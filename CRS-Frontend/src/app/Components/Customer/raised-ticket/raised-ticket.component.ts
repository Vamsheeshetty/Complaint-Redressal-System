import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Complaint } from 'src/app/complaint';
import { ComplaintService } from 'src/app/Services/complaint.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-raised-ticket',
  templateUrl: './raised-ticket.component.html',
  styleUrls: ['./raised-ticket.component.css']
})
export class RaisedTicketComponent implements OnInit {

  complaint!: Complaint[];
  username!: string;
  constructor(private complaintService: ComplaintService, private loginService: LoginService, private router: Router) { }
  ngOnInit(): void {
    this.getComplaint();
  }

  getComplaint() {
    this.username = this.loginService.getUserDetails().username;
    this.complaintService.getComplaintByUsername(this.username).subscribe({
      next: (tickets) => {
        this.complaint = tickets;
        console.log(tickets);
      }, error: (error) => {
        console.log(error);
        alert("No Complaints Registered!");
      }
    })
  }
  onClick(id: number) {
    let url = "/feedback/complaint/" + id;
    this.router.navigateByUrl(url);
  }

}
