import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSalaryComponent } from './delete-salary.component';

describe('DeleteSalaryComponent', () => {
  let component: DeleteSalaryComponent;
  let fixture: ComponentFixture<DeleteSalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteSalaryComponent]
    });
    fixture = TestBed.createComponent(DeleteSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
