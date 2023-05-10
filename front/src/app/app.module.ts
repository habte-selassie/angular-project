import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AddEmployeeComponent } from './Employees/add-employee/add-employee.component';
import { ReadEmployeeComponent } from './Employees/read-employee/read-employee.component';
import { UpdateEmployeeComponent } from './Employees/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './Employees/delete-employee/delete-employee.component';
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
import { LogoutComponent } from './components/logout/logout.component';


import { HttpClientModule } from '@angular/common/http';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmployeeDataService } from './Api/employee-in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeModel } from '../app/model/employee.ts.component';


const routes:Routes = [
  {path:'home',component:AppComponent},
  {path:'list-employee',component:ReadEmployeeComponent},
  {path:'add-employee',component:AddEmployeeComponent},
  {path:'logout',component:LogoutComponent},
 

]




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddEmployeeComponent,
    ReadEmployeeComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    LogoutComponent,
   
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
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(EmployeeDataService),
    AppRoutingModule,
    // EmployeeModel
    
  ],
  exports:[
   RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
