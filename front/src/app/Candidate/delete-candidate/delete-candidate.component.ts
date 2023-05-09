import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-delete-candidate',
  templateUrl: './delete-candidate.component.html',
  styleUrls: ['./delete-candidate.component.css']
})
export class DeleteCandidateComponent {

  value = "Clear Me"

  email = new FormControl('',[Validators.required,Validators.email])
    
  getErrorMessage(){
    if(this.email.hasError('required')){
      return 'You Must Enter A Value'
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
     
    }

}