import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/feedback';
import { ComplaintService } from 'src/app/Services/complaint.service';

@Component({
  selector: 'app-show-feedback',
  templateUrl: './show-feedback.component.html',
  styleUrls: ['./show-feedback.component.css']
})
export class ShowFeedbackComponent implements OnInit {
  feedback!: Feedback[];
  ngOnInit(): void {
    this.getAllFeedbacks();
  }
  constructor(private complaintService: ComplaintService) { }

  getAllFeedbacks() {
    this.complaintService.findAllFeedbacks().subscribe({
      next: (data) => {
        this.feedback = data;
      }, error: (error) => {
        console.log(error);
        alert('No Feedback found!');
      }
    })
  }

}
