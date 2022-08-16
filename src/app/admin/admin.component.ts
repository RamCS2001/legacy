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
      name: "Divide and Conquer",
      minNumberOfParticipates: 5,
      maxNumberOfParticipates: 5
    },{
      id: "10",
      name: "Treasure hunt",
      minNumberOfParticipates: 5,
      maxNumberOfParticipates: 5
      
    },{
      id: "11",
      name: "Monsters’ Muss",
      minNumberOfParticipates: 2,
      maxNumberOfParticipates: 2
    },{
      id: "12",
      name: "Radio Mirchi",
      minNumberOfParticipates: 1,
      maxNumberOfParticipates: 3
    },{
      id: "13",
      name: "English Potpourri",
      minNumberOfParticipates: 3,
      maxNumberOfParticipates: 3
    },{
      id: "14",
      name: "Lyrical Hunt",
      minNumberOfParticipates: 3,
      maxNumberOfParticipates: 3
    },{
      id: "15",
      name: "Tamil Potpourri",
      minNumberOfParticipates: 3,
      maxNumberOfParticipates: 3
    },{
      id: "16",
      name: "Cinematrix (Short Flim)",
      minNumberOfParticipates: 5,
      maxNumberOfParticipates: 8
    },{
      id: "17",
      name: "Quizzards of Oz",
      minNumberOfParticipates: 2,
      maxNumberOfParticipates: 2
    },{
      id: "18",
      name: "Group Dance",   
      minNumberOfParticipates: 4,
      maxNumberOfParticipates: 15
    },{
      id: "19",
      name: "Poster Making",
      minNumberOfParticipates: 2,
      maxNumberOfParticipates: 2
    },{
      id: "20",
      name: "Rangoli",
      minNumberOfParticipates: 2,
      maxNumberOfParticipates: 3
    },{
      id: "21",
      name: "Dramatix",
      minNumberOfParticipates: 4,
      maxNumberOfParticipates: 10
    }]
  };

  constructor(private myDb: DbUtilityService,private router: Router) { }

  notAdmin: any;
  public unauthorizedMsg= false
  public authorizedMsg= false

  ngOnInit(): void {

    if(!this.myDb.isAdmin()){
      this.authorizedMsg=false;
      this.unauthorizedMsg= true
      this.notAdmin= "You Do Not have Authorization for this Page"
    }
    else{
      this.authorizedMsg=true;
      this.unauthorizedMsg= false
      this.notAdmin=""
    }
  }

  logout(){
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("name");
    const redirectUrl = '/login';
    // Redirect the user
    this.router.navigate([redirectUrl], {queryParams: { logout: 'true' }});
  }

}
