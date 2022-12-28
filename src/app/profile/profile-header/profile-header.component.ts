import { ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IBasicProfileInformations} from "../../domain/IBasicProfileInformations";

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileHeaderComponent implements OnInit {
  @Input()profileInfos!: IBasicProfileInformations;
  public mailTo: string = 'mailto:';
  public telTo: string = 'tel:';

  public phoneNumber: string = '';

  ngOnInit() {
    this.mailTo += this.profileInfos.email;
    this.telTo += this.profileInfos.phoneNumber;
    this.phoneNumber = this.profileInfos.phoneNumber.replace(/\B(?=(\d{2})+(?!\d))/g, " ")
  }

}
