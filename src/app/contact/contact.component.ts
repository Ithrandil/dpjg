import { ChangeDetectionStrategy, Component } from '@angular/core';
import {IBasicProfileInformations} from "../domain/IBasicProfileInformations";
import {ISocialNetwork, socialNetwork} from "../domain/ISocialNetwork";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  // TODO: refacto pour avoir q'un seul objet global
  public contactInfos: IBasicProfileInformations = {
    firstName: 'Julien',
    lastName: 'Guérin',
    email: 'julien.guerin.dp41@gmail.com',
    phoneNumber: '0643060287',
    jobName: 'Dessinateur projeteur',
    yearsOfExperience: 7,
    profilePicUrl: 'assets/profile/profilePicture.jpg',
    location: 'Vendôme'
  }

  public socialNetworks: ISocialNetwork[] = [
    {
      type: socialNetwork.LINKEDIN,
      url: "",
      wording: "Linkedin"
    }
  ];
}
