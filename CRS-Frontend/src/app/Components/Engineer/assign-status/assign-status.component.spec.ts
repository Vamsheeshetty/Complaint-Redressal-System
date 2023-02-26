import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignStatusComponent } from './assign-status.component';

describe('AssignStatusComponent', () => {
  let component: AssignStatusComponent;
  let fixture: ComponentFixture<AssignStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
