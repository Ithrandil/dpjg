import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IExperience} from "../../domain/IExperience";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  @Input() experience!: IExperience;

}
