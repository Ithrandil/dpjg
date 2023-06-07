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
        itemImageSrc: '../../assets/galleria/Plan Beton_compressed_page-0001-min.jpg',
        alt: 'Description for Image 1',
      },{
        itemImageSrc: '../../assets/galleria/Plan Beton_compressed_page-0002-min.jpg',
        alt: 'Description for Image 1',
      },{
        itemImageSrc: '../../assets/galleria/Plan Beton_compressed_page-0003-min.jpg',
        alt: 'Description for Image 1',
      },{
        itemImageSrc: '../../assets/galleria/Plan Beton_compressed_page-0004-min.jpg',
        alt: 'Description for Image 1',
      },{
        itemImageSrc: '../../assets/galleria/Plan Beton_compressed_page-0005-min.jpg',
        alt: 'Description for Image 1',
      },{
        itemImageSrc: '../../assets/galleria/Plan Beton_compressed_page-0006-min.jpg',
        alt: 'Description for Image 1',
      },{
        itemImageSrc: '../../assets/galleria/Plan Beton_compressed_page-0007-min.jpg',
        alt: 'Description for Image 1',
      },{
        itemImageSrc: '../../assets/galleria/Plan Beton_compressed_page-0008-min.jpg',
        alt: 'Description for Image 1',
      },{
        itemImageSrc: '../../assets/galleria/Plan Beton_compressed_page-0009-min.jpg',
        alt: 'Description for Image 1',
      },{
        itemImageSrc: '../../assets/galleria/Plan Beton_compressed_page-0010-min.jpg',
        alt: 'Description for Image 1',
      },{
        itemImageSrc: '../../assets/galleria/Plan Beton_compressed_page-0011-min.jpg',
        alt: 'Description for Image 1',
      },{
        itemImageSrc: '../../assets/galleria/Plan Beton_compressed_page-0012-min.jpg',
        alt: 'Description for Image 1',
      },{
        itemImageSrc: '../../assets/galleria/Plan Beton_compressed_page-0013-min.jpg',
        alt: 'Description for Image 1',
      },{
        itemImageSrc: '../../assets/galleria/Plan Beton_compressed_page-0014-min.jpg',
        alt: 'Description for Image 1',
      },{
        itemImageSrc: '../../assets/galleria/Plan Beton_compressed_page-0015-min.jpg',
        alt: 'Description for Image 1',
      },
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
        itemImageSrc: '../../assets/galleria/maison_m.jpg',
        alt: 'Description for Image 1',
      },
      {
        itemImageSrc: '../../assets/galleria/maison_p.jpg',
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
