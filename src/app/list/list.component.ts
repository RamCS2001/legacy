import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbUtilityService } from '../db-utility.service';
import * as XLSX from "xlsx";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @ViewChild("participantsTable") table: ElementRef | undefined;


  constructor(private route: ActivatedRoute, private router: Router, private myDb: DbUtilityService) { }

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
    },
    {
      id: "22",
      name: "Total Participants"
    }
  ]
  };

  id:any
  data: any=[];
  eventName: any;
  eventCount: any;
  public GroupList= false;
  public individualList= false;
  public error= false;

  headers= ["name", "admission_number","roll_number", "email", "year", "department", "section"];
  teamNames :any= []; 
  ngOnInit(): void {
    
    this.id= this.route.snapshot.params["id"];

    if(this.id>=0 && this.id<9){
      this.myDb.getIndividualList(this.id).subscribe((response: any)=>{
        if(response["message"]==-1){
          const redirectUrl = '/login';
          // Redirect the user
          this.router.navigate([redirectUrl], {queryParams: { expired: 'true' } });
          return
        }
        if(response["message"]==1){
          this.eventCount=response["data"].length;
          this.data= response["data"]
          this.eventName= this.eventDetails.eventsList[this.id].name;
          this.GroupList=false;
          this.error=false;
          this.individualList=true;
        }
        else{
          this.error=true
        }
      })
    }
    else if(9<=this.id && this.id <22){
      this.myDb.getGroupList(this.id).subscribe((response: any)=>{
        if(response["message"]==-1){
          const redirectUrl = '/login';
          // Redirect the user
          this.router.navigate([redirectUrl], {queryParams: { expired: 'true' } });
          return
        }
        if(response["message"]==1){
          for(let i=0; i<response["data"].length; i++){
            this.teamNames.push(response["data"][i].teamName)
          }
          this.eventCount=response["data"].length;
          for(let i=0; i<response["data"].length; i++){
            this.data.push(response["data"][i].members)
          }
          this.eventName= this.eventDetails.eventsList[this.id].name;
          this.GroupList=true;
          this.error=false;
          this.individualList=false;
        }
        else{
          this.error=true
        }
      })
    }
    else if(this.id==22){
      this.myDb.getAllList(this.id).subscribe((response: any)=>{
        if(response["message"]==-1){
          const redirectUrl = '/login';
          // Redirect the user
          this.router.navigate([redirectUrl], {queryParams: { expired: 'true' } });
          return
        }
        if(response["message"]==1){
          this.eventCount=response["data"].length;
          this.data= response["data"]
          this.eventName= this.eventDetails.eventsList[this.id].name;
          this.GroupList=false;
          this.error=false;
          this.individualList=true;
        }
        else{
          this.error=true
        }
      })
    }
    else{
      const redirectUrl = '/admin';
      // Redirect the user
      this.router.navigate([redirectUrl]);
    }
  }


  exportToExcel(){
     /* table id is passed over here */   
     let element = document.getElementById('participantsTable'); 
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     /* save to file */
    let fileName = this.eventName+".xlsx"

     XLSX.writeFile(wb, fileName);
  }


}
