import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipatesComponent } from './participates.component';

describe('ParticipatesComponent', () => {
  let component: ParticipatesComponent;
  let fixture: ComponentFixture<ParticipatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
