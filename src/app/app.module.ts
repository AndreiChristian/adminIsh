import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from './material.module';
import { FacilitiesComponent } from './facilities/facilities.component';
import { HttpClientModule } from '@angular/common/http';
import { FacilityItemComponent } from './facilities/facility-item/facility-item.component';
import { FormsModule } from '@angular/forms';
import { NewFacilityItemComponent } from './facilities/facility-item/new-facility-item/new-facility-item.component';
import { FacilityCategoryComponent } from './facilities/facility-category/facility-category.component';
import { FacilityGroupComponent } from './facilities/facility-group/facility-group.component';
import { NewFacilityCategoryComponent } from './facilities/facility-category/new-facility-category/new-facility-category.component';
import { NewFacilityGroupComponent } from './facilities/facility-group/new-facility-group/new-facility-group.component';
import { FacilityGroupDetailComponent } from './facilities/facility-group/facility-group-detail/facility-group-detail.component';
import { FacilityHomeComponent } from './facilities/facility-home/facility-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FacilitiesComponent,
    FacilityItemComponent,
    NewFacilityItemComponent,
    FacilityCategoryComponent,
    FacilityGroupComponent,
    NewFacilityCategoryComponent,
    NewFacilityGroupComponent,
    FacilityGroupDetailComponent,
    FacilityHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [MaterialModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
