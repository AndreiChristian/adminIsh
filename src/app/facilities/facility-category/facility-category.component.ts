import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, catchError, of, throwError } from 'rxjs';
import { FacilityService } from '../facility.service';

@Component({
  selector: 'app-facility-category',
  templateUrl: './facility-category.component.html',
  styleUrls: ['./facility-category.component.scss'],
})
export class FacilityCategoryComponent implements OnInit {
  newCategory: { name: string; description: string } = {
    name: '',
    description: '',
  };

  facilityCategory$: Observable<any[]>;

  constructor(private facilityService: FacilityService) {}

  ngOnInit(): void {
    this.facilityService.getFacilities('category');
    this.facilityCategory$ = this.facilityService.facilities$;
  }

  postNewCategory() {
    this.facilityService.postFacility('category/', this.newCategory);
  }

  deleteCategory(id: number) {
    this.facilityService.deleteFacility('category', id);
  }
}
