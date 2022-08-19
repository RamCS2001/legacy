import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as moment from "moment";


@Injectable({
  providedIn: 'root'
})
export class DbUtilityService {

  public registerationSuccess= new BehaviorSubject<any>(""); 

  localCreateUserUrl= "http://localhost:5000/createuser";
  localLoginUserUrl= "http://localhost:5000/loginuser";
  localGetUserDetailsUrl= "http://localhost:5000/getuserdetails"
  localParticipateUrl= "http://localhost:5000/participate"
  localParticipatesUrl= "http://localhost:5000/participates"
  
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
    if(role=="admin"){
      return true    
    }
    else{
      return false
    }
  }

  localIndividuallist= "http://localhost:5000/Individuallist?event="
  localGroupList= "http://localhost:5000/Grouplist?event="
  localAllList= "http://localhost:5000/all"

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

  locacheckCollegeParticipationUrl= "http://localhost:5000/checkCollegeParticipation?event="

  checkCollegeParticipation(event: any): Observable<any>{
    return this.http.get(this.locacheckCollegeParticipationUrl+ event);
  }
}
