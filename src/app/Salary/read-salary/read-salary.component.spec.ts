import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadSalaryComponent } from './read-salary.component';

describe('ReadSalaryComponent', () => {
  let component: ReadSalaryComponent;
  let fixture: ComponentFixture<ReadSalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadSalaryComponent]
    });
    fixture = TestBed.createComponent(ReadSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
