import { Component, Input } from '@angular/core';
import { FacilityItemInterface } from 'src/app/models/facilityItem.model';

@Component({
  selector: 'app-facility-item',
  templateUrl: './facility-item.component.html',
  styleUrls: ['./facility-item.component.scss'],
})
export class FacilityItemComponent {
  @Input() facilityItem: FacilityItemInterface;
}
