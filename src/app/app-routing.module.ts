import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {StructuralWorkProspectComponent} from "./prospect/structural-work-prospect/structural-work-prospect.component";
import {RealEstateProspectComponent} from "./prospect/real-estate-prospect/real-estate-prospect.component";
import {ArchitectProspectComponent} from "./prospect/architect-prospect/architect-prospect.component";
import {TownshipProspectComponent} from "./prospect/township-prospect/township-prospect.component";
import {DesignOfficeProspectComponent} from "./prospect/design-office/design-office-prospect.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'profil', component: ProfileComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'gros-oeuvre', component: StructuralWorkProspectComponent},
  { path: 'immobilier', component: RealEstateProspectComponent},
  { path: 'bureau-etude', component: DesignOfficeProspectComponent},
  { path: 'architecture', component: ArchitectProspectComponent},
  { path: 'collectivite', component: TownshipProspectComponent},
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
