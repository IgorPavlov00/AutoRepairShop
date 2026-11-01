import { Component } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent {
  readonly steps = [
    { title: 'Opišite problem', text: 'Jednostavno opišite problem sa vozilom, odaberite tip kvara.' },
    { title: 'Dobijanje ponude', text: 'Primite ponudu sa cenom i vremenom popravke na email.' },
    { title: 'Zakažite popravku', text: 'Izaberite termin koji vam odgovara za popravku vozila.' },
    { title: 'Ocenite uslugu', text: 'Ocenite našu uslugu kako bismo uvek bili bolji.' },
  ];
}
