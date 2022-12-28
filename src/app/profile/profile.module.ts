import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProfileComponent } from './profile.component';
import { SkillsComponent } from './skills/skills.component';
import { PanelModule } from 'primeng/panel';
import { ExperienceComponent } from './experience/experience.component';
import { DividerModule } from 'primeng/divider';
import { SummaryComponent } from './summary/summary.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { SchoolCurriculumComponent } from './school-curriculum/school-curriculum.component';
import { SchoolComponent } from './school/school.component';



@NgModule({
  declarations: [
    ExperiencesComponent,
    ProfileComponent,
    SkillsComponent,
    ExperienceComponent,
    SummaryComponent,
    ProfileHeaderComponent,
    SchoolCurriculumComponent,
    SchoolComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    DividerModule,
]
})
export class ProfileModule { }
