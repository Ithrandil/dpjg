import { ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IBasicProfileInformations} from "../../domain/IBasicProfileInformations";
import {ISocialNetwork, socialNetwork} from "../../domain/ISocialNetwork";

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileHeaderComponent implements OnInit {
  @Input()profileInfos!: IBasicProfileInformations;
  @Input()socialNetworks!: ISocialNetwork[];
  public mailTo: string = 'mailto:';
  public telTo: string = 'tel:';

  public phoneNumber: string = '';
  private SOCIAL_NETWORK = socialNetwork;

  ngOnInit() {
    this.mailTo += this.profileInfos.email;
    this.telTo += this.profileInfos.phoneNumber;
    this.phoneNumber = this.profileInfos.phoneNumber.replace(/\B(?=(\d{2})+(?!\d))/g, " ");
  }

  socialNetworkClass(network : socialNetwork |string) {
    const isAKnownSocialNetwork = Object.keys(this.SOCIAL_NETWORK).find(el => el === network.toUpperCase());
    if(isAKnownSocialNetwork) {
      return `pi pi-${network.toLocaleLowerCase()}  mr-2`;
    }
    else return 'pi pi-user mr-2'
  }
}
