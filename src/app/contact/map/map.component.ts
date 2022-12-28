import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit{
  options: any;

  overlays!: any[];

  ngOnInit() {
    const myLatLng = new google.maps.LatLng(47.789570, 1.063660);
    this.options = {
      center: myLatLng,
      zoom: 17
    };

    this.overlays = [
      new google.maps.Marker({
        position: myLatLng,
        title:"Julien Guérin - Dessinateur-projeteur",
      }),

    ];
  }
}
