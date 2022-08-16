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
    admission_number: new FormControl('', [Validators.required]),
    roll_number: new FormControl('', [Validators.required]),
    event: new FormControl('')
  })

  eventDetails={
    "eventsList": [{
      id: "0",
      name: "As You Like It",
      
    },{
      id: "1",
      name: "Best Manager",
     
    },{
      id: "2",
      name: "Solo Dance",
     
    },{
      id: "3",
      name: "Solo Singing",
    },{
      id: "4",
      name: "Solo Instrumental",
    },{
      id: "5",
      name: "Pixie",
     
    },{
      id: "6",
      name: "Pencil Sketching",
     
    },{
      id: "7",
      name: "Yoga",
     
    },{
      id: "8",
      name: "Ezhuthaani",
      
    },{
      id: "9",
      name: "Divide And Conquer",
      minNumberOfParticipates: 5,
      maxNumberOfParticipates: 5
    },{
      id: "10",
      name: "Treasure hunt",
      minNumberOfParticipates: 6,
      maxNumberOfParticipates: 6
      
    },{
      id: "10",
      name: "Monsters’ Muss",
      minNumberOfParticipates: 2,
      maxNumberOfParticipates: 2
    },{
      id: "11",
      name: "Radio Mirchi",
      minNumberOfParticipates: 1,
      maxNumberOfParticipates: 3
    },{
      id: "12",
      name: "English Potpourri",
      minNumberOfParticipates: 3,
      maxNumberOfParticipates: 3
    },{
      id: "13",
      name: "Lyrical Hunt",
      minNumberOfParticipates: 3,
      maxNumberOfParticipates: 3
    },{
      id: "14",
      name: "Tamil Potpourri",
      minNumberOfParticipates: 3,
      maxNumberOfParticipates: 3
    },{
      id: "15",
      name: "Cinematrix (Short Flim)",
      minNumberOfParticipates: 5,
      maxNumberOfParticipates: 8
    },{
      id: "16",
      name: "Quizzards of Oz",
      minNumberOfParticipates: 2,
      maxNumberOfParticipates: 2
    },{
      id: "17",
      name: "Group Dance",   
      minNumberOfParticipates: 4,
      maxNumberOfParticipates: 15
    },{
      id: "18",
      name: "Poster Making",
      minNumberOfParticipates: 2,
      maxNumberOfParticipates: 2
    },{
      id: "19",
      name: "Dramarix"
    },{
      id: "20",
      name: "Rangoli",
      minNumberOfParticipates: 3,
      maxNumberOfParticipates: 3
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

    if(this.yourEvents.includes(this.name)){
      this.msg= "You have Already Registered for this event"
      this.alert=false;
      this.success=true;
      this.afterForm= false;
    }
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
        this.error= "Adminssion Number doesn't match"
        this.alert=true;
        this.wait= false;
        this.loading= false;
      }
      else if(response["message"]==-3){
        this.error= "Roll Number doesn't match"
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
