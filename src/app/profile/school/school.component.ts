import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ISchoolCurriculum} from "../../domain/ISchoolCurriculum";

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchoolComponent {

  @Input()school!: ISchoolCurriculum;

}
