import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MenuItem, PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Accueil',
        icon: PrimeIcons.HOME,
        routerLink:['/']
      },
      {
        label: 'Mes compétences',
        icon: PrimeIcons.BOOK,
        routerLink:['/profil']
      },
      {
        label: 'Vous êtes un(e)...',
        icon: PrimeIcons.LIST,
        items: [
          {
            label: 'entreprise de gros oeuvre',
            icon: PrimeIcons.TRUCK,
            routerLink:['/']
          },
          {
            label: 'agence immo / syndic de copro',
            icon: PrimeIcons.BRIEFCASE,
            routerLink:['/']
          },
          {
            label: 'cabinet d\'architecte',
            icon: PrimeIcons.HOME,
            routerLink:['/']
          },
          {
            label: 'bureau d\'étude',
            icon: PrimeIcons.MAP,
            routerLink:['/']
          },
          {
            label: 'municipalité / collectivité',
            icon: PrimeIcons.USERS,
            routerLink:['/']
          },
        ]
      },
      {
        label: 'Me contacter',
        icon: `${PrimeIcons.ID_CARD} my-margin-left`,
        routerLink:['/contact']
      },
    ];
  }

}
