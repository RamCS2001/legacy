import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbUtilityService } from '../db-utility.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [DbUtilityService]
})
export class RegisterComponent implements OnInit {

  public clicked=false;
  error="";
  public alerts=false;
  public loading= false;

  constructor(private myDb:DbUtilityService,private router: Router) { }


  addUser = new FormGroup({
    name: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    phone_number: new FormControl('', [Validators.required]),
    college: new FormControl('', [Validators.required]),
    otherCollege: new FormControl(''), 
    password: new FormControl('', [Validators.required]),
    cpassword: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required]),
    degree: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required])
  }); 

  ngOnInit(): void {

    if(this.myDb.isLoggedIn()){
      const redirectUrl = '/';
      // Redirect the user
      this.router.navigate([redirectUrl]);
    }
  }

  user: any;
  createAccount(){
    // console.log(this.addUser.value)
    if(!this.addUser.valid){
      this.error="Enter Valid values";
      this.alerts=true;
      return;
    }
    else{
      if(this.addUser.value.password!=this.addUser.value.cpassword){
        this.error="Passwords Mismatch";
        this.alerts=true;
        return;
      }
    }

    this.clicked=true;
    this.loading= true;

    this.user= this.addUser.value;

    console.log(this.user)

    this.myDb.createUser(this.user).subscribe((response: any)=>{

      if(response["message"]==1){

        this.myDb.registerationSuccess.next("Account Registered Successfully");

        const redirectUrl = '/login';
        // Redirect the user
        this.router.navigate([redirectUrl], {queryParams: { registered: 'true' } });
      }
      else if(response["message"]==2){
        this.error="Mail Id Already taken";
        this.alerts=true;
        this.clicked=false;
        this.loading= false;
        return;
      }
      else if(response["message"]==3){
        this.error="Phone number already taken";
        this.alerts=true;
        this.clicked=false;
        this.loading= false;
        return;
      }
      else if ( response [ "message" ] == 0 ){
        // alert("Error in creating User");
        this.error="Error in Creating an Account Contact Admin through query box below!";
        this.alerts=true;
        this.clicked=false;
        this.loading= false;
        return;
      }
    });
  }
}
