import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Experience} from "../../domain/IExperience";


@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencesComponent {
  // TODO: A EXPORTER DANS UNE COUCHE EXTERNE EN PASSANT PAR DES PORT POUR FAIRE DU CLEAN ARCHI
  public experiences: Experience[] = [
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
  ];
}
