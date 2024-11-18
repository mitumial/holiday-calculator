import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayValidatorComponent } from './holiday-validator.component';

describe('HolidayValidatorComponent', () => {
  let component: HolidayValidatorComponent;
  let fixture: ComponentFixture<HolidayValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolidayValidatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
