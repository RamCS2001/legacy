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
    "eventsList": [{
      id: "0",
      name: "As You Like It",
      rules: [
        "Individual Event",
        "Theme : Open",
        "Time Duration : 3 mins.",
        "Venue : Mech Seminar Hall",
        "Time : 1.30 PM",
        "Students can exhibit any talents like Juggling, Martial Art, Beat Box, Silambam, Hulahoops, mimicry, Mono Act etc.",
        "Singing, Dancing, Instrumentals are NOT ALLOWED.",
        "Participants should have the necessary items",
        "Audio track can be played in the background.",
        "The audio track can be played in the background. If so,  submit the audio to : https://forms.gle/E9LFJbvWE8z18q669 on or before 29.08.2022 by 5 pm in mp3 format (Normalized).",
        "Vulgarity in any form is strictly prohibited.",
        "Jury's decision is final.",
        "If necessary, prelims will be conducted.",
        "For queries,contact: mepcofinearts2022@gmail.com  with the event name as the subject",
      ]
    },{
      id: "1",
      name: "Best Manager",
      rules: [
        "Individual Event",
        "No restriction in number of participants.",
        "Usage of proper words during the event should be strictly followed.",
        " ----------------------------------------------",
        "ROUND 1 (PRELIMS)",
        "---Venue : Civil Seminar Hall",
        "---Time: 09.30 AM",
        "---Totally 3 Rounds:(Individual task, multitasking, situation handling)",
        "---Language for communication is strictly English.  ",
        "---Selected paticipants will get to next round",
        " ----------------------------------------------",
        "Final Round",
        "---Venue : MCC",
        "---Time: 01.15 PM",
        "---Situation Handling",
        "---Language for communication is strictly English.",
        " ----------------------------------------------",
        "Jury decision is final",
      ]
    },{
      id: "2",
      name: "Solo Dance",
      rules: [
        "Individual Event",
        "Audio track must be in mp3 format.",
        "Theme : Open",
        "Venue: MCC",
        "Time: 3mins",
        "Whistle, Vulgarity in songs, Moves, Costumes or any sorts will lead to disqualification.",
        "Dangerous properties should not be used.",
        "Songs must not be highly peppy (Strictly Avoid kuthu songs).",
        "Innovation and creativity in dance will be given additional credits.",
        "The dress code must be proper.",
        "Proper approval for dress must be sought from the concerned faculties-in-charge earlier.",
        "Reporting time 9:00 AM",
        "Any kind of dance may be performed like classical, free style or Folk etc.,",
        "Maximum of 20 participants who complete registration, corrected audio track submission on or before 29.08.2022 by 5 pm in mp3 format (Normalized) on first come first basis.",
        "Submit Your Normalized Audio at: https://forms.gle/aLqMYvmo4Gdkuo6N6",
        "Jury's decision is final.",
        "For queries contact: mepcofinearts2022@gmail.com with the event name as the subject.",
      ]
    },{
      id: "3",
      name: "Solo Singing",
      rules: [
        "Individual Event",
        "Students should be in formal wear.",
        "Theme : Open",
        "Time Duration : 3 mins.",
        "Venue : Mech Seminar Hall",
        "Time : 10.30 AM",
        "No pre-recordings should be played.",
        "Only Karaoke is allowed. No other background voices",
        "Any style of music can be performed (Folk, Jazz, Melody, Pop, Metal etc.).",
        "Only Tamil songs are allowed.",
        "Vulgarity in song selection, lyrics or any sorts will lead to disqualification.",
        "Judging criteria will be : Shruthi, Voice Clarity, Song difficulty, Tempo and Improvisations.",
        "First come first serve basis. Register soon.",
        "Jury decision is final.",
        "If necessary, prelims will be conducted.",

        "Submit your karaoke at:  https://forms.gle/Jatxk9H8NztnUQgYA on or before 29.08.2022 by 5 pm in mp3 format (Normalized).",
        
        "For queries, contact: mepcofinearts2022@gmail.com  with the event name as the subject.",
      ]
    },{
      id: "4",
      name: "Solo Instrumental",
      rules: [
        "Individual Event",
        "Students should be in formal wear.",
        "Theme : Open",
        "Venue : Mech Seminar Hall",
        "Time : 09.00 AM",
        "Time Duration : 3 mins.",
        "Any kind of instruments can be played. ( Percussions, Non-Percussions, Keys, Strings, Wind Instruments)",
        "Multiple instruments can played to make your performance attractive. ( Eg. keyboard + guitar )",
        "Mild Karoke/ Mild Voiceovers can be used (if needed) upon which the instrument can be played.",
        "Vulgarity in any form will lead to disqualification.",
        "Judging criteria :  Song difficulty, Tempo, Rhythm, No. Of flaws, Improvisations",
        "Jury's decision is final.",
        "If necessary, prelims will be conducted.",
        "Submit your audio to: https://forms.gle/p6E5Yzn9diGbsdN99 on or before 29.08.2022 by 5 pm in mp3 format (Normalized).",
        "Jury's decision is final",
        "For queries,contact: mepcofinearts2022@gmail.com  with the event name as the subject.",
      ]
    },{
      id: "5",
      name: "Pixie",
      rules: [
        "Individual Event",
        "THEME: HOMETOWN PRIDE",
        "Your hometowns should be represented through your photograph.",
        "Creativity of bringing out the original is appreciable. ",
        "Venue : In front of MCC",
        "Voting starts @09.00 AM",
        "Stick to the theme.",
        "Photos downloaded from internet or edited photos, will be disqualified",
        "Colour correction is allowed but avoid surrealism",
        "Best Photos will be short-listed from the entries and will be displayed on the pixie board.",
        "Voting will be undertaken.",
        "Both Hard / Soft copies of the photograph are considered.",
        "In case of Hard copy, the participant must submit the photograph along with the Registration form.",
        "Submit your photos through mail to photoclubforu@gmail.com (In subject, mention entry for pixie. Mention your name, year, dept, sec, roll no in the body of the email) on or before 29.08.2022",
        "In case of any query feel free and mail us at photoclubforu@gmail.com",
        "Jury decision is final.",
      ]
    },{
      id: "6",
      name: "Pencil Sketching",
      rules: [
        "Individual Event",
        "Time: 1 hour.",
        "Venue : Drawing Hall & SHF16, S&H Block (First floor",
        "Time : 01.30 PM",
        "Drawings should be drawn in an A4 sheet.",
        "Participants should use only pencil for sketching.",
        "Participants should bring their own drawing paraphernalia(including an A4 sheet).",
        "Topic will be given on the spot",
        "Participants should behave ethically and should not get help from others / the Internet.",
        "Participants will be monitored during the entire competition.",
        "Jury decision is final.",
      ]
    },{
      id: "7",
      name: "Yoga",
      rules: [
        "Individual Event",
        "Venue : CSE Seminar Hall",
        "Time : 09.00 AM",
        "Each candidate is to perform one Bending,one Stretching,one Twisting and extra two Asana of their own.",
        "Track suits & Closed T-shirts must be worn during the competition.",
        "Shorts & Sleeveless Strictly not allowed.",
        "Musical Yoga Allowed.",
        "Rhythm,Posture,Complication,Flexibility is taken under Consideration.",
        "Jury decision is final.",
      ]
    },{
      id: "8",
      name: "Ezhuthaani",
      rules: [
        "Individual Event",
        "Theme/Topic : On the Spot",
        "Venue : SHG04, SHG05",
        "Time : 9.00 AM",
        "Participants need to exhibit their Creative Writing skills (fiction or poetry) in Tamil or English.",
        "The duration of the event is 1 hour",
        "The maximum mark for the event is 50 with the following split-up.",
        "→ Content + flow - 15 marks",
        "→ Presentation - 5 marks",
        "→ Creativity + relevance to the title - 10 marks",
        "→ Grammar + Punctuation - 10",
        "→ Creativity + relevance to the title - 10 marks",
        "→ Vocabulary style - 10",
        "All entries will be thoroughly validated.",
        "Jury's decision is final.",
        "For queries contact : mepcoliterary@gmail.com with the event name as the subject.",
      ]
    },{
      id: "9",
      name: "Divide And Conquer",
      rules: [
				"Venue : CSE Seminar Hall",
				"Time : 01.15 PM",
				"The team can consist of 5 members",
				"Registration based on first come first serve basis.",
				"Only 20 teams can register.",
				"No change of Team members is permitted once the registration is closed.",
				"There are totally three rounds to finish the game i.e., Prelims, round 1 and the final round",
				"Prelims would be conducted on on the same day of the event",
				"Maximum of 10 teams will be selected from prelims.",
				"Time Duration: 2 Hrs (20 min-Prelims, 45 min-Round 1,45 min-Final Round)",
				"Out of 20 teams, 10 Teams would be selected to Round 1 and 5 teams to the final round.",
				"Multiple tasks will be given for participants in each team separately in each level.",
				"Marks would be provided on the basis of time of completion of the tasks collectively",
				"Jury decision is final.",
        "For queries contact at : readersclub@mepcoeng.ac.in"
				]
    },{
      id: "10",
      name: "Treasure hunt",
      rules: [
				"The participating team must have exactly 5 members. There will be no changes in the participants list after initial submission",
				"Total 30 teams (15 Boys team and 15 Girls team) will be shortlisted for prelims round based on first come first serve",
				"Participants should assemble at the mentioned venue on or before 9.10am. Prelims round starts by 9.15am",
				"Elimination will be there based on your prelims score.",
				"15 teams will be shortlisted for the Item collection round.",
				"If you borrow any items within the campus from anybody you must be responsible for returning it.",
				"Interaction among other teams is strictly prohibited.",
				"For the Final round, 8 teams will be shortlisted",
				"The first team to finish the final level will be the winner of the event.",
				"Final score will be based on all previous levels.",
				"Be a good sport and try to solve the levels on your own. Googling the answers is not encouraged",
				"Jury's decision is final.",
        "In case of any query feel free to mail us at clubinnovativemepco@gmail.com"
				]
    },{
      id: "11",
      name: "Monsters’ Muss",
      rules: [
        "Venue : AV Hall, S&H Block",
        "Time : 01.30 PM",
        "Duration: 2 hours",
        "Each team should have two students.",
        "Prelims may be conducted if the number of teams exceeds FIFTEEN.",
        "Indiscipline in any form will lead to the disqualification of the team.",
        "Stationary items like pens, pencils etc have to be brought by the participants.",
        "Electrical/External sources should not be used during the event.",
        "Judging will also be based on fluency, creative thinking, multi-tasking, language skills.",
        "Jury’s verdict is final.",
        "For any queries, contact mepcobluesky@gmail.com",
        "Reporting Time: 01:20 PM",
        "Staff incharge: Dr.B.Rathika (English department)."
      ]
    },{
      id: "12",
      name: "Radio Mirchi",
      rules: [
				"Venue : CSE Seminar Hall",
				"Time : 10.00 AM",
				"A team can have a maximum of three members. Single member per team is acceptable.",
				"Recorded voices or any sound are not allowed.",
				"Voice and tone modulations of the participants will be considered.",
				"Participants should have their content relevant to their titles and may show their creative touch during the show.",
				"The event as a whole has two rounds.",
				"→ 1st round- participants can prepare their talk with their own topics.",
				"→ 2nd round- participants will be given a task to find the topic and are expected to talk on the topic.",
				"Vulgarity and provocative thoughts in the topic or talk will not be entertained and shall be subject to immediate disqualification from the event.",
				"Jury decision is final.",
				"For queries contact : mepcoliterary@gmail.com with the event name as the subject.",
				"JUDGMENT CRITERIA:",
				"	1. Clarity of voice",
				"	2. Fluency",
				"	3. Originality",
				"	4. Communication of the contest theme",
				"	5. Sense of humour and presentation",
				]
    },{
      id: "13",
      name: "English Potpourri",
      rules: [
				"Venue : AV Hall, S & H Block",
				"Time : 9.00 AM",
				"Each team should have 3 participants.",
				"The events include 2 rounds which have to be performed by the teams within 2 hour.",
				"Round 1 includes",
				"	1. Channel Surfing",
				"	2. Block and Tackle",
				"	3. Ad. on spot",
				"Round 2 includes",
				"	1. Rearrange the jumbled word (words from Dictionary)",
				"	2. Sudoku",
				"	3. Cross word",
				"	4. Minimalist posters of films",
				"	5. Find the words from the given suffix",
				"In this written task the best scores will be considered.",
				"For queries contact : mepcoliterary@gmail.com with the event name as the subject.",
				"Jury decision is final.",
				]
    },{
      id: "14",
      name: "Lyrical Hunt",
      rules: [
				"Venue : S&H Seminar Hall",
				"Time : 01.30 PM",
				"Each team can have 3 members",
				"The Event comprises of 2 segments - Prelims followed by the Main Event.",
				"Prelims will be conducted prior to the main event and 8 teams will be selected for the main round .",
				"Prelims consists of 3 segments, Each segment will have 10 questions and each question will be awarded 1 point.",
				"Questions for prelims would be of the form Jumbled Lyric, Complete the lyric and Guess the song.",
				"Main round will consist of 5 to 6 segments like Karaoke, Connections, Rapid Fire, Reverse the song etc….",
				"Marks for each segment will be announced on the spot.",
				"For queries contact : mepcoliterary@gmail.com with the event name as the subject.",
				"Jury decision is final",
				]
    },{
      id: "15",
      name: "Tamil Potpourri",
      rules: [
				"Venue : ECE Seminar Hall",
				"Time : 01.30 PM",
				"Each team should consist of 3 members.",
				"In case if there are many teams there will be prelims, and then 8 teams will make to the final.",
				"Prelims will consist of 3 segments, each segment will contain 5 questions(each 1 mark).",
				"Main event: Each team will be asked number of questions based on the rounds.",
				"The team with the correct answer will get a +5 mark.",
				"We will be having a Special question in a round where the team will get +10 marks.",
				"During the Special question if the answer is wrong the team will be awarded -2 marks.",
				"The team can pass on the questions where they will not lose any marks.",
				"The team which gets the pass question will get +2.5 for the correct answer and they will not get any negative marks if they haven't answered the question and passed.",
				"In case of tie the team will be asked 3 rapid fire questions and the team with more quick answers will be declared as the winner.",
				"Jury decision is final.",
				"For queries contact : mepcoliterary@gmail.com with the event name as the subject.",
				]
    },{
      id: "16",
      name: "Cinematrix (Short Flim)",
      rules: [
				"Venue : S&H Seminar Hall",
				"Time : 11.00 AM",
				"Maximum of 8 members per team.",
				"No criteria in team choosing.",
				"THEME: ANY.",
				"Duration: 15 min (including title and credits).",
				"The YouTube link must be sent or shared via Google Drive to shortfilm@mepcoeng.ac.in on or before 29.08.2022",
				"Best films will be shortlisted and intimated before 01.09.22.",
				"Cinematography & editing will play as the major score points.",
				"Avoid help from professional artists.",
				"Jury decision is final.",
        "In case of any query feel free and mail us at shortfilm@mepcoeng.ac.in"
				]
    },{
      id: "17",
      name: "Quizzards of Oz",
      rules: [
				"Venue : ECE Seminar Hall",
				"Time : 9.00 AM",
				"Each team should consist of two members.",
				"Prelims would be of a written format.",
				"Six teams would be selected from the prelims.",
				"Main Round:",
				"Round -1",
				"	❖ Each team gets one question.",
				"	❖ Questions are to be asked in clockwise direction.",
				"	❖ Each question is a pass question.",
				"	❖ There is no negative marking.",
				"	❖ The correct answer for the direct question gets 10 marks.",
				"	❖ Correct answer for passed question gets 5 marks.",
				"Round – 2",
				"	❖ Each team gets one question.",
				"	❖ Questions will be asked in anti-clockwise direction.",
				"	❖ Each question is not a pass question.",
				"	❖ Wrong answer gets a negative marking of -5.",
				"	❖ Correct answer gets 10 marks.",
				"Round – 3",
				"	❖ Each team gets one question.",
				"	❖ Order will be in clockwise direction.",
				"	❖ No negative marking.",
				"	❖ Each question is not a pass question.",
				"	❖ Correct answer on first clue gets 20 marks.",
				"	❖ Correct answer on second clue gets 15 marks.",
				"	❖ Correct answer on third clue gets 10 marks.",
				"	❖ Correct answer on last clue gets 5 marks.",
				"Round – 4",
				"	❖ Each team gets one question.",
				"	❖ Only one person will answer the question.",
				"	❖ Should answer rapidly.",
				"	❖ Order will be in a clockwise direction.",
				"	❖ No negative marking.",
				"	❖ Each question is not a pass question.",
				"	❖ The correct answer gets 5 marks.",
				"Round – 5",
				"	❖ Each team gets one question and genre based.",
				"	❖ No negative marking.",
				"	❖ Each question is not a pass question",
				"Each team should consist of 3 members.",
				"Jury decision is final.",
				"For queries contact : mepcoliterary@gmail.com with the event name as the subject.",
			 ]
    },{
      id: "18",
      name: "Group Dance",
      rules:	[
				"No of members: Minimum 4 to Maximum 15",
				"Time Duration: 5minutes.",
				"Venue: MCC",
				"Concepts or themes can be used without affecting the dance portion",
				"Whistle, Vulgarity in Songs, Moves, Costumes or any sorts will lead to disqualification.",
				"Innovation and creativity in dance will be given additional credits.",
				"Proper approval for dress must be sought from the concerned faculty-in-charges earlier.",
				"Reporting time 02:00 PM",
        "Songs must not be highly peppy (Strictly Avoid kuthu songs)",
				"Using of dangerous properties is prohibited.",
				"No participation of boys and girls together.",
				"Audio track must be in mp3 format (Normalized)",
        "Maximum of 12 teams who complete registration, corrected audio track submission on or before 29.08.2022 by 5 pm in mp3 format (Normalized) on first come first basis.",
        "Submit Your Audio to:  https://forms.gle/5q4ric8ZnZGpvjwc9",
				"Jury decision is final.",
        "For queries,contact: mepcofinearts2022@gmail.com  with the event name as the subject.",
				]
    },{
      id: "19",
      name: "Poster Making",
      rules:	[
				"Venue : Date Science/Data Analytics lab, CSE & IT block  (II floor).",
				"Time : 1.30 PM",
				"Two per team.",
				"ON SPOT TOPIC",
				"You will get 90 mins to work on your poster.",
				"Both paper based and digital graphics are allowed.",
				"Poster should be made in A3 size (11.7 x 16.5 inches).",
				"For paper based participants should use A3 sheets and all other necessary items.",
				"For digital graphics participants must bring their laptops with necessary software installed.",
				"Jury decision is final.",
				"In case of any query feel free and mail us at photoclubforu@gmail.com",
				]
    },{
      id: "20",
      name: "Rangoli",
      rules:	[
				"Group Event",
				"Theme : Will be announced ON THE SPOT",
				"Time Duration : 90 mins Reporting Time: 10.30 am",
				"Venue: S&H Block First Floor Verandah",
        "Team members: maximum 3",
				"You should bring the necessary items.",
        "Usage of templates are strictly prohibited.",
				"You can use rock salt, flowers, dhal.",
				"First come first serve basis. Register Soon.",
				"Judging criteria will be : symmetry, color combination, innovation, creativity and the neatness of the Rangoli.",
				"Jury's decision is final.",
				"For queries contact : mepcofinearts2022@gmail.com with the event name as the subject.",
				]
    },{
      id: "21",
      name: "Dramarix",
      rules:	[
        "Maximum of 10 members and minimum of 4 per team.",
        "Theme: Open",
        "Time Duration: 8 min.",
        "Venue : MCC",
        "Time : 10.30 AM",
        "Participants can use either audio track in MP3 format or Oral delivery.",
        "Drama or mime could be performed.",
        "Language – Tamil & English.",
        "Reporting time 9:45 AM",
        "Whistling, Teasing, Vulgarity in Songs, Dialogues, Costumes or any sort will lead to disqualification.",
        "Judgement will be based on acting, concept, stage presence, audio, costume etc.,",
        "Participants must bring their own materials.",
        "First 15 teams who complete the registration with corrected audio track on or before 29.08.2022 by 5 pm in mp3 format (Normalized).",
        "Audio track must be in mp3 format (Normalized)",
        "Submit your Audio :https://forms.gle/YSxEQ5Kzosoz3oRx5",
        "The Jury’s decision is final.",
        "For queries contact : mepcofinearts2022@gmail.com  with the event name as the subject."
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


    if(this.id==10){
      this.closedEvent= true
      this.closedEventInS=true
      this.closedEventInSText="Event Closed!!! Participate in other events... ThankYou..."
    }
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
