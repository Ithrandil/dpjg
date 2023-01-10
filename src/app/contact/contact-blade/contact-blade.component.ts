import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IBasicProfileInformations} from "../../domain/IBasicProfileInformations";
import {ISocialNetwork, socialNetwork} from "../../domain/ISocialNetwork";

@Component({
  selector: 'app-contact-blade',
  templateUrl: './contact-blade.component.html',
  styleUrls: ['./contact-blade.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactBladeComponent implements OnInit {
  @Input()contactInfos!: IBasicProfileInformations;
  @Input()socialNetworks!: ISocialNetwork[];
  public mailTo: string = 'mailto:';
  public telTo: string = 'tel:';
  public phoneNumber: string = '';
  private SOCIAL_NETWORK = socialNetwork;

  ngOnInit() {
    this.mailTo += this.contactInfos.email;
    this.telTo += this.contactInfos.phoneNumber;
    this.phoneNumber = this.contactInfos.phoneNumber.replace(/\B(?=(\d{2})+(?!\d))/g, " ");
  }

  socialNetworkClass(network : socialNetwork |string) {
    const isAKnownSocialNetwork = Object.keys(this.SOCIAL_NETWORK).find(el => el === network.toUpperCase());
    if(isAKnownSocialNetwork) {
      return `pi pi-${network.toLocaleLowerCase()}  mr-2`;
    }
    else return 'pi pi-user mr-2'
  }
}
