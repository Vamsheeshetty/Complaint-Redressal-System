import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/complaint';
import { ComplaintService } from 'src/app/Services/complaint.service';

@Component({
  selector: 'app-assign-status',
  templateUrl: './assign-status.component.html',
  styleUrls: ['./assign-status.component.css']
})
export class AssignStatusComponent {
  id!: number;
  complaint: Complaint = new Complaint();
  message!: string;
  isValid!: boolean;
  constructor(private route: ActivatedRoute, private complaintService: ComplaintService, private router: Router) {
    this.id = this.route.snapshot.params['id'];
  }
  assignStatus() {
    this.complaintService.updateStatus(this.id, this.complaint).subscribe({
      next: (response) => {
        this.message = "Status updated successfully!";
        this.isValid = true;
      }, error: (error) => {
        console.log(error);
        this.message = "Something went wrong!";
        this.isValid = false;
      }
    })
  }
  onClick() {
    this.router.navigate(['/engineer-dashboard']);
  }

}
