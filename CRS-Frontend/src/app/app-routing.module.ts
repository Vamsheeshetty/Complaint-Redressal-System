import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Components/Admin/admin-dashboard/admin-dashboard.component';
import { SignupComponent } from './Components/Admin/signup/signup.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { CreateComplaintComponent } from './Components/Customer/create-complaint/create-complaint.component';
import { CustomerDashboardComponent } from './Components/Customer/customer-dashboard/customer-dashboard.component';
import { CustomersComponent } from './Components/Customer/customers/customers.component';
import { FeedbackComponent } from './Components/Customer/feedback/feedback.component';
import { RaisedTicketComponent } from './Components/Customer/raised-ticket/raised-ticket.component';
import { AssignStatusComponent } from './Components/Engineer/assign-status/assign-status.component';
import { ComplaintsComponent } from './Components/Engineer/complaints/complaints.component';
import { EngineerDashboardComponent } from './Components/Engineer/engineer-dashboard/engineer-dashboard.component';
import { EngineersComponent } from './Components/Engineer/engineers/engineers.component';
import { HomeComponent } from './Components/home/home.component';
import { AllComplaintsComponent } from './Components/Manager/all-complaints/all-complaints.component';
import { AssignEngineerComponent } from './Components/Manager/assign-engineer/assign-engineer.component';
import { AssignedComplaintsComponent } from './Components/Manager/assigned-complaints/assigned-complaints.component';
import { ManagerDashboardComponent } from './Components/Manager/manager-dashboard/manager-dashboard.component';
import { ManagersComponent } from './Components/Manager/managers/managers.component';
import { UnassignedComplaintsComponent } from './Components/Manager/unassigned-complaints/unassigned-complaints.component';
import { ShowFeedbackComponent } from './Components/show-feedback/show-feedback.component';
import { UpdateUserComponent } from './Components/update-user/update-user.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { AdminGuard } from './Services/admin.guard';
import { AuthenticateGuard } from './Services/authenticate.guard';
import { CustomerGuard } from './Services/customer.guard';
import { EngineerGuard } from './Services/engineer.guard';
import { ManagerGuard } from './Services/manager.guard';

const routes: Routes =
  [{ path: '', component: HomeComponent, pathMatch: 'full', title: 'ABC Telecom CRS' },
  { path: 'user-login', component: UserLoginComponent, pathMatch: 'full', title: 'User Login' },
  { path: 'admin-dashboard', component: AdminDashboardComponent, pathMatch: 'full', canActivate: [AdminGuard], title: 'Admin Dashboard' },
  { path: 'register-user', component: SignupComponent, pathMatch: 'full', canActivate: [AdminGuard], title: 'User Registration' },
  { path: 'change-password', component: ChangePasswordComponent, pathMatch: 'full', canActivate: [AuthenticateGuard], title: 'Change Password' },
  { path: 'customer-dashboard', component: CustomerDashboardComponent, pathMatch: 'full', canActivate: [CustomerGuard], title: 'Customer Dashboard' },
  { path: 'manager-dashboard', component: ManagerDashboardComponent, canActivate: [ManagerGuard], pathMatch: 'full', title: 'Manager Dashboard' },
  { path: 'engineer-dashboard', component: EngineerDashboardComponent, canActivate: [EngineerGuard], pathMatch: 'full', title: 'Engineer Dashboard' },
  { path: 'customers', component: CustomersComponent, pathMatch: 'full', canActivate: [AdminGuard], title: 'Customers' },
  { path: 'managers', component: ManagersComponent, pathMatch: 'full', canActivate: [AdminGuard], title: 'Managers' },
  { path: 'engineers', component: EngineersComponent, pathMatch: 'full', canActivate: [AdminGuard], title: 'Engineers' },
  { path: 'update-user/:username', component: UpdateUserComponent, pathMatch: 'full', canActivate: [AdminGuard], title: 'Update User' },
  { path: 'create-complaint', component: CreateComplaintComponent, pathMatch: 'full', canActivate: [CustomerGuard], title: 'Create Complaint' },
  { path: 'customer/get-complaints', component: RaisedTicketComponent, pathMatch: 'full', canActivate: [CustomerGuard], title: 'All Complaints' },
  { path: 'feedback/complaint/:id', component: FeedbackComponent, pathMatch: 'full', canActivate: [CustomerGuard], title: 'Feedback' },
  { path: 'complaints/unassigned', component: UnassignedComplaintsComponent, pathMatch: 'full', canActivate: [ManagerGuard], title: 'Unassigned Complaints' },
  { path: 'complaints/assigned', component: AssignedComplaintsComponent, pathMatch: 'full', canActivate: [ManagerGuard], title: 'Assigned Complaints' },
  { path: 'all-complaints', component: AllComplaintsComponent, pathMatch: 'full', canActivate: [ManagerGuard], title: 'All Complaints' },
  { path: 'customers-feedback', component: ShowFeedbackComponent, pathMatch: 'full', canActivate: [AuthenticateGuard], title: 'Customer Feedback' },
  { path: 'assign-engineer/complaint/:id', component: AssignEngineerComponent, pathMatch: 'full', canActivate: [ManagerGuard], title: 'Assign Engineer' },
  { path: 'engineer/assigned-complaints', component: ComplaintsComponent, pathMatch: 'full', canActivate: [EngineerGuard], title: 'Complaints Assigned' },
  { path: 'engineer/assign-status/:id', component: AssignStatusComponent, pathMatch: 'full', canActivate: [EngineerGuard], title: 'Assign Status' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
