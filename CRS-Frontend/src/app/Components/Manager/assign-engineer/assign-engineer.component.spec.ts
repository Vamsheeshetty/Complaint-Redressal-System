import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignEngineerComponent } from './assign-engineer.component';

describe('AssignEngineerComponent', () => {
  let component: AssignEngineerComponent;
  let fixture: ComponentFixture<AssignEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignEngineerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
