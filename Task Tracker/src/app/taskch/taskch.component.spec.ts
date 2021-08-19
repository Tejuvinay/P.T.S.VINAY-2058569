import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskchComponent } from './taskch.component';

describe('TaskchComponent', () => {
  let component: TaskchComponent;
  let fixture: ComponentFixture<TaskchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
