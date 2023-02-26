import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Complaint } from 'src/app/complaint';
import { ComplaintService } from 'src/app/Services/complaint.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-create-complaint',
  templateUrl: './create-complaint.component.html',
  styleUrls: ['./create-complaint.component.css']
})
export class CreateComplaintComponent {
  complaint: Complaint = new Complaint();
  isValid: boolean = false;
  message!: string;
  constructor(private loginService: LoginService, private complaintService: ComplaintService, private router: Router) {
    this.complaint.username = this.loginService.getUserDetails().username;
    this.complaint.firstName = this.loginService.getUserDetails().firstName;
    this.complaint.lastName = this.loginService.getUserDetails().lastName;
    this.complaint.contact = this.loginService.getUserDetails().phone;
  }

  onSubmit() {
    this.complaintService.createComplaint(this.complaint).subscribe({
      next: (response) => {
        this.isValid = true;
        this.message = "Ticket Raised Successfully!";
        this.complaint = response;
      }, error: (error) => {
        this.isValid = false;
        this.message = "Complaint is already registered!";
        console.log(error);
      }
    })
  }

  onClick() {
    this.router.navigate(['/customer-dashboard']);
  }



}
