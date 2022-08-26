import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
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
  phoneNo: any;
  mail: any;
  clg: any;

  yourEvents: any;
  public regPaid= false;
  public SubmittedAccomadationReqButton= false;
  public accomadationPaid=false;

  public disableAccomadtionSelect= false;

  public yesChecked= false;
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
      this.class= this.userDetail.degree + " " +this.userDetail.year + " " +this.userDetail.department
      this.clg= this.userDetail.college;
      this.phoneNo= this.userDetail.phone_number;
      this.mail= this.userDetail.email
      this.yourEvents= this.userDetail.yourEvents
    })
  }


  submitAccomadationReq(){
    // console.log(document.getElementById("yesRadio"))



  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("username");
    const redirectUrl = '/login';
    // Redirect the user
    this.router.navigate([redirectUrl], {queryParams: { logout: 'true' }});
  }
  accomodationSelected ( ): void {
    this.yesChecked = true
  }
  accomodationNotSelected ( ) : void  {
    this.yesChecked = false
  }
  pay ( ) {
    this.myDb.pay ( { amount: 200.00 + ( this.yesChecked ? 100 : 0 ) } ).subscribe ( ( response => {
      let htmlBody = `
      <html>
      <body>
      <form action="${response.payurl}" id = "forms" method="post">
      <input type="hidden" name="key" value="${response.data.key}" />
      <input type="hidden" name="txnid" value="${response.data.txnid}" />
      <input type="hidden" name="productinfo" value="${response.data.productinfo}" />
      <input type="hidden" name="amount" value="${response.data.amount}" />
      <input type="hidden" name="email" value="${response.data.email}" />
      <input type="hidden" name="firstname" value="${response.data.firstname}" />
      <input type="hidden" name="surl" value="https://legacymepco.herokuapp.com/payment_status" />
      <input type="hidden" name="furl" value="https://legacymepco.herokuapp.com/payment_status" />
      <input type="hidden" name="phone" value="${response.data.phone}" />
      <input type="hidden" name="hash" value="${response.data.hash}" />
      <input hidden type="submit" value="submit"> </form>
      <script type="text/javascript"> document.getElementById ( 'forms' ).submit ( ) </script>
      </body>
     </html> `
     let url = URL.createObjectURL ( new Blob ( [ htmlBody ] , { type: 'text/html' } ) )
     window.location.href = url
    } ) )
  }

}
