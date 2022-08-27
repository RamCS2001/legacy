import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-group-events',
  templateUrl: './group-events.component.html',
  styleUrls: ['./group-events.component.css']
})
export class GroupEventsComponent implements OnInit {
  
    constructor(private route: ActivatedRoute, protected router: Router) {}

   
    ngOnInit(): void {
      
    }
}
