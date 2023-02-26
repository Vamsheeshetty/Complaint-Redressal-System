import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  user!: User[];
  roleName: string = "CUSTOMER";
  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers() {
    this.userService.getUserByRole(this.roleName).subscribe({
      next: (users) => {
        this.user = users;
      }, error: (error) => {
        console.log(error);
        alert("No Customer Found!");
      }
    })
  }
  deleteCustomer(userId: number) {
    this.userService.deleteUser(userId).subscribe({
      next: (user) => {
        this.getCustomers();
      }, error: (error) => {
        console.log(error);
      }
    })
  }
  updateCustomer(username: string) {
    let url = "/update-user/" + username;
    this.router.navigateByUrl(url);

  }



}
