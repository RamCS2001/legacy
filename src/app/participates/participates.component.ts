import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbUtilityService } from '../db-utility.service';

@Component({
  selector: 'app-participates',
  templateUrl: './participates.component.html',
  styleUrls: ['./participates.component.css']
})
export class ParticipatesComponent implements OnInit {


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
    },{
      id: "12",
      name: "SYMPHONIQUE (Orchestra)",
      minNumberOfParticipates: 6,
      maxNumberOfParticipates: 10,
      serverName: "symphonique",
      maxParticipantsPerCollege: 1
    },{
      id: "13",
      name: "DIVIDE AND CONQUER (MULTITASKING)",
      minNumberOfParticipates: 5,
      maxNumberOfParticipates: 5,
      serverName: "divideandconquer",
      maxParticipantsPerCollege: 2
    },{
      id: "14",
      name: "MONSTERS’ MUSS (English Language Game)",
      serverName: "monstersmuss",
      minNumberOfParticipates: 3,
      maxNumberOfParticipates: 3,
      maxParticipantsPerCollege: 1
    },{
      id: "15",
      name: "KALAKKAL KALATTA",
      serverName: "kalakkalkalatta",
      minNumberOfParticipates: 1,
      maxNumberOfParticipates: 3,
      maxParticipantsPerCollege: 2

    },{
      id: "16",
      name: "SHERLOCK HOLMES",
      serverName: "sherlockholmes",
      minNumberOfParticipates: 2,
      maxNumberOfParticipates: 2,
      maxParticipantsPerCollege: 2

    },{
      id: "17",
      name: "QUIZZARDS (QUIZ)",
      serverName: "quizzards",
      minNumberOfParticipates: 2,
      maxNumberOfParticipates: 2,
      maxParticipantsPerCollege: 1
    },{
      id: "18",
      name: "RANGOLI",
      serverName: "rangoli",
      minNumberOfParticipates: 2,
      maxNumberOfParticipates: 2,
      maxParticipantsPerCollege: 1

    },{
      id: "19",
      name: "GRAPHIX (TRAILER TIME)",
      serverName: "graphix",
      minNumberOfParticipates: 3,
      maxNumberOfParticipates: 3,
      maxParticipantsPerCollege: 2

    },{
      id: "20",
      name: "CHOREO BOOM (Group Dance)",
      serverName: "choreoboom",
      minNumberOfParticipates: 6,
      maxNumberOfParticipates: 12,
      maxParticipantsPerCollege: 1

    },{
      id: "21",
      name: "IDEA PRESENTATION",   
      serverName: "ideapresentation",
      minNumberOfParticipates: 3,
      maxNumberOfParticipates: 5,
      maxParticipantsPerCollege: 2

    },{
      id: "22",
      name: "MARKETOMANIA",
      serverName: "marketomania",
      minNumberOfParticipates: 3,
      maxNumberOfParticipates: 3,
      maxParticipantsPerCollege: 2

    },{
      id: "23",
      name: "DRAMATICS",
      serverName: "dramatics",
      minNumberOfParticipates: 8,
      maxNumberOfParticipates: 10,
      maxParticipantsPerCollege: 1
    },{
      id: "24",
      name: "CINEMATRIX (SHORT FILM)",
      serverName: "cinematrix",
      minNumberOfParticipates: 4,
      maxNumberOfParticipates: 8,
      maxParticipantsPerCollege: 1
    },{
      id: "25",
      name: "LIPHOMANIAC (SPELL BEE)",
      serverName: "liphomaniac",
      minNumberOfParticipates: 4,
      maxNumberOfParticipates: 5,
      maxParticipantsPerCollege: 3
    },{
      id: "26",
      name: "EXPRESSIONS (FACE PAINTING)",
      serverName: "expressions",
      minNumberOfParticipates: 2,
      maxNumberOfParticipates: 2,
      maxParticipantsPerCollege: 1
      
    },{
      id: "27",
      name: "TREASURE HUNT",
      serverName: "treasurehunt",
      minNumberOfParticipates: 5,
      maxNumberOfParticipates: 5,
      maxParticipantsPerCollege: 2
    },{
      id: "28",
      name: "WAR WITH WORDS",
      serverName: "warwithwords",
      minNumberOfParticipates: 3,
      maxNumberOfParticipates: 3,
      maxParticipantsPerCollege: 1

    },{
      id: "29",
      name: "மறுவார்த்தை (Translation)",
      serverName: "translation",
      minNumberOfParticipates: 2,
      maxNumberOfParticipates: 2,
      maxParticipantsPerCollege: 2

    },{
      id: "30",
      name: "LYRICAL HUNT",
      serverName: "lyricalhunt",
      minNumberOfParticipates: 3,
      maxNumberOfParticipates: 3,
      maxParticipantsPerCollege: 1

    }]
  };

  constructor(private fb: FormBuilder,private route: ActivatedRoute, private router: Router, private myDb: DbUtilityService) { }

  participantForm= new FormGroup({
    teamname:new FormControl('',[Validators.required]),
    participants: new FormArray([]),
    event: new FormControl(),
    serverName: new FormControl('')
  })

  get participants() {
    return (<FormArray>this.participantForm.get('participants')).controls;
  }

  name=""
  msg="";
  error="";
  public success = false;
  public alert= false;
  public afterForm= true;
  public TeamNameDisplay= false;
  public addParticipantDisplay= false;
  public loading= false;
  instructions= ""
  instructionsMax=""
  Linstructions=""
  L2instructions=""
  id:any;
  data:any;

  userDetail: any;
  yourEvents: string="";
  ngOnInit(): void {

    
    window.scroll(0,0);
    this.id= this.route.snapshot.params["id"];

    if(this.id<12){
      const redirectUrl = '/event/'+ this.id;
      // Redirect the user
      this.router.navigate([redirectUrl]);
      return;
    }
    this.data= this.eventDetails.eventsList[this.id];

    this.myDb.getUserDetails().subscribe((response: any)=>{
      this.userDetail= response["userDetails"]
      this.yourEvents= this.userDetail.yourEvents

      if(this.yourEvents.includes(this.name)){
        this.msg= "You have Already Registered for this event"
        this.alert=false;
        this.success=true;
        this.afterForm= false;
      }
      else{
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
      }
    })

    

    this.Linstructions= "Participant 1 will Consider as the Team Leader";
    this.L2instructions= "Team Leader should have an account in the Legacy'22"

    this.name= this.data["name"];
    if(this.data["minNumberOfParticipates"]==this.data["maxNumberOfParticipates"]){
      this.instructions = "Number Of participants required is "+ this.data["maxNumberOfParticipates"];
      this.instructionsMax= "Fill in all the details";
    }
    else{
      this.instructions = "The minimum Number of participants need is "+ this.data["minNumberOfParticipates"];
      this.instructionsMax= "The maximum Number of participants allowed is " + this.data["maxNumberOfParticipates"];
      this.addParticipantDisplay=true;
    }

    for (var i = 0; i < this.data["minNumberOfParticipates"]; i++) {
      this.addParticipant()
    }
  }
  checkunique ( ) : boolean {
    let unique = true
    let array:Array<string> = [ "bva,ue" ];
    ( this.participantForm.get ( "participants" ) as FormArray ).controls.forEach ( ( element , index ) => {
      array.push ( element.get( "email" )?.value )
    } )
    array.sort ( )
    array.forEach ( ( element , index ) => {
      if ( array [ ( index + 1 ) % ( array.length ) ] == element )
        unique = false
    } )
    return unique;
  }
  n: number=0;
  addParticipant(){
    this.n= this.n+1
    if(this.n<this.data["maxNumberOfParticipates"]){
      const participant= new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        phone_number: new FormControl('', [Validators.required])
      });
      (<FormArray>this.participantForm.get('participants')).push(participant);
    }
    else if(this.n==this.data["maxNumberOfParticipates"]){
      const participant= new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        phone_number: new FormControl('', [Validators.required])
      });
      (<FormArray>this.participantForm.get('participants')).push(participant);
      this.addParticipantDisplay=false;

    }
    else{
      this.addParticipantDisplay=false;
    }
    
  }
  public wait= false
  participate(){
    if(!this.participantForm.valid){
      window.scroll(0,0);
      this.alert= true;
      this.error= "Fill in all details";
      return
    }
    if ( ! this.checkunique ( ) )
    {
      window.scroll(0,0);
      this.alert=true;
      this.error = "duplicate participants!"
      return
    }
    this.alert= false;
    this.participantForm.value.event=this.id
    this.wait= true;
    this.loading= true;

    let participants= this.participantForm.value.participants
    this.participantForm.value.serverName= this.eventDetails.eventsList[this.id].serverName

    this.myDb.checkAllParticipant(participants).subscribe((res: any)=>{
      if(res){
        
        console.log(res)
        let unRegUsers= res["users"]
        if(res["message"]==-7){
          window.scroll(0,0);
          this.error= "Mixed Gender participation not allowed..."
          this.alert=true;
          this.wait= false; 
          this.loading= false;
          return
        }
        else if(res["message"]==-6){
          window.scroll(0,0);
          this.error= "Participant "+ unRegUsers.toString() + " are not Registerd in Leagcy'22"
          this.alert=true;
          this.wait= false; 
          this.loading= false;
          return
        }
        else if(res["message"]==-2){
          window.scroll(0,0);
          this.error= "Leader's (participant 1) Mail ID doesn't match to the Logged in User"
          this.alert=true;
          this.wait= false;
          this.loading= false;
          return
        }
        else if(res["message"]==-3){
          window.scroll(0,0);
          this.error= "Leader's (participant 1) Phone Number doesn't match to the Logged in User"
          this.alert=true;
          this.wait= false;
          this.loading= false;
          return
        }
        if(res["message"]==1){
          this.myDb.participates(this.participantForm.value).subscribe((response: any)=>{
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
            
            else if(response["message"]==-4){
              window.scroll(0,0);
              this.error= "Error Contact the admin"
              this.alert=true;
              this.wait= false; 
              this.loading= false;
      
            }
            else if(response["message"]==-5){
              window.scroll(0,0);
              this.error= "Team Name already Exist!! Enter different Team Name"
              this.alert=true;
              this.wait= false; 
              this.loading= false;
            }
            else if(response["message"]==1){
              window.scroll(0,0);
              this.msg= "Registeration Successfull"
              this.alert=false;
              this.success=true;
              this.afterForm= false;
            }
            else{
              window.scroll(0,0);
      
              this.error= "Error Contact the admin"
              this.alert=true;
              this.wait= false;
              this.loading= false;
      
            }
          })
        }
      }
    })
    
  } 
  
  back(){
    const redirectUrl = '/event/'+ this.id;
    // Redirect the user
    this.router.navigate([redirectUrl]);
  }
}
