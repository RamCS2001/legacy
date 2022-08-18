import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbUtilityService } from '../db-utility.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: any;
  userDetail: any;
  class: any;
  rollno: any;
  adminno: any;
  mail: any;
  yourEvents: any;
  public regPaid= false;
  public SubmittedAccomadationReqButton= false;
  public accomadationPaid=false;

  public disableAccomadtionSelect= false;

  public yesChecked= false;
  public noChecked= true;
  accomadationForm= new FormGroup({
    accomadation: new FormControl('',[Validators.required])
  })

  constructor(private myDb: DbUtilityService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("username")=="admin"){
      const redirectUrl = '/admin';
      this.router.navigate([redirectUrl]);
    }
    window.scroll(0,0);
    this.name= localStorage.getItem("username");
    this.myDb.getUserDetails().subscribe((response: any)=>{
      if(response["message"]==-1){
        const redirectUrl = '/login';
        // Redirect the user
        this.router.navigate([redirectUrl], {queryParams: { expired: 'true' } });
        return
      }
      this.userDetail= response["userDetails"]
      this.class= this.userDetail.year + " " +this.userDetail.department + " " +this.userDetail.section
      this.rollno= this.userDetail.roll_number;
      this.adminno= this.userDetail.admission_number;
      this.mail= this.userDetail.email
      this.yourEvents= this.userDetail.yourEvents
    })
  }


  submitAccomadationReq(){
    console.log(this.accomadationForm.value)

  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("username");
    const redirectUrl = '/login';
    // Redirect the user
    this.router.navigate([redirectUrl], {queryParams: { logout: 'true' }});
  }
}
