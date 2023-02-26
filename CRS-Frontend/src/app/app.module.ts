import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './Components/Admin/signup/signup.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { authInterceptorProviders } from './Services/auth.interceptor';
import { AdminDashboardComponent } from './Components/Admin/admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { CustomersComponent } from './Components/Customer/customers/customers.component';
import { CustomerDashboardComponent } from './Components/Customer/customer-dashboard/customer-dashboard.component';
import { EngineersComponent } from './Components/Engineer/engineers/engineers.component';
import { EngineerDashboardComponent } from './Components/Engineer/engineer-dashboard/engineer-dashboard.component';
import { ManagersComponent } from './Components/Manager/managers/managers.component';
import { ManagerDashboardComponent } from './Components/Manager/manager-dashboard/manager-dashboard.component';
import { UpdateUserComponent } from './Components/update-user/update-user.component';
import { CreateComplaintComponent } from './Components/Customer/create-complaint/create-complaint.component';
import { RaisedTicketComponent } from './Components/Customer/raised-ticket/raised-ticket.component';
import { FeedbackComponent } from './Components/Customer/feedback/feedback.component';
import { UnassignedComplaintsComponent } from './Components/Manager/unassigned-complaints/unassigned-complaints.component';
import { AssignedComplaintsComponent } from './Components/Manager/assigned-complaints/assigned-complaints.component';
import { AllComplaintsComponent } from './Components/Manager/all-complaints/all-complaints.component';
import { ShowFeedbackComponent } from './Components/show-feedback/show-feedback.component';
import { AssignEngineerComponent } from './Components/Manager/assign-engineer/assign-engineer.component';
import { ComplaintsComponent } from './Components/Engineer/complaints/complaints.component';
import { AssignStatusComponent } from './Components/Engineer/assign-status/assign-status.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    UserLoginComponent,
    AdminDashboardComponent,
    NavbarComponent,
    HomeComponent,
    ChangePasswordComponent,
    CustomersComponent,
    CustomerDashboardComponent,
    EngineersComponent,
    EngineerDashboardComponent,
    ManagersComponent,
    ManagerDashboardComponent,
    UpdateUserComponent,
    CreateComplaintComponent,
    RaisedTicketComponent,
    FeedbackComponent,
    UnassignedComplaintsComponent,
    AssignedComplaintsComponent,
    AllComplaintsComponent,
    ShowFeedbackComponent,
    AssignEngineerComponent,
    ComplaintsComponent,
    AssignStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
