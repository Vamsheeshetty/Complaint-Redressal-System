import { Component } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent {

  name!: string;
  constructor(private loginService: LoginService) {
    this.name = this.loginService.getUserDetails().firstName + ' ' + this.loginService.getUserDetails().lastName + ' (' + this.loginService.getUserDetails().username + ')';
  }

}
