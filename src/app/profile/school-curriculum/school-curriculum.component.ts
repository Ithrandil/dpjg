import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ISchoolCurriculum} from "../../domain/ISchoolCurriculum";

@Component({
  selector: 'app-school-curriculum',
  templateUrl: './school-curriculum.component.html',
  styleUrls: ['./school-curriculum.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchoolCurriculumComponent {

  @Input()schoolCurriculum!: ISchoolCurriculum[];

}
