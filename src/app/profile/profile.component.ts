import { ChangeDetectionStrategy, Component } from '@angular/core';
import {IProfile} from "../domain/IProfile";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  // TODO: A EXPORTER DANS UNE COUCHE EXTERNE EN PASSANT PAR DES PORT POUR FAIRE DU CLEAN ARCHI
  public profile: IProfile = {
    basicProfileInformations: {
      firstName: 'Julien',
      lastName: 'Guérin',
      email: 'julien.guerin.dp41@gmail.com',
      phoneNumber: '0643060287',
      jobName: 'Dessinateur projeteur',
      yearsOfExperience: 5,
      profilePicUrl: 'assets/profile/profilePicture.jpg',
      location: 'Vendôme'
    },
    summary:`Je suis dessinateur projeteur dans le bâtiment, que ce soit pour un particulier ou un professionnel.<br><br>
      Je travaille depuis des années sur les logiciels AUTOCAD et EASYKUTCH pour des appels d'offre.<br><br>
      Les gros projets de bâtiments sont toujours sur plusieurs mois, ce qui implique un investissement tout du long. Connaissant le processus allant de l'implantation par un géomètre jusqu'à la remise du bâtiment au client. Je connais la communication à avoir avec la mairie, l'entourage, les problématiques de chantier propre, les validations des produits...
      <br><br>Je suis capable de vous accompagner pour tout vos projets.`,
    experiences: [
      {
        company: 'Nom de ta boite à Paris',
        companyDomain: 'Je sais pas',
        jobTitle: 'Dessinateur projeteur',
        description: 'Dessinateur projeteur en entreprise de gros œuvre pour appels d’offre et organisation,\n' +
          'coordination avec architectes, des documents, plans d’exécution de chantier, et synthèse de plans corps\n' +
          'd’état secondaires.',
        location: 'Paris (75)',
        date: '2020-2022 (2 ans)'
      },
      {
        company: 'SARL Les Verdiers',
        companyDomain: 'BTP',
        jobTitle: 'Coordinateur de chantier',
        description: 'Coordination de chantier de maisons individuelles SARL Les Verdiers',
        location: 'Saint Jean d\'Angely (17)',
        date: '2019-2020 (2 ans)'
      },
      {
        company: 'SOCOTEC',
        companyDomain: 'Nucléaire?',
        jobTitle: 'Technicien projeteur',
        description: 'Suivi technique peau composite, transport et tir de détection de plomb, assistance logistique équipe commune, repérage trémie EPR, création et rédaction de gamme de suivi de bâtiment nucléaire',
        location: 'Blaye (33?)',
        date: '2014-2018 (4 ans)'
      },
    ]
  }
}
