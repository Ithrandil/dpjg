import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-template-prospect',
  templateUrl: './template-prospect.component.html',
  styleUrls: ['./template-prospect.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateProspectComponent {
  @Input()title: string = '';
}
