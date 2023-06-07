import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { GalleriaModule } from 'primeng/galleria';
import { GaleriaComponent } from './galeria/galeria.component';
import {SummaryComponent} from "../components/summary/summary.component";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    HomeComponent,
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    GalleriaModule,
    SummaryComponent,
    CardModule,
    ButtonModule,
    RouterLink
  ]
})
export class HomeModule { }
