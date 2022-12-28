import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactBladeComponent } from './contact-blade/contact-blade.component';
import { MapComponent } from './map/map.component';
import {GMapModule} from 'primeng/gmap';



@NgModule({
  declarations: [
    ContactComponent,
    ContactBladeComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    GMapModule
  ]
})
export class ContactModule { }
