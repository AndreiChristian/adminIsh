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

@NgModule({
  declarations: [AppComponent, NavigationComponent, FacilitiesComponent, FacilityItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [MaterialModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
