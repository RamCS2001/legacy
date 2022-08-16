import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualEventsComponent } from './individual-events.component';

describe('IndividualEventsComponent', () => {
  let component: IndividualEventsComponent;
  let fixture: ComponentFixture<IndividualEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
