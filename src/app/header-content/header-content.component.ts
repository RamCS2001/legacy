import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.css']
})
export class HeaderContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll ( name: string ): void {
    const elementList = document.querySelectorAll('.' + name);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

}
