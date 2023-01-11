import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralWorkProspectComponent } from './structural-work-prospect/structural-work-prospect.component';
import { RealEstateProspectComponent } from './real-estate-prospect/real-estate-prospect.component';
import { ArchitectProspectComponent } from './architect-prospect/architect-prospect.component';
import { TownshipProspectComponent } from './township-prospect/township-prospect.component';
import {DesignOfficeProspectComponent} from "./design-office/design-office-prospect.component";
import {FieldsetModule} from "primeng/fieldset";
import { TemplateProspectComponent } from './template-prospect/template-prospect.component';
import {ButtonModule} from "primeng/button";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    StructuralWorkProspectComponent,
    RealEstateProspectComponent,
    ArchitectProspectComponent,
    TownshipProspectComponent,
    DesignOfficeProspectComponent,
    TemplateProspectComponent
  ],
  imports: [
    CommonModule,
    FieldsetModule,
    ButtonModule,
    RouterLink
  ]
})
export class ProspectModule { }
