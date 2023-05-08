import { Component, NgModule } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})



export class AddCandidateComponent {
value = "Clear Me"

email = new FormControl('',[Validators.required,Validators.email])
  
getErrorMessage(){
  if(this.email.hasError('required')){
    return 'You Must Enter A Value'
  }
  return this.email.hasError('email') ? 'Not a valid email' : '';
   
  }
}
