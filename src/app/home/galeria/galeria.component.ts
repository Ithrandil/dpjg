import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
  images: any[] = [];
  responsiveOptions: any[] = [];
  ngOnInit() {
    this.images = [
      {
        itemImageSrc: '../../assets/galleria/maison1.jpg',
        alt: 'Description for Image 1',
      },
      {
        itemImageSrc: '../../assets/galleria/maison2.jpg',
        alt: 'Description for Image 1',
      },
      {
        itemImageSrc: '../../assets/galleria/maison3.jpg',
        alt: 'Description for Image 1',
      },
      {
        itemImageSrc: '../../assets/galleria/Coupe.jpg',
        alt: 'Description for Image 1',
      },
      {
        itemImageSrc: '../../assets/galleria/maison_mamie.jpg',
        alt: 'Description for Image 1',
      },
      {
        itemImageSrc: '../../assets/galleria/pouet.jpg',
        alt: 'Description for Image 1',
      },
    ];
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }
}
