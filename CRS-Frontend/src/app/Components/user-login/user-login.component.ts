import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/credentials';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {


  credentials: Credentials = new Credentials();

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit() {
    this.loginService.generateToken(this.credentials).subscribe({
      next: response => {
        //user login
        this.loginService.loginUser(response.token);
        this.loginService.getCurrentUser().subscribe({
          next: user => {
            this.loginService.setUserDetails(user);
            //redirect: to user's dashboard's based on role's
            if (this.loginService.getUserRole() == "ADMIN") {
              //redirect: to admin dashboard
              this.router.navigate(['admin-dashboard']);
            } else if (this.loginService.getUserRole() == "CUSTOMER") {
              //redirect: to customer dashboard
              this.router.navigate(['customer-dashboard']);
            } else if (this.loginService.getUserRole() == "MANAGER") {
              //redirect: to manager dashboard
              this.router.navigate(['manager-dashboard']);
            } else if (this.loginService.getUserRole() == "ENGINEER") {
              //redirect: to engineer dashboard
              this.router.navigate(['engineer-dashboard']);
            }

          }, error: error => {
            console.log(error);
          }
        })

      },
      error: error => {
        console.log(error);
        alert("Invalid Credentials!");
      }
    });

  }
}
