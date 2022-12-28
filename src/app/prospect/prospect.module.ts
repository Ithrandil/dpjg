import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralWorkProspectComponent } from './structural-work-prospect/structural-work-prospect.component';
import { RealEstateProspectComponent } from './real-estate-prospect/real-estate-prospect.component';



@NgModule({
  declarations: [
    StructuralWorkProspectComponent,
    RealEstateProspectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProspectModule { }
