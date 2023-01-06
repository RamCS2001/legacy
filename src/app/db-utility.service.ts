import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as moment from "moment";


@Injectable({
  providedIn: 'root'
})
export class DbUtilityService {

  public registerationSuccess= new BehaviorSubject<any>(""); 

  localCreateUserUrl= "https://legacyserverside.onrender.com/createuser";
  localLoginUserUrl= "https://legacyserverside.onrender.com/loginuser";
  localGetUserDetailsUrl= "https://legacyserverside.onrender.com/getuserdetails"
  localParticipateUrl= "https://legacyserverside.onrender.com/participate"
  localParticipatesUrl= "https://legacyserverside.onrender.com/participates"
  
  constructor(private http:HttpClient) { }

  createUser(acc: any): Observable<any>{
    console.log(acc);
    return this.http.post(this.localCreateUserUrl, acc);
  }

  loginUser(user: any): Observable<any>{
    console.log(user);
    return this.http.post(this.localLoginUserUrl, user)
  }

  setSession(response: any){
    const expiresAt = moment().add(response.expiresIn,'second');

    localStorage.setItem('id_token', response.idToken);
    localStorage.setItem('username', response.name);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  public isLoggedIn() {
    const res=this.getExpiration()
    if(res==0){
      return false;
    }
    else{
      return moment().isBefore(res);
    }
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {

      if(localStorage.getItem("expires_at")===null){
        return 0;
      }
      else{
      const expiration = localStorage.getItem("expires_at") || '{}';
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
      }
    
  }    

  getUserDetails(): Observable<any>{
    return this.http.get(this.localGetUserDetailsUrl);
  }

  participate(details: any): Observable<any>{
    return this.http.post(this.localParticipateUrl, details);
  }

  participates(details: any): Observable<any>{
    return this.http.post(this.localParticipatesUrl, details);
  }

  isAdmin(): boolean{

    let role = localStorage.getItem("username")
    if(role=="Admin"){
      return true    
    }
    else{
      return false
    }
  }

  // localIndividuallist= "https://legacyserverside.onrender.com/Individuallist?event="
  // localGroupList= "https://legacyserverside.onrender.com/Grouplist?event="
  // localAllList= "https://legacyserverside.onrender.com/all"

  // localIndividuallist= "http://localhost:5000/Individuallist?event="
  // localGroupList= "http://localhost:5000/Grouplist?event="
  // localAllList= "http://localhost:5000/all"

  localIndividuallist= "https://legacyserverside.onrender.com/Individuallist?event="
  localGroupList= "https://legacyserverside.onrender.com/Grouplist?event="
  localAllList= "https://legacyserverside.onrender.com/all"

  getIndividualList(event: any): Observable<any>{
    // console.log(this.localGetList+event)
    return this.http.get(this.localIndividuallist+ event);
  }
  getGroupList(event: any): Observable<any>{
    // console.log(this.localGetList+event)
    return this.http.get(this.localGroupList+ event);
  }
  getAllList(event: any): Observable<any>{
    // console.log(this.localGetList+event)
    return this.http.get(this.localAllList);
  }

  localCheckCollegeParticipationUrl= "https://legacyserverside.onrender.com/checkCollegeParticipation?event="

  checkCollegeParticipation(event: any): Observable<any>{
    return this.http.get(this.localCheckCollegeParticipationUrl+ event);
  }

  localCheckAllParticipants="https://legacyserverside.onrender.com/CheckAllParticipants" 
  payuSecureUrl = "https://secure.payu.in/_payment"

  checkAllParticipant(participants: any): Observable<any>{
    return this.http.post(this.localCheckAllParticipants, participants);
  }
  pay ( details: any ) : Observable < any > {
    return this.http.post ( "https://legacyserverside.onrender.com/payhash" , details )
  }

  localGetCollegeList="https://legacyserverside.onrender.com/getcollegelist"
  getCollegeList(){
    return this.http.get(this.localGetCollegeList)
  }

  sendQueryLink= "http://localhost:5000/sendquery"
  sendQuery(query: any){
    return this.http.post ( this.sendQueryLink , query)
  }


  getParticipantNumberCount= "https://legacyserverside.onrender.com/getParticipantNumberCount"
  getParticipantsCount(){
    return this.http.get(this.getParticipantNumberCount)
  }
}
