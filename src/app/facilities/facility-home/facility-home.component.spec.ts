import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityHomeComponent } from './facility-home.component';

describe('FacilityHomeComponent', () => {
  let component: FacilityHomeComponent;
  let fixture: ComponentFixture<FacilityHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
