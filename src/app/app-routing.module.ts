import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {StructuralWorkProspectComponent} from "./prospect/structural-work-prospect/structural-work-prospect.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'profil', component: ProfileComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'gros-oeuvre', component: StructuralWorkProspectComponent},
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
