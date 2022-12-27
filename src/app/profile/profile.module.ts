import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProfileComponent } from './profile.component';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [
    ExperiencesComponent,
    ProfileComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
