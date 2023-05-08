import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-read-candidate',
  templateUrl: './read-candidate.component.html',
  styleUrls: ['./read-candidate.component.css']
})
export class ReadCandidateComponent {

  value = "Clear Me"

  email = new FormControl('',[Validators.required,Validators.email])
    
  getErrorMessage(){
    if(this.email.hasError('required')){
      return 'You Must Enter A Value'
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
     
    }
}
