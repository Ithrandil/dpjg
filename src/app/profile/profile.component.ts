import { ChangeDetectionStrategy, Component } from '@angular/core';
import {IProfile} from "../domain/IProfile";
import {socialNetwork} from "../domain/ISocialNetwork";

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
      yearsOfExperience: 7,
      profilePicUrl: 'assets/profile/profilePicture.jpg',
      location: 'Vendôme'
    },
    summary:`Je suis dessinateur projeteur dans le bâtiment, que ce soit pour un particulier ou un professionnel.<br><br>
      Je travaille depuis des années sur les logiciels AUTOCAD et EASYKUTCH pour des appels d'offre.<br><br>
      Les gros projets de bâtiments sont toujours sur plusieurs mois, ce qui implique un investissement tout du long. Connaissant le processus allant de l'implantation par un géomètre jusqu'à la remise du bâtiment au client. Je connais la communication à avoir avec la mairie, l'entourage, les problématiques de chantier propre, les validations des produits...
      <br><br>Je suis capable de vous accompagner pour tous vos projets.`,
    socialNetworks:[
      {
        type: socialNetwork.LINKEDIN,
        url: "",
        wording: "Linkedin"
      }
    ],
    skills: [
      {
        name: 'AutoCAD',
        level: 3
      },
      {
        name: 'DAO',
        level: 3
      },
      {
        name: 'Bâtiment',
        level: 3
      },
      {
        name: 'EasyKutch',
        level: 3
      },
      {
        name: 'Gestion de projet',
        level: 2
      },
      {
        name: 'Métreur',
        level: 2
      },
      {
        name: 'CAO',
        level: 2
      },
      {
        name: 'Sketchup',
        level: 1
      },
      {
        name: 'EBP',
        level: 1
      },
      {
        name: 'Suivi de chantier',
        level: 3
      },
    ],
    experiences: [
      {
        company: 'Société Parisienne de Construction',
        companyDomain: 'BTP & construction',
        jobTitle: 'Dessinateur projeteur',
        description: 'Dessinateur projeteur en entreprise de gros œuvre pour appels d’offre et organisation,\n' +
          'coordination avec architectes, des documents, plans d’exécution de chantier, et synthèse de plans corps\n' +
          'd’état secondaires.',
        location: 'Pontault-Combault (75)',
        date: 'juin 2020 - novembre 2022 (2 ans et 4 mois)'
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
        companyDomain: 'Immobilier',
        jobTitle: 'Technicien projeteur',
        description: 'Appuis techniques dans les bâtiments nucléaire. Suivi technique peau composite, transport et tir de détection de plomb, assistance logistique équipe commune, repérage trémie EPR, création et rédaction de gamme de suivi de bâtiment nucléaire',
        location: 'Blaye (33)',
        date: 'juillet 2014 - février 2018 (3 ans et 7 mois)'
      },
    ],
    schoolCurriculum: [
      {
        diplomaName: 'DUT Génie Civil option Maîtrise énergétique et environnementale',
        schoolName: 'IUT Gradignan',
        dateObtained: '2014',
        description: 'La spécialisation Maîtrise énergétique et environnementale permet de se spécialiser dans la construction durable. Elle permet de maitriser l’ensemble des techniques de construction, des fondations et des structures, la gestion de projet, la conduite d’équipe et les enjeux sociaux, économiques et juridiques du secteur de l’environnement pour concevoir des bâtiments durables et respectueux de l’environnement.'
      },
    ],
  }
}
