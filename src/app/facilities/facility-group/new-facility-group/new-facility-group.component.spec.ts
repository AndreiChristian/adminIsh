import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFacilityGroupComponent } from './new-facility-group.component';

describe('NewFacilityGroupComponent', () => {
  let component: NewFacilityGroupComponent;
  let fixture: ComponentFixture<NewFacilityGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFacilityGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFacilityGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
