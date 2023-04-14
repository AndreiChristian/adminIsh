import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFacilityItemComponent } from './new-facility-item.component';

describe('NewFacilityItemComponent', () => {
  let component: NewFacilityItemComponent;
  let fixture: ComponentFixture<NewFacilityItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFacilityItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFacilityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
