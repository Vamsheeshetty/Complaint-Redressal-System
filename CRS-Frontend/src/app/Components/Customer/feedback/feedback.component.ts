import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/complaint';
import { Feedback } from 'src/app/feedback';
import { ComplaintService } from 'src/app/Services/complaint.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private route: ActivatedRoute, private complaintService: ComplaintService, private router: Router) { }
  id!: number;
  complaint: Complaint = new Complaint();
  feedback: Feedback = new Feedback();
  message!: string;
  isValid!: boolean;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getComplaintById();
  }

  getComplaintById() {
    this.complaintService.findComplaintById(this.id).subscribe({
      next: (ticket) => {
        this.complaint = ticket;
        this.feedback.cid = this.complaint.id;
        this.feedback.username = this.complaint.username;
        this.feedback.complaint = this.complaint.complaint;
      }, error: (error) => {
        console.log(error);
      }
    })
  }
  onSubmit() {
    this.complaintService.saveFeedback(this.feedback).subscribe({
      next: (response) => {
        this.message = "Feedback successfully submitted!";
        this.isValid = true;
      }, error: (error) => {
        console.log(error)
        this.message = "Feedback already submitted!";
        this.isValid = false;
      }
    })
  }

  onClick() {
    this.router.navigate(['/customer-dashboard']);
  }

}
