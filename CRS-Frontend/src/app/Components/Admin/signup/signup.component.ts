import { Component } from '@angular/core';
import { SignupService } from 'src/app/Services/signup.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private signUpService: SignupService) {

  }

  user: User = new User();
  message!: string;
  isValid: boolean = false;

  onSubmit() {
    this.signUpService.userSignup(this.user).subscribe({
      next: (user) => {
        this.message = 'User registered successfully!'
        this.isValid = true;
      }, error: (error) => {
        console.log(error);
        this.isValid = false;
        this.message = 'User details are invalid or already exists!'
      }
    })
  }

}
