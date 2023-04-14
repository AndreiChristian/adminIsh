import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import {FacilityItemInterface} from "../models/facilityItem.model"


@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
})
export class FacilitiesComponent implements OnInit {
  facilityItems$: Observable<FacilityItemInterface[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.facilityItems$ = this.http
      .get<any[]>('http://127.0.0.1:8000/api/facilities/')
      .pipe(
        map((response) =>
          response.map((item) => ({
            name: item.name,
            description: item.description,
            imagePath: item.imagePath,
            level: item.level,
            included: item.included,
            extraPrice: item.extraPrice,
          }))
        )
      );
  }
}
