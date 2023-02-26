import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {
  ngOnInit(): void {
    this.getManagers();
  }
  constructor(private userService: UserService, private router: Router) { }
  user!: User[];
  roleName: string = "MANAGER";

  getManagers() {
    this.userService.getUserByRole(this.roleName).subscribe({
      next: (users) => {
        this.user = users;
      }, error: (error) => {
        console.log(error);
        alert("No Manager Found!");
      }
    })
  }
  deleteEngineer(userId: number) {
    this.userService.deleteUser(userId).subscribe({
      next: (user) => {
        this.getManagers();
      }, error: (error) => {
        console.log(error);
      }
    })
  }
  updateManager(username: string) {
    let url = "/update-user/" + username;
    this.router.navigateByUrl(url);

  }
}
