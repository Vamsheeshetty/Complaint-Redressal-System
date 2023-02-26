import { Component } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-engineer-dashboard',
  templateUrl: './engineer-dashboard.component.html',
  styleUrls: ['./engineer-dashboard.component.css']
})
export class EngineerDashboardComponent {
  name!: string;
  constructor(private loginService: LoginService) {
    this.name = this.loginService.getUserDetails().firstName + ' ' + this.loginService.getUserDetails().lastName + ' (' + this.loginService.getUserDetails().username + ')';
  }

}
