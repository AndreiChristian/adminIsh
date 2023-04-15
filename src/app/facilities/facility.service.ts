import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FacilityService {
  private facilitySource = new BehaviorSubject<any[]>([]);
  facilities$ = this.facilitySource.asObservable();

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

  getFacilities(urlEnding: string) {
    this.http
      .get<any[]>(`http://127.0.0.1:8000/api/facilities/${urlEnding}`)
      .subscribe((response) => {
        this.facilitySource.next(response);
        console.log(response);
      });
  }

  postFacility(urlEnding: string, data: any) {
    this.http
      .post(`http://127.0.0.1:8000/api/facilities/${urlEnding}`, data)
      .subscribe({
        next: () => {
          this._snackBar.open('Item added succesfully', 'OK');
          this.getFacilities(urlEnding);
        },
        error: () => {
          this._snackBar.open('Error deleting item.', 'OK');

        },
      });
  }

  deleteFacility(urlEnding: string, id: number) {
    this.http
      .delete(`http://127.0.0.1:8000/api/facilities/${urlEnding}/${id}`)
      .subscribe({
        next: () => {
          this._snackBar.open('Item deleted successfully!', 'OK');
          this.getFacilities(urlEnding);
        },
        error: () => {
          this._snackBar.open('Error deleting item.', 'OK');
        },
      });
  }
}
