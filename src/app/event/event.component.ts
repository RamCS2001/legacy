import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  name="";
  rules="";
  eventDetails={
    "eventsList": [
      {
        id: "0",
        name: "நீயா நானா?",
        rules: [
          "Date: 16/09/2022 Time: 10.30 AM to 01.00 PM",
          "தனி நபர் விவாதம்." ,
          "2 சுற்றுகளாக நடைபெறும். ",
          "ஒரு கல்லூரியில் இருந்து அதிகபட்சமாக 3 நபர்கள் பங்குபெறலாம்.",
          "போட்டி நடைபெறும் இடத்தில் தலைப்புகள் வழங்கப்படும்.",
          "நடுவரின் தீர்ப்பே இறுதியானது.",
          "வருகை நேரம் 10.15 AM",
          "For queries,contact: tamildebate@mepcoeng.ac.in",
        ]
      },{
        id: "1",
        name: "MARTIAL ARTS",
        rules: [
          "Date: 16/09/2022 Time: 10.30 AM to 12.00 PM",
          "Maximum of 1 participant per College.",
          "All the necessary items should be brought by the participant.",
          "Individual Performance alone is considered.",
          "Karate, Silambam, Kalari, Taekwondo movements could be performed (For Karate and Taekwondo only kattas are allowed).",
          "Jury’s decision is final.",
          "Reporting time 10:00 AM.",
          "For queries,contact: martialarts@mepcoeng.ac.in",
        ]
      },{
      id: "2",
      name: "BEST MANAGER",
      rules: [
        "Perlims: Date: 16/09/2022 Time: 10.30 AM to 12.30 PM",
        "Maximum of 5 participants per college.",
        "It is an Individual event.",
        "The event comprises four rounds.",
        "The language will be only English.",
        "The selected participants from prelims round can participate.",
        "The event rules are the same as prelims round.",
        "Final: Date: 17/09/2022 Time: 10.30 AM to 12.15 PM & 3.30 PM to 4.30 PM",
        "Jury’s decision will be final.",
        "Reporting time 10.15 AM.",
        "For queries contact : bestmanager@mepcoeng.ac.in",
      ]
    },{
      id: "3",
      name: "VOICE OF LEGACY (Solo singing)",
      rules: [
        "Date: 16/09/2022 Time: 1.30 PM to 3.00 PM",
        "Maximum of 1 participant per college.",
        "Time duration: 4 minutes.",
        "Karaoke is allowed. Audio track must be in mp3 format & should be submitted at the Registration desk at the time of Registration.",
        "Only Tamil songs are permitted.",
        "Vulgarity of any sort will lead to disqualification.",
        "Jury’s decision is final.",
        "Reporting time 1.15 PM.",
        "For queries contact : solosinging@mepcoeng.ac.in",
      ]
    },{
      id: "4",
      name: "MUSIC UNPLUGGED (Solo Instrumental)",
      rules: [
        "Date: 16/09/2022 Time: 3.00 PM to 4.30 PM",
        "Maximum of 1 participant per college.",
        "Time duration: 5 minutes including setup/plug in time.",
        "Participants must bring their own instruments.",
        "Single participant can play multiple instruments. ",        
        "Jury’s decision is final.",
        "Reporting time 2.45 PM",
        "For queries contact : music@mepcoeng.ac.in",
      ]
    },
    {
      id: "5",
      name: "கவித்திடல்",
      rules: [
        "Date: 16/09/2022 Time: 3.00 PM to 4.30 PM",
        "தனி நபர் கவிதைப் போட்டி.",
        "போட்டி ஒரே சுற்றாக ஒருங்கிணைக்கப்படும்",
        "ஒரு கல்லூரியில் இருந்து அதிகபட்சமாக 3 நபர்கள் பங்குபெறலாம்.",
        "போட்டி நடைபெறும் இடத்தில் தலைப்புகள் வழங்கப்படும்.",
        "நடுவரின் தீர்ப்பே இறுதியானது.",
        "வருகை நேரம் 2.30 PM.",
        "For queries contact : kavithai@mepcoeng.ac.in",
      ]
    },{
      id: "6",
      name: "PIXIE (PHOTO CONTEST)",
      rules: [
        "THEME: TAMIL CULTURE",
        "Only one participation per college, and only one submission per entry is allowed. ",
        "Soft copies of the photographs must be submitted before 10th September, 2022 to pixie@mepcoeng.ac.in.",
        "Plagiarism should be avoided.",
        "Colour correction is allowed. Avoid surrealism.",
        "Shortlisted photos will be displayed for voting.",
        "Final result will be based on voting & Jury’s decision.",
        "For Queries mail to: pixie@mepcoeng.ac.in"
      ]
    },
    {
      id: "7",
      name: "YOGA",
      rules: [
        "Date: 17/09/2022 Time: 10.00 AM to 11.30 AM",
        "One participant per College.",
        "Maximum time of 10 minutes per participant.",
        "Each candidate has to perform one bending, one stretching, one twisting and extra two asanas of their own.",
        "Rhythm, Posture, Complication, and Flexibility are taken for consideration.",
        "Jury’s decision is final.",
        "Reporting time 9.00 AM.",
        "For Queries mail to: yoga@mepcoeng.ac.in"
      ]
    },{
      id: "8",
      name: "DEBATE GURU",
      rules: [
        "Date: 17/09/2022 Time: 10.00 AM to 12:00 PM",
        "Maximum of 6 participants per college.",
        "An individual event.",
        "The debate shall follow a parliamentary format.",
        "The mediator has full authority over selection and usage of discussion topics.",
        "Jury’s decision is final.",
        "Reporting time 9.30 AM",
        "For Queries mail to: debateguru@mepcoeng.ac.in"
      ]
    },
    {
      id: "9",
      name: "MAKE YOUR MOVE (Solo Dance)",
      rules: [
        "Date: 17/09/2022 Time: 1.30 PM to 3.30 PM",
        "One participant per College.",
        "Time Duration: 3 minutes.",
        "Audio track must be in mp3 format & should be submitted at the Registration desk.",
        "Participants must bring their own costumes and properties.",
        "Vulgarity of any sort will lead to disqualification.",
        "Jury’s decision is final.",
        "Reporting time 1.30 PM.",
        "For Queries mail to: solodance@mepcoeng.ac.in"
      ]
    },
    {
      id: "10",
      name: "EXTEMPORE",
      rules: [
        "Date: 17/09/2022 Time: 1.30 PM to 3.30 PM",
        "Topic will be given on the spot.",
        "An individual event.",
        "Maximum of one participant per college.",
        "Participants are expected to speak for a maximum of 3 minutes relevant to the topic.",
        "Delivery of speech should be in Tamil",
        "Mobile phone usage is not allowed in the venue.",  
        "Jury’s decision is final.",
        "Reporting time 1.15 PM.",
        "For Queries mail to: extempore@mepcoeng.ac.in"
      ]
    },
    {
      id: "11",
      name: "PENCIL SKETCHING",
      rules: [
        "Date: 17/09/2022 Time: 1.30 PM to 3.30 PM",
        "One participant per college.",
        "Time limit 1 hour.",
        "All the necessary stationery items and materials must be brought by the participants.",
        "Topics will be given on the spot.",
        "Usage of electronic gadgets during the event is prohibited.",
        "Jury’s decision is final.",
        "Reporting Time: 1.15 PM",
        "For Queries mail to: pencil@mepcoeng.ac.in"
      ]
    },
    {
      id: "12",
      name: "SYMPHONIQUE (Orchestra)",
      rules: [
        "Date: 16/09/2022 Time: 10.30 AM to 01.00 PM",
        "Maximum no. of participants: 10 per team and only one team per college.",
        "Time Duration: 12 minutes on stage inclusive of setup/plug in time.",
        "A cappella is also allowed.",
        "Pre-recorded sound is not allowed.",
        "Participants must bring their own instruments.",
        "Only Tamil songs are allowed.",
        "Vulgarity of any sort will lead to disqualification.",
        "Participation of girls and boys together is strictly prohibited.",
        "Jury’s decision is final.",
        "Reporting time 9.30 AM",
        "For Queries mail to: orchestra@mepcoeng.ac.in"
      ]
    },
    {
      id: "13",
      name: "DIVIDE AND CONQUER (MULTITASKING)",
      rules: [
        "Date: 16/09/2022 Time: 10.30 AM to 12.30 PM",
        "A team must strictly have 5 members.",
        "Maximum of 2 teams per college is allowed.",
        "Multiple tasks will be given to participants in each team separately/individually.",
        "Maximum of 10 teams will be selected from prelims.",
        "Participation of girls and boys together is strictly prohibited.",
        "Jury’s decision is final.",
        "Reporting time 10:00 AM",
        "For queries,contact: multitask@mepcoeng.ac.in",
      ]
    },{
      id: "14",
      name: "MONSTERS’ MUSS (English Language Game)",
      rules: [
        "Date: 16/09/2022 Time: 10.30 AM to 01.00 PM",
        "One team per college and 3 members per team.",
        "All the necessary stationery items must be brought by the participants.",
        "If necessary, prelims will be there. ",
        "Any form of indiscipline will lead to disqualification of the team.",
        "Electrical/External sources should not be used during the event.",
        "Participation of girls and boys together is strictly prohibited.",
        "Jury’s verdict is final.",
        "Reporting time 10.00 AM",
        "For queries, contact:  monstermuss@mepcoeng.ac.in"
      ]
    },{
      id: "15",
      name: "KALAKKAL KALATTA",
      rules: [
        "Date: 16/09/2022 Time: 10.30 AM to 01.00 PM",
        "Individual participation, or a team of maximum 3 members is allowed.",
        "Maximum of 2 registrations per college.",
        "Time limit: Maximum 5 minutes.",
        "It can be a stand-up comedy or a comic skit. ",
        "Use of audio or any video clippings are not allowed.",
        "Vulgarity at any instance will lead to disqualification. ",
        "Participation of girls and boys together is strictly prohibited.",
        "Jury’s decision is final.",
        "Reporting time 10.00 AM.",
        "For queries,contact: kalakkalkalatta@mepcoeng.ac.in"
      ]
    },{
      id: "16",
      name: "SHERLOCK HOLMES",
      rules: [
        "Date: 16/09/2022 Time: 10.30 AM to 12.30 PM",
        "It is a detective game.",
        "Only 2 members per team.",
        "Maximum of 2 teams per college.",
        "Three rounds will be conducted as a part of this event ",
        "Rounds will be revealed only during the contest.",
        "The 3 rounds include a prelim.",
        "Participation of girls and boys together is strictly prohibited.",
        "Jury’s decision will be final.",
        "Reporting time 10.00 AM",
        "For queries,contact: sherlock@mepcoeng.ac.in",
      ]
    },{
      id: "17",
      name: "QUIZZARDS (QUIZ)",
      rules: [
        "Maximum of 2 members per Team and Only one team per College.",
        "Top 8 teams will be selected for the finals.",
        "Use of any kind of external sources is not allowed.",
        "Participation of girls and boys together is strictly prohibited.",
        "Quiz Master’s Decision is final.",
        "Reporting time 10.15 AM.",
        "Jury decision is final.",
        "For queries,contact: quiz@mepcoeng.ac.in",
      ]
    },{
      id: "18",
      name: "RANGOLI",
      rules: [
        "Date: 16/09/2022 Time: 10.30 AM to 12.00 PM",
        "Topic: BIO-DIVERSITY.",
        "No of members per team: 2.",
        "Maximum of 1 team per College",
        "Time Duration: 1 hour.",
        "Participants must bring their own materials.",
        "Only Colour Powder should be used.",
        "Participation of girls and boys together is strictly prohibited.",
        "Jury’s decision is final.",
        "Reporting time 10.15 AM.",
        "For Queries mail to: rangoli@mepcoeng.ac.in",
      ]
    },{
      id: "19",
      name: "GRAPHIX (TRAILER TIME)",
      rules: [
        "Maximum of 2 teams per college and 3 members per team.",
        "Duration: 2 hours.",
        "Trailer must not exceed 5 minutes.",
        "Participants must bring their own laptops with the required software installed in their laptop.",
        "Date: 16/09/2022 Time: 01.30 PM to 04.00 PM",
        "Images, videos and audio clips will be provided.",
        "Participation of boys and girls together is strictly prohibited.",
        "Jury’s decision is final.",
        "Reporting time 1.30 PM.",
        "For Queries mail to: trailertime@mepcoeng.ac.in"
      ]
    },{
      id: "20",
      name: "CHOREO BOOM (Group Dance)",
      rules: [
        "Minimum 6 to Maximum 12 members and only one team per College.",
        "Time Duration: 5 minutes.",
        "Audio track must be in mp3 format & should be submitted at the Registration desk at the time of Registration. ",
        "Concepts or themes can be used without affecting the dance portion.",
        "Date: 16/09/2022 Time: 1.30 PM to 4.30 PM",
        "Participants must bring their own costumes and properties. Usage of dangerous properties is prohibited.",
        "Participation of boys and girls together is strictly prohibited.",
        "Vulgarity of any sort will lead to disqualification ",
        "Jury’s decision is final.",
        "Reporting time 1.15 PM.",
        "For Queries mail to: groupdance@mepcoeng.ac.in",
      ]
    },{
      id: "21",
      name: "IDEA PRESENTATION",
      rules:[
        "Date: 16/09/2022 Time: 2.00 PM to 4.30 PM",
        "Maximum of 2 teams per college and Maximum of 5 members per team.",
        "Judgement is based on participant’s creativity.",
        "Topics will be given on the spot and the participants should present their idea in the form of skit.",
        "Prelims sheet will be given at the help desk during reporting time.",
        "Prelims is also considered for selection.",
        "No participation of boys and girls together.",
        "Jury’s decision is final.",
        "Reporting time 1.30 PM",
        "For Queries mail to: ideap@mepcoeng.ac.in",
      ]
    },{
      id: "22",
      name: "MARKETOMANIA",
      rules: [
          "Date: 16/09/2022 Time: 2.00 PM to 4.30 PM",
          "Maximum of 3 members per team and maximum of 2 teams per college.",
          "The event comprises two rounds.",
          "Communication must be in English.",
          "1 hour for each round.",
          "No participation of boys and girls together.",
          "Jury’s decision is final.",
          "Reporting time 1.30 PM",
          "For Queries mail to: marketomania@mepcoeng.ac.in"
      ]
    },{
      id: "23",
      name: "DRAMATICS",
      rules: [
        "Date: 17/09/2022 Time: 9.30 AM to 12.30 PM",  
        "Minimum 8 to Maximum 10 members.",
        "Only 1 team per college.",
        "Time Duration: Maximum of 10 minutes.",
        "Participants must bring their own costumes and properties.",
        "Participants can use either audio track in MP3 format or Oral delivery.",
        "Based on talents they exhibit, credit points will be awarded.",
        "No participation of boys and girls together.",
        "Vulgarity of any sort will lead to disqualification.",
        "Audio track should be submitted at the Registration desk at the time of Registration.",
        "Jury’s decision is final.",
        "Reporting time 09.00 AM",
        "For Queries mail to: dramatics@mepcoeng.ac.in",
      ]
    },{
      id: "24",
      name: "CINEMATRIX (SHORT FILM",
      rules: [
        "Date: 17/09/2022 Time:  10.00 AM to 12.30 PM",
        "Theme: Any message involving social welfare",
        "Maximum of 8 members per team, and only one team per college is allowed.",
        "Duration: 15 min (including title and credits).",
        "Send the YouTube link or Share via Google Drive to shortfilm@mepcoeng.ac.in before 10th September, 2022.",
        "Best 10 films will be shortlisted and intimated before 12th September, 2022.",
        "Cinematography, editing and story will play as the major scoring points.",
        "Avoid help from professional artists.",
        "Jury’s Decision is final",
        "Reporting time 9.30 AM.",
        "For Queries mail to: shortfilm@mepcoeng.ac.in"
      ]
    },{
      id: "25",
      name: "LIPHOMANIAC (SPELL BEE)",
      rules: [
        "Date: 17/09/2022 Time: 10.00 AM to 12.30 PM",
        "Minimum 4 to Maximum 5 members per team and Maximum of 3 teams per college.",
        "Prelims + 3 rounds will be held.",
        "Rounds will be based on Vocabulary with the given time limit.",
        "Participation of boys and girls together is strictly prohibited.",
        "Jury’s decision is final.",
        "Reporting time 9:45 AM",
        "For Queries mail to: spellbee@mepcoeng.ac.in"
      ]
    },{
      id: "26",
      name: "EXPRESSIONS (FACE PAINTING)",
      rules: [
        "Date: 17/09/2022 Time: 10:00 AM to 12:00 PM",
        "Maximum of 2 members per team and only 1 team per college.",
        "Time Duration: 1 hour.",
        "Topic will be given on the spot.",
        "Participants must bring their own materials.",
        "No participation of boys and girls together.",
        "Jury’s decision is final.",
        "Reporting time 9.30 AM.",
        "For Queries mail to: painting@mepcoeng.ac.in"
      ]
    },{
      id: "27",
      name: "TREASURE HUNT",
      rules: [
        "Date: 17/09/2022 Time: 10.00 AM to 12.30 PM",
        "Maximum of 2 teams per college and exactly 5 members per team.",
        "Participants should report to the registration desk at 9:30A.M to collect their prelims sheet.",
        "Participants reporting to desk after 9:55 AM will not be allowed to attend the prelims round.",
        "If participants borrow any items from anybody within the campus, they are responsible for returning it.",
        "Judgment will be based on the time taken for finding the treasure.",
        "Interactions among other teams are prohibited.",
        "Usage of electronic gadgets during the event is prohibited.",
        "Final score will be calculated based on the previous levels.",
        "No participation of boys and girls together.",
        "Jury’s decision is final.",
        "Reporting time 9.30 AM.",
        "For Queries mail to: thunt@mepcoeng.ac.in"
      ]
    },{
      id: "28",
      name: "WAR WITH WORDS",
      rules: [
        "Date: 17/09/2022 Time: 01.30 PM to 04.00 PM",
        "One team per college and 3 members per team.",
        "All the necessary stationery items must be brought by the participants.",
        "If necessary, prelims will be conducted.",
        "Any form of indiscipline will lead to the disqualification of the team.",
        "Electrical/ External sources should not be used during the event.",
        "Participation of boys and girls together is strictly prohibited.",
        "Reporting time 01.00 PM.",
        "Jury’s decision is final.",
        "For Queries mail to: warwords@mepcoeng.ac.in"
      ]
    },{
      id: "29",
      name: "மறுவார்த்தை (Translation)",
      rules: [
        "Date: 17/09/2022 Time: 1.30 PM to 3.30 PM",
        "ஓர் அணிக்கு இரண்டு பேர்.",
        "ஒரு கல்லூரியில் இருந்து அதிகபட்சமாக இரண்டு அணிகள் பங்குபெறலாம். ",
        "காலக்கெடு மற்றும் எழுத்துப்பிழை தவறுகளின் அடிப்படையில் தீர்ப்பு வழங்கப்படும்.",
        "போட்டி மூன்று சுற்றுகளாக நடைபெறும்,",
        "போட்டி நடைபெறும் இடத்தில் தலைப்புகள் வழங்கப்படும்.",
        "ஆண்களும் பெண்களும் ஒரு குழுவாக ஒன்றாக பங்கேற்கக்கூடாது.",
        "நடுவரின் தீர்ப்பே இறுதியானது.",
        "வருகை நேரம் 1.15 PM",
        "For Queries mail to: dumbc@mepcoeng.ac.in"
      ]
    },{
      id: "30",
      name: "LYRICAL HUNT",
      rules: [
        "Date: 17/09/2022 Time: 10.30 AM to 12.00 PM",
        "A game that tests your proficiency in lyrics from Tamil movies.",
        "A team should contain 3 members, and only one team is allowed per college.",
        "Event contains multiple segments like finding the karaoke, connections, etc.",
        "Rules for each segment will be announced on the spot. ",
        "Participation of boys and girls together is prohibited.",
        "Jury’s decision is final.",
        "Reporting time: 10:15AM",
        "For Queries mail to: lyricalmagic@mepcoeng.ac.in"
      ]
    }
  ]
  };
  data: any;
  id: any;

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  public closedEvent = false;
  public closedEventInS = false;
  closedEventInSText: any;
  ngOnInit(): void {
    window.scroll(0,0);
    this.id= this.route.snapshot.params["id"];
    this.data= this.eventDetails.eventsList[this.id];

    this.name= this.data["name"];
    this.rules= this.data["rules"];


    // if(this.id==10){
    //   this.closedEvent= true
    //   this.closedEventInS=true
    //   this.closedEventInSText="Event Closed!!! Participate in other events... ThankYou..."
    // }
  }

  participate(){
    if(this.id<9){
      const redirectUrl = '/participate/'+this.id;
      // Redirect the user
      this.router.navigate([redirectUrl]);
    }
    else{
      const redirectUrl = '/participates/'+this.id;
      // Redirect the user
      this.router.navigate([redirectUrl]);
    } 
  }
}
