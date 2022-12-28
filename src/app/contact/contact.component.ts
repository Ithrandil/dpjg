import { ChangeDetectionStrategy, Component } from '@angular/core';
import {IBasicProfileInformations} from "../domain/IBasicProfileInformations";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  public contactInfos: IBasicProfileInformations = {
    firstName: 'Julien',
    lastName: 'Guérin',
    email: 'julien.guerin.dp41@gmail.com',
    phoneNumber: '0643060287',
    jobName: 'Dessinateur projeteur',
    yearsOfExperience: 5,
    profilePicUrl: 'assets/profile/profilePicture.jpg',
    location: 'Vendôme'
  }
}
