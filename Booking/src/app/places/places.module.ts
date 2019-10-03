import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PlacesPage } from './places.page';
import { Routes } from '@angular/router';
import { PlacesRoutingModule } from './places-routing.module';

const routes: Routes = [
  {
    path: '',
    component: PlacesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    PlacesRoutingModule,
    IonicModule
  ],
  declarations: [PlacesPage]
})
export class PlacesPageModule {}
