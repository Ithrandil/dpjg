import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
   summary = `Je suis dessinateur projeteur dans le bâtiment, que ce soit pour un particulier ou un professionnel.<br><br>
      Je travaille depuis des années sur les logiciels AUTOCAD et EASYKUTCH pour des appels d'offre.<br><br>
      Les gros projets de bâtiments sont toujours sur plusieurs mois, ce qui implique un investissement tout du long. Connaissant le processus allant de l'implantation par un géomètre jusqu'à la remise du bâtiment au client. Je connais la communication à avoir avec la mairie, l'entourage, les problématiques de chantier propre, les validations des produits...
      <br><br>Je suis capable de vous accompagner pour tous vos projets.`

}
