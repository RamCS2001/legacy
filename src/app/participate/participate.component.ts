import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, convertToParamMap, Router, TitleStrategy } from '@angular/router';
import { DbUtilityService } from '../db-utility.service';

@Component({
  selector: 'app-participate',
  templateUrl: './participate.component.html',
  styleUrls: ['./participate.component.css']
})
export class ParticipateComponent implements OnInit {


  participantForm= new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    phone_number: new FormControl('', [Validators.required]),
    event: new FormControl(''),
    serverName: new FormControl('')
  })

  eventDetails={
    "eventsList": [{
      id: "0",
      name: "As You Like It",
      serverName: "asyoulikeit",
      maxParticipantsPerCollege: 1
    },{
      id: "1",
      name: "Best Manager",
      serverName: "bestmanager",
      maxParticipantsPerCollege: 2
    },{
      id: "1",
      name: "Solo Dance",
      serverName: "solodance",
      maxParticipantsPerCollege: 1
    },{
      id: "3",
      name: "Solo Singing",
      maxParticipantsPerCollege: 1,
      serverName: "solosinging"
    },{
      id: "4",
      name: "Solo Instrumental",
      maxParticipantsPerCollege: 1,
      serverName: "soloinstrumental"
    },{
      id: "5",
      name: "Pixie",
      maxParticipantsPerCollege: 1,
      serverName: "pixie"
    },{
      id: "6",
      name: "Pencil Sketching",
      maxParticipantsPerCollege: 1,
      serverName: "pencilsketching"
     
    },{
      id: "7",
      name: "Yoga",
      maxParticipantsPerCollege: 1,
      serverName: "yoga"
    },{
      id: "8",
      name: "Ezhuthaani",
      maxParticipantsPerCollege: 1,
      serverName: "ezhuthaani"
    }]
  };
  constructor(private route: ActivatedRoute, private router: Router, private myDb: DbUtilityService) { }

  data: any;
  id: any;
  numberOfParticipants: any;
  name: string="";
  participantsArray: any;

  msg="";
  error="";
  public success = false;
  public alert= false;
  public afterForm= true;
  public TeamNameDisplay= false;
  public addParticipantDisplay= false;
  instructions= ""
  instructionsMax=""
  public wait = false;
  public loading= false;

  userDetail: any;
  yourEvents: string="";
  ngOnInit(): void {
    
    window.scroll(0,0);
    this.id= this.route.snapshot.params["id"];
    

    if(this.id>8){
      const redirectUrl = '/event/'+ this.id;
      // Redirect the user
      this.router.navigate([redirectUrl]);
      return;
    }
    this.data= this.eventDetails.eventsList[this.id];
    this.name= this.data["name"];

    this.myDb.getUserDetails().subscribe((response: any)=>{
      this.userDetail= response["userDetails"]
      this.yourEvents= this.userDetail.yourEvents

      if(this.yourEvents.includes(this.name)){
        this.msg= "You have Already Registered for this event"
        this.alert=false;
        this.success=true;
        this.afterForm= false;
      }
    })

    // if(this.yourEvents.includes(this.name)){
    //   this.msg= "You have Already Registered for this event"
    //   this.alert=false;
    //   this.success=true;
    //   this.afterForm= false;
    // }

    

    this.myDb.checkCollegeParticipation(this.eventDetails.eventsList[this.id].serverName)
      .subscribe((response: any)=>{
        if(response["message"]==-1){
          const redirectUrl = '/login';
          // Redirect the user
          this.router.navigate([redirectUrl], {queryParams: { expired: 'true' } });
        }
        else if(response["message"]==0){
          const redirectUrl = '/login';
          // Redirect the user
          this.router.navigate([redirectUrl], {queryParams: { expired: 'true' } });
        }
        else if(response["message"]==1){
          
          if(this.eventDetails.eventsList[this.id].maxParticipantsPerCollege<=response["currentCount"]){
            this.msg= "Your College permit for this Event is Full Try other events... Thank You!!! "
            this.alert=false;
            this.success=true;
            this.afterForm= false;
          }
        }
        
    })
    if(this.id<9){
      this.participantsArray=[1]
      this.TeamNameDisplay= false
      this.addParticipantDisplay= false
      this.instructions = "This is an Individual Event";
      this.instructionsMax= "Please fill all the details as the Logged in User";
    }
    else{
      this.numberOfParticipants= this.data["minNumberOfParticipates"]
      this.createArray(this.numberOfParticipants);
      this.TeamNameDisplay= true
      this.addParticipantDisplay= true
      this.instructions = "The minimum Number of participants need is "+ this.numberOfParticipants;
      this.instructionsMax= "The maximum Number of participants is " + this.data["maxNumberOfParticipates"] + "! Please fill all the details";
    }
  }

  createArray(numberOfParticipants: any){
    this.participantsArray= new Array(numberOfParticipants)
    for (var i = 0; i < this.participantsArray.length; i++) {
      this.participantsArray[i] = i +1;
   }
  }
  participate(){
    if(!this.participantForm.valid){
      this.alert= true;
      this.error= "Fill in all details";
      return
    }
    this.participantForm.value.event=this.id
    this.participantForm.value.serverName= this.eventDetails.eventsList[this.id].serverName
    this.wait= true;
    this.loading= true;

    this.myDb.participate(this.participantForm.value).subscribe((response: any)=>{
      if(response["message"]==-1){
        const redirectUrl = '/login';
        // Redirect the user
        this.router.navigate([redirectUrl], {queryParams: { expired: 'true' } });
      }
      else if(response["message"]==0){
        const redirectUrl = '/login';
        // Redirect the user
        this.router.navigate([redirectUrl], {queryParams: { expired: 'true' } });
      }
      else if(response["message"]==-2){
        this.error= "Email doesn't match with the Logged in User"
        this.alert=true;
        this.wait= false;
        this.loading= false;
      }
      else if(response["message"]==-3){
        this.error= "Phone Number doesn't match with the Logged in User"
        this.alert=true;
        this.wait= false;
        this.loading= false;

      }
      else if(response["message"]==-4){
        this.error= "Error Contact the admin"
        this.alert=true;
        this.wait= false;
        this.loading= false;

      }
      else if(response["message"]==1){
        this.msg= "Registeration Successfull"
        this.alert=false;
        this.success=true;
        this.afterForm= false;
      }
      else{
        this.error= "Error Contact the admin"
        this.alert=true;
        this.wait= false;
        this.loading= false;

      }
    })
  }

  addParticipant(){
    
  }

}
