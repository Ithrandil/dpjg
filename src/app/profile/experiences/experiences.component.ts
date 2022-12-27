import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IExperience} from "../../domain/IExperience";


@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencesComponent {
  @Input()experiences: IExperience[] = [];

}
