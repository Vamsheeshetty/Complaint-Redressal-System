import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedComplaintsComponent } from './assigned-complaints.component';

describe('AssignedComplaintsComponent', () => {
  let component: AssignedComplaintsComponent;
  let fixture: ComponentFixture<AssignedComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedComplaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignedComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
