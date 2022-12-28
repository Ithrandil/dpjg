import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IBasicProfileInformations} from "../../domain/IBasicProfileInformations";

@Component({
  selector: 'app-contact-blade',
  templateUrl: './contact-blade.component.html',
  styleUrls: ['./contact-blade.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactBladeComponent implements OnInit {
  @Input()contactInfos!: IBasicProfileInformations;
  public mailTo: string = 'mailto:';
  public telTo: string = 'tel:';
  public phoneNumber: string = '';

  ngOnInit() {
    this.mailTo += this.contactInfos.email;
    this.telTo += this.contactInfos.phoneNumber;
    this.phoneNumber = this.contactInfos.phoneNumber.replace(/\B(?=(\d{2})+(?!\d))/g, " ");
  }
}
