import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedComplaintsComponent } from './unassigned-complaints.component';

describe('UnassignedComplaintsComponent', () => {
  let component: UnassignedComplaintsComponent;
  let fixture: ComponentFixture<UnassignedComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnassignedComplaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnassignedComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
