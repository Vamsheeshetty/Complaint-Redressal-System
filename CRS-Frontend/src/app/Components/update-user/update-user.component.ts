import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: User = new User();
  username!: string;
  isValid: boolean = false;
  message!: string;
  constructor(private userService: UserService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    this.getUser();
  }
  getUser() {
    this.userService.getUserByUsername(this.username).subscribe({
      next: (data) => {
        this.user = data;
      }, error: (error) => {
        console.log(error);
      }
    })
  }
  onSubmit() {
    this.userService.updateUser(this.username, this.user).subscribe({
      next: (response) => {
        this.isValid = true;
        this.message = "User successfully updated!";
      }, error: (error) => {
        this.isValid = false;
        this.message = "Invalid user details!";
        console.log(error);
      }
    })
  }


}
