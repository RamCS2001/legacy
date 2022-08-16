import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbUtilityService } from '../db-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loginBtn = true;
  public logoutBtn = false;
  public usernameDisplay = false;
  username: any;

  constructor(private myDb: DbUtilityService,private router: Router) { }

  ngOnInit(): void {
    if(this.myDb.isLoggedIn()){
      console.log("logged in header")
      this.loginBtn = false;
      this.logoutBtn = true;
      this.username= localStorage.getItem("username");
      this.usernameDisplay=true;
    }
    else{
      this.loginBtn = true;
      this.logoutBtn = false;
    }
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("username");
    const redirectUrl = '/login';
    // Redirect the user
    this.router.navigate([redirectUrl], {queryParams: { logout: 'true' }});
  }
}
