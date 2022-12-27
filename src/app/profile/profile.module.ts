import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProfileComponent } from './profile.component';
import { SkillsComponent } from './skills/skills.component';
import { PanelModule } from 'primeng/panel';
import { ExperienceComponent } from './experience/experience.component';
import { DividerModule } from 'primeng/divider';



@NgModule({
  declarations: [
    ExperiencesComponent,
    ProfileComponent,
    SkillsComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    DividerModule
]
})
export class ProfileModule { }
