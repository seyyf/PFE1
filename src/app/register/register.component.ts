import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  faFacebookF = faFacebookF;
  faGoogle = faGoogle;
  authError : any;
  user: firebase.User;

  constructor(private auth: AuthService, private router: Router) {   }


    ngOnInit(){
      this.auth.eventAuthError$.subscribe( data =>{
        this.authError = data;
      })

      this.auth.getUserState()
        .subscribe( user =>{
          this.user = user;
        });
      this.auth.eventAuthError$.subscribe(data =>{
        this.authError = data;
      });
    }

    loginn(frm){
      this.auth.loginn(frm.value.email, frm.value.password);
    }

    //registrationForm
    createUser(frm){
      this.auth.createUser(frm.value);
    }

    //simple login
    simpleLogin(){
      this.router.navigate(['/particulier']);
    }

    //facebook login
    loginWithFacebook(){
      this.auth.loginWithFacebook();
    }


    //google login
    login(){
      this.auth.login();
    }
}
