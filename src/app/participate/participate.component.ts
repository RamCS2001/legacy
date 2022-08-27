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
      name: "நீயா நானா?",
      serverName: "tamildebate",
      maxParticipantsPerCollege: 3
    },{
      id: "1",
      name: "MARTIAL ARTS",
      serverName: "martialarts",
      maxParticipantsPerCollege: 1
    },{
      id: "2",
      name: "BEST MANAGER",
      serverName: "bestmanager",
      maxParticipantsPerCollege: 5
    },{
      id: "3",
      name: "VOICE OF LEGACY (Solo singing)",
      maxParticipantsPerCollege: 1,
      serverName: "voiceoflegacy"
    },{
      id: "4",
      name: "MUSIC UNPLUGGED (Solo Instrumental)",
      maxParticipantsPerCollege: 1,
      serverName: "musicunplugged"
    },{
      id: "5",
      name: "கவித்திடல்",
      maxParticipantsPerCollege: 3,
      serverName: "kavithaigal"
    },{
      id: "6",
      name: "PIXIE (PHOTO CONTEST)",
      maxParticipantsPerCollege: 1,
      serverName: "pixie"
     
    },{
      id: "7",
      name: "Yoga",
      maxParticipantsPerCollege: 1,
      serverName: "yoga"
    },{
      id: "8",
      name: "Debate Guru",
      maxParticipantsPerCollege: 6,
      serverName: "debateguru"
    },{
      id: "9",
      name: "MAKE YOUR MOVE (Solo Dance)",
      maxParticipantsPerCollege: 1,
      serverName: "makeyourmove"
    },{
      id: "10",
      name: "EXTEMPORE",
      maxParticipantsPerCollege: 1,
      serverName: "extempore"
    },{
      id: "11",
      name: "PENCIL SKETCHING",
      maxParticipantsPerCollege: 1,
      serverName: "pencilsketching"
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
    

    if(this.id>12){
      const redirectUrl = '/event/'+ this.id;
      // Redirect the user
      this.router.navigate([redirectUrl]);
      return;
    }
    this.data= this.eventDetails.eventsList[this.id];
    this.name= this.data["name"];

    this.myDb.getUserDetails().subscribe((response: any)=>{
      console.log(response)
      this.userDetail= response["userDetails"]
      this.yourEvents= this.userDetail.yourEvents
      console.log(this.name)
      if(this.yourEvents.includes(this.name)){
        console.log(this.name)
      
        this.msg= "You have Already Registered for this event"
        this.alert=false;
        this.success=true;
        this.afterForm= false;
        return
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
        console.log(response)
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
