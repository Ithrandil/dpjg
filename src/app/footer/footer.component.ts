import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

// @ts-ignore
import packageInfo from '../../../package.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  constructor(public router: Router) {
  }
  public webSiteVersion = packageInfo.version;

}
