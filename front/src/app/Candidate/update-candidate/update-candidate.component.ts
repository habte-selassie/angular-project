import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrls: ['./update-candidate.component.css']
})
export class UpdateCandidateComponent {
  value = "Clear Me"

  email = new FormControl('',[Validators.required,Validators.email])
    
  getErrorMessage(){
    if(this.email.hasError('required')){
      return 'You Must Enter A Value'
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
     
    }
}
