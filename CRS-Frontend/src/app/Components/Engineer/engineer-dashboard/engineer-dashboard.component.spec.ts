import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerDashboardComponent } from './engineer-dashboard.component';

describe('EngineerDashboardComponent', () => {
  let component: EngineerDashboardComponent;
  let fixture: ComponentFixture<EngineerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
