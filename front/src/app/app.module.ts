import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { AddCandidateComponent } from './Candidate/add-candidate/add-candidate.component';
import { ReadCandidateComponent } from './Candidate/read-candidate/read-candidate.component';
import { UpdateCandidateComponent } from './Candidate/update-candidate/update-candidate.component';
import { DeleteCandidateComponent } from './Candidate/delete-candidate/delete-candidate.component';
import { CompanyListComponent } from './Company/company-list/company-list.component';
import { CompanyDetailsComponent } from './Company/company-details/company-details.component';
import { DepartmentListComponent } from './Department/department-list/department-list.component';
import { DepartmentDetailsComponent } from './Department/department-details/department-details.component';
import { AddEmployeeComponent } from './Employees/add-employee/add-employee.component';
import { ReadEmployeeComponent } from './Employees/read-employee/read-employee.component';
import { UpdateEmployeeComponent } from './Employees/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './Employees/delete-employee/delete-employee.component';
import { AddSalaryComponent } from './Salary/add-salary/add-salary.component';
import { ReadSalaryComponent } from './Salary/read-salary/read-salary.component';
import { UpdateSalaryComponent } from './Salary/update-salary/update-salary.component';
import { DeleteSalaryComponent } from './Salary/delete-salary/delete-salary.component';
import { MatButtonModule } from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card'
import {MatTableModule} from '@angular/material/table'
import { MatCardImage } from '@angular/material/card';

const routes:Routes = [
  {path:'',component:AppComponent},
  {path:'candidate',component:AddCandidateComponent},
  {path:'employee',component:AddEmployeeComponent},
  {path:'salary',component:AddSalaryComponent},
  {path:'',component:AddCandidateComponent},
  {path:'',component:AddCandidateComponent},
  {path:'',component:AddCandidateComponent}

]




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CreateUserComponent,
    ListUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    AddCandidateComponent,
    ReadCandidateComponent,
    UpdateCandidateComponent,
    DeleteCandidateComponent,
    CompanyListComponent,
    CompanyDetailsComponent,
    DepartmentListComponent,
    DepartmentDetailsComponent,
    AddEmployeeComponent,
    ReadEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    AddSalaryComponent,
    ReadSalaryComponent,
    UpdateSalaryComponent,
    DeleteSalaryComponent,
   
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatTableModule,
    // MatCardImage
    
  ],
  exports:[
   RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
