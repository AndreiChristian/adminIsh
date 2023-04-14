import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityGroupDetailComponent } from './facility-group-detail.component';

describe('FacilityGroupDetailComponent', () => {
  let component: FacilityGroupDetailComponent;
  let fixture: ComponentFixture<FacilityGroupDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityGroupDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityGroupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
