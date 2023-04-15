import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilitiesComponent } from './facilities/facilities.component';
import { FacilityCategoryComponent } from './facilities/facility-category/facility-category.component';
import { FacilityGroupComponent } from './facilities/facility-group/facility-group.component';
import { FacilityItemComponent } from './facilities/facility-item/facility-item.component';

const routes: Routes = [
  {
    path: 'facilities',
    component: FacilitiesComponent,
    children: [
      { path: '', component: FacilityCategoryComponent },
      { path: 'group', component: FacilityGroupComponent },
      { path: 'item', component: FacilityItemComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
