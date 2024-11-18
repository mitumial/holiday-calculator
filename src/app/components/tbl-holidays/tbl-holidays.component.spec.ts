import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblHolidaysComponent } from './tbl-holidays.component';

describe('TblHolidaysComponent', () => {
  let component: TblHolidaysComponent;
  let fixture: ComponentFixture<TblHolidaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TblHolidaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TblHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
