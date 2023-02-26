import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-engineers',
  templateUrl: './engineers.component.html',
  styleUrls: ['./engineers.component.css']
})
export class EngineersComponent implements OnInit {
  ngOnInit(): void {
    this.getEngineers();
  }
  user!: User[];
  roleName: string = "ENGINEER";
  constructor(private userService: UserService, private router: Router) { }

  getEngineers() {
    this.userService.getUserByRole(this.roleName).subscribe({
      next: (users) => {
        this.user = users;
      }, error: (error) => {
        console.log(error);
        alert("No Engineer Found!");
      }
    })
  }
  deleteEngineer(userId: number) {
    this.userService.deleteUser(userId).subscribe({
      next: (user) => {
        this.getEngineers();
      }, error: (error) => {
        console.log(error);
      }
    })
  }
  updateEngineer(username: string) {
    let url = "/update-user/" + username;
    this.router.navigateByUrl(url);

  }

}
