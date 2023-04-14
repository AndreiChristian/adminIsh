import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FacilityItemInterface } from 'src/app/models/facilityItem.model';

interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-facility-item',
  templateUrl: './facility-item.component.html',
  styleUrls: ['./facility-item.component.scss'],
})
export class FacilityItemComponent {
  @Input() facilityItem: FacilityItemInterface;

  isEdditing: boolean = false;

  newFacilityItem: FacilityItemInterface;

  options: Option[] = [
    {
      value: 'G',
      viewValue: 'Guest',
    },
    {
      value: 'R',
      viewValue: 'Room',
    },
    {
      value: 'P',
      viewValue: 'Property',
    },
  ];

  constructor(private http: HttpClient) {}

  toggleEdit() {
    this.isEdditing = !this.isEdditing;
    console.log(this.isEdditing);
  }

  onSubmit(form: NgForm) {
    this.newFacilityItem = {
      name: form.value.name || 'test',
      description: form.value.description || 'test description',
      imagePath: '.....',
      level: form.value.level || 'G',
      included: true,
      extraPrice: 0,
    };

    this.postNewFacilityItem();
  }

  postNewFacilityItem() {
    this.http
      .post('http://127.0.0.1:8000/api/facilities/', {
        ...this.newFacilityItem,
      })
      .subscribe(
        (response) => {
          console.log('HTTP POST successful:', response);
        },
        (error) => {
          console.error('HTTP POST error:', error);
        }
      );
  }
}
