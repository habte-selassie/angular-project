import { Component } from '@angular/core';
import {FormControl} from '@angular/forms'
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  value = "Clear Me"

  email = new FormControl('',[Validators.required,Validators.email])
    
  getErrorMessage(){
    if(this.email.hasError('required')){
      return 'You Must Enter A Value'
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
     
    }
}
