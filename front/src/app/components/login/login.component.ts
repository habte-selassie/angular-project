import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../Auth/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  message : string;

  constructor(public authService:AuthService , public router : Router){
    this.message = this.getMessage()
  }

  getMessage(){
    return 'Logged' + (this.authService.isLoggedIn ? 'in' : 'out')
  }

  login(){
    this.message = 'Trying to log in...'

    this.authService.login().subscribe(()=>{
      this.message = this.getMessage()
 // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
      if(this.authService.isLoggedIn){
        const redirectUrl = '/admin'


        
        // Set our navigation extras object
        // that passes on our global query params and fragment

        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        }

        // redirect the user 
        
        this.router.navigate([redirectUrl],
          navigationExtras)

      }
    })
  }

  logout(){
    this.authService.logout();
    this.message = this.getMessage()
  }

}
