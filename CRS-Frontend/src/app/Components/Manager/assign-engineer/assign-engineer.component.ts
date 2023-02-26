import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/complaint';
import { ComplaintService } from 'src/app/Services/complaint.service';
import { LoginService } from 'src/app/Services/login.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-assign-engineer',
  templateUrl: './assign-engineer.component.html',
  styleUrls: ['./assign-engineer.component.css']
})
export class AssignEngineerComponent implements OnInit {
  id!: number;
  pinCode!: number;
  user!: User[]
  complaint: Complaint = new Complaint();
  isValid!: boolean;
  message!: string;
  constructor(private route: ActivatedRoute, private complaintService: ComplaintService, private router: Router, private loginService: LoginService) {
    this.pinCode = this.loginService.getUserDetails().pinCode;
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getEngineers();
  }
  getEngineers() {
    this.complaintService.getEngineers().subscribe({
      next: (data) => {
        this.user = data;
      }, error: (error) => {
        console.log(error);
      }
    })
  }
  onSubmit() {
    this.complaintService.assignEngineer(this.id, this.complaint).subscribe({
      next: (data) => {
        this.message = "Engineer successfully assigned!"
        this.isValid = true;
      }, error: (error) => {
        this.message = "Something went wrong!";
        this.isValid = false;
      }
    })
  }
  onClick() {
    this.router.navigate(['/manager-dashboard']);
  }


}
