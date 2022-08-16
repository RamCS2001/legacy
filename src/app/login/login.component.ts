import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { DbUtilityService } from '../db-utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  msg="";
  error="";
  public success = false;
  public alert= false;
  public wait= false;
  public loading= false;

  constructor(private myDb:DbUtilityService,private router: Router, private route: ActivatedRoute ) { 
  }

  ngOnInit(): void {
    if(this.myDb.isLoggedIn()){
      const redirectUrl = '/';
      // Redirect the user
      this.router.navigate([redirectUrl]);
    }
    this.route.queryParams
    .subscribe(params => {
      if(params['registered'] !== undefined && params['registered'] === 'true') {
          this.msg = 'Registration Successful! Please Login!';
          this.success= true;
      }
      if(params['logout'] !== undefined && params['logout'] === 'true') {
        this.msg = 'You have been successfully Logged out, Thank you!';
        this.success= true;
      }
      if(params['expired'] !== undefined && params['expired'] === 'true') {
        this.error = 'Your Session has been expired. Please Login again';
        this.alert= true;
      }
    });
    window.scroll(0,0);
  }

  login(){

    if(!this.loginForm.valid){
      this.error="Enter All the Details";
      this.success= false;
      this.alert=true;
      return;
    }

    this.wait=true;
    this.loading= true;
    this.myDb.loginUser(this.loginForm.value).subscribe((response: any)=>{
      this.success=false;
      if(response["message"]==0){
        this.error="Invalid Password";
        this.alert=true;
        this.wait=false;
        this.loading=false;
        return;
       }
      else if(response["message"]==-2){
        // alert("Error in creating User");
        this.success= false;
        this.error="Mail ID Not Registered";
        this.alert=true;
        this.wait=false;
        this.loading=false;
        return;
      }
      else if(response["message"]==-1){
        this.success= false;
        this.error="Error in signing in contact the admin";
        this.alert=true;
        this.wait=false;
        this.loading=false;
        return;
      }
      else{
        this.myDb.setSession(response)
        const redirectUrl = '/profile';
        // Redirect the user
        this.router.navigate([redirectUrl]);
      }
    });

  }

}
