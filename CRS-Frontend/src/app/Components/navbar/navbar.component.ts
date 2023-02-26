import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public loginService: LoginService, private router: Router) { }

  logout() {
    this.loginService.logout();
    window.location.reload();
  }
  dashboard() {
    if (this.loginService.getUserRole() == 'ADMIN') {
      this.router.navigate(['/admin-dashboard']);
    } else if (this.loginService.getUserRole() == 'CUSTOMER') {
      this.router.navigate(['/customer-dashboard']);
    } else if (this.loginService.getUserRole() == 'MANAGER') {
      this.router.navigate(['/manager-dashboard']);
    } else if (this.loginService.getUserRole() == 'ENGINEER') {
      this.router.navigate(['/engineer-dashboard']);
    }
  }

}
