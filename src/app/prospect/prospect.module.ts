import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralWorkProspectComponent } from './structural-work-prospect/structural-work-prospect.component';
import { RealEstateProspectComponent } from './real-estate-prospect/real-estate-prospect.component';
import { ArchitectProspectComponent } from './architect-prospect/architect-prospect.component';
import { TownshipProspectComponent } from './township-prospect/township-prospect.component';
import {DesignOfficeProspectComponent} from "./design-office/design-office-prospect.component";



@NgModule({
  declarations: [
    StructuralWorkProspectComponent,
    RealEstateProspectComponent,
    ArchitectProspectComponent,
    TownshipProspectComponent,
    DesignOfficeProspectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProspectModule { }
