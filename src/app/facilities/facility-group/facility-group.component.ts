import { Component, OnInit } from '@angular/core';
import { FacilityService } from '../facility.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-facility-group',
  templateUrl: './facility-group.component.html',
  styleUrls: ['./facility-group.component.scss'],
})
export class FacilityGroupComponent implements OnInit {
  facilityGroup$: Observable<any[]>;

  constructor(private facilityService: FacilityService) {}

  ngOnInit(): void {
    this.facilityService.getFacilities("group")
    this.facilityGroup$ = this.facilityService.facilities$;
  }

}
