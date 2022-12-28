import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ISkill} from "../../domain/ISkill";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent implements OnInit {
  @Input() skills: ISkill[] = [];
  public skillsTitle: string = 'Compétence';
  ngOnInit() {
    this.skillsTitle += this.skills.length > 1 ? `s (${this.skills.length})` : '';
  }

}
