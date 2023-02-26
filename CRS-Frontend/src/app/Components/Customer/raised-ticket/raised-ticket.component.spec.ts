import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisedTicketComponent } from './raised-ticket.component';

describe('RaisedTicketComponent', () => {
  let component: RaisedTicketComponent;
  let fixture: ComponentFixture<RaisedTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaisedTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaisedTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
