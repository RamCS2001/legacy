import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbUtilityService } from '../db-utility.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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

    },
    {
      id: "31",
      name: "ALL PARTICIPANTS"
    }
  ]
  };

  constructor(private myDb: DbUtilityService,private router: Router) { }

  notAdmin: any;
  public unauthorizedMsg= false
  public authorizedMsg= false
  count: any=[];

  ngOnInit(): void {

    if(!this.myDb.isAdmin()){
      this.authorizedMsg=false;
      this.unauthorizedMsg= true
      this.notAdmin= "You Do Not have Authorization for this Page"
      return
    }
    else{
      this.authorizedMsg=true;
      this.unauthorizedMsg= false
      this.notAdmin=""
    }
    this.myDb.getParticipantsCount().subscribe((res: any)=>{
      if(res["message"]==1){
        this.count=res["count"]
        console.log(this.count)
      }
    })


  }

  logout(){
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("username");
    const redirectUrl = '/login';
    // Redirect the user
    this.router.navigate([redirectUrl], {queryParams: { logout: 'true' }});
  }

}
