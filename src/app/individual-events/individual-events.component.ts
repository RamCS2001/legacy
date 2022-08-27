import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-individual-events',
  templateUrl: './individual-events.component.html',
  styleUrls: ['./individual-events.component.css']
})
export class IndividualEventsComponent implements OnInit {

  constructor(protected router: Router) { }
  ngOnInit(): void {
  }
  
}
