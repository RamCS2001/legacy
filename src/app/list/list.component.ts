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
  searchCollege = false
  searchGender = false
  searchPayment= false
  searchAccommodation = false
  selectedCollege = ''
  selectedGender = ''
  colleges : any = []
  genders = [ "M" , "F" ]
  payment = [ "true", "false" ]
  accpayment = [ "true", "false" ]

  constructor(private route: ActivatedRoute, private router: Router, private myDb: DbUtilityService) { }

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

  id:any
  data: any=[];
  eventName: any;
  eventCount: any;
  public GroupList= false;
  public individualList= false;
  public error= false;

  headers:string[]= ["Name", "Gender", "College", "Email", "Year", "Degree", "Department", "Paid", "Accomadation", "Day one paid","Day two paid" ];
  feilds: string[]= ["name", "gender", "college", "email", "year", "degree", "department", "regFeesPayment", "accommodationFeesPayment"]
  teamNames :any= []; 
//   participantDetails = [ { 'Name' : "saravana kumar" , "Gender": "Male" , "College" : "Mepco" , "Year": "III" , "Degree": "UG", "Department": "CSE" , "Email": "hello@mail.com" },
//   { 'Name' : "Krithika shri" , "Gender": "Female" , "College" : "Mepco" , "Year": "III" , "Degree": "UG", "Department": "CSE", "Email": "hello@mail.com" },
//   { 'Name' : "kumar saravana" ,"Gender": "Male" , "College" : "Kamaraj" , "Year": "III" , "Degree": "UG", "Department": "CSE", "Email": "hello@mail.com" },
//   { 'Name' : "shri krithika" ,"Gender": "Female" , "College" : "Kamaraj" , "Year": "III" , "Degree": "UG", "Department": "CSE", "Email": "hello@mail.com" }
//  ]
participantDetails = []
 filteredDetails = []
  ngOnInit(): void {
    
    this.myDb.getCollegeList().subscribe((response: any)=>{
      for(let i=0;i<response.length; i++){
        this.colleges.push(response[i]["college"])
      }
      console.log(this.colleges)
    })
    this.id= this.route.snapshot.params["id"];

    if(this.id>=0 && this.id<12){
      this.myDb.getIndividualList(this.id).subscribe((response: any)=>{
        if(response["message"]==-1){
          localStorage.removeItem("id_token");
          localStorage.removeItem("username");
          localStorage.removeItem("expires_at");

          const redirectUrl = '/login';
          // Redirect the user
          this.router.navigate([redirectUrl], {queryParams: { expired: 'true' } });
          return
        }
        if(response["message"]==1){
          this.eventCount= response["data"].length;
          this.participantDetails= response["data"]
          this.filteredDetails = response["data"]
          this.eventName= this.eventDetails.eventsList[this.id].name;
          this.GroupList=false;
          this.error=false;
          this.individualList=true;
        }
        else{
          this.error=true
        }
      } )
    }
    else if(12<=this.id && this.id <30){
      this.myDb.getGroupList(this.id).subscribe((response: any)=>{
        console.log(response)
        if(response["message"]==-1){
          localStorage.removeItem("id_token");
          localStorage.removeItem("username");
          localStorage.removeItem("expires_at");

          const redirectUrl = '/login';
          // Redirect the user
          this.router.navigate([redirectUrl], {queryParams: { expired: 'true' } });
          return
        }
        if(response["message"]==1){
          this.GroupList=true;
          this.error=false;
          this.individualList=false;
          for(let i=0; i<response["data"].length; i++){
            this.teamNames.push(response["data"][i].teamName)
          }
          this.eventCount=response["data"].length;
          for(let i=0; i<response["data"].length; i++){

            this.data.push(response["data"][i].members)
            console.log(this.data)
          }
          this.eventName= this.eventDetails.eventsList[this.id].name;
          
        }
        else{
          this.error=true
        }
      })
    }
    else if(this.id==31){
      this.myDb.getAllList(this.id).subscribe((response: any)=>{
        console.log(response)
        if(response["message"]==-1){
          localStorage.removeItem("id_token");
          localStorage.removeItem("username");
          localStorage.removeItem("expires_at");

          const redirectUrl = '/login';
          // Redirect the user
          this.router.navigate([redirectUrl], {queryParams: { expired: 'true' } });
          return
        }
        if(response["message"]==1){
          this.eventCount=response["data"].length;
          this.participantDetails= response["data"]
          console.log ( "response data assigned!" )
          this.filteredDetails = response["data"]

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
  enableSearchByGender ( ) : void {
    this.searchGender = true;
  }
  enableSearchByCollege ( ) : void {
    this.searchCollege = true;
  }
  enableSearchByPayment(){
    this.searchPayment= true;
  }
  enableSearchByAccommodation(){
    this.searchAccommodation= true;
  }
  disableFilter (  ) {
    this.genderFilter=""
    this.collegeFilter=""
    this.paymentFilter=""
    this.accPaymentFilter=""
     this.searchGender = false
     this.searchCollege = false
     this.searchPayment= false
     this.searchAccommodation= false
     this.filteredDetails = this.participantDetails
  }
  genderFilter: any = "";
  collegeFilter: any = "";
  paymentFilter: any = "";
  accPaymentFilter: any= "";
  clickedGender ( gender: string ) {
    this.genderFilter= gender
    this.filter ( this.collegeFilter , this.genderFilter , this.paymentFilter, this.accPaymentFilter)
    console.log ( gender )
  }
  clickedCollege ( college: string ) {
    this.collegeFilter= college
    this.filter ( this.collegeFilter , this.genderFilter , this.paymentFilter, this.accPaymentFilter)
    console.log ( college )
  }
  clickedPayment( pay: string){
    this.paymentFilter= pay
    // const payString = ""+ pay
    this.filter ( this.collegeFilter , this.genderFilter , this.paymentFilter, this.accPaymentFilter)
    console.log ( pay )
  }
  clickedAccPayment( accPay: string){
    this.accPaymentFilter= accPay
    this.filter ( this.collegeFilter , this.genderFilter , this.paymentFilter , this.accPaymentFilter)
    console.log ( accPay )
  }
  filter ( college: string, gender: string, pay: string , accPay: string) {
    this.filteredDetails= this.participantDetails
    this.filteredDetails = this.filteredDetails.filter ( ( participant , index , array  )=> {
        console.log ( ( ( participant["gender"] as string ).includes ( gender ) && ( participant [ "college" ] as string ).includes ( college ) && (String(participant [ "regFeesPayment" ])).includes ( pay ) && (String(participant [ "accommodationFeesPayment" ])).includes ( accPay ) ) )
        return ( ( ( participant["gender"] as string ).includes ( gender ) && ( participant [ "college" ] as string ).includes ( college ) && (String(participant [ "regFeesPayment" ])).includes ( pay ) && (String(participant [ "accommodationFeesPayment" ])).includes ( accPay ) ) )
    } )
    console.log ( this.participantDetails )
  }
 }
