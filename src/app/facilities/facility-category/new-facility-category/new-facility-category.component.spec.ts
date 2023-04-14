import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFacilityCategoryComponent } from './new-facility-category.component';

describe('NewFacilityCategoryComponent', () => {
  let component: NewFacilityCategoryComponent;
  let fixture: ComponentFixture<NewFacilityCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFacilityCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFacilityCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
