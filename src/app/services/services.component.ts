import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  readonly services = [
    {
      title: 'Farbanje vozila',
      text: 'Farbanje radimo samo sa najkvalitetnijim bojama, kao i pratećim materijalom.',
      image: 'painting',
      alt: 'Lakirer nanosi boju na crveni automobil',
    },
    {
      title: 'Krpljenje vozila',
      text: 'Zaštita automobila od korozije.',
      image: 'panel-beating',
      alt: 'Majstor ispravlja lim na karoseriji automobila',
    },
    {
      title: 'Tektiranje vozila',
      text: 'Zaštitu automobila od korozije radimo sa „body“ programom.',
      image: 'undercoating',
      alt: 'Zaštićeni donji stroj vozila',
    },
    {
      title: 'Poliranje vozila',
      text: 'Uklanjanje sitnih ogrebotina i obnova sjaja i estetike vašeg automobila.',
      image: 'polishing',
      alt: 'Poliranje haube srebrnog automobila',
    },
    {
      title: 'Plastičarske usluge',
      text: 'Vršimo sve vrste plastičarskih usluga, uz najsavremenije alate i opremu.',
      image: 'plastic',
      alt: 'Popravka plastičnog branika automobila',
    },
    {
      title: 'Nabavka delova',
      text: 'Naručujemo nove i polovne delove od naših dobavljača.',
      image: 'parts',
      alt: 'Delovi automobila složeni na podu',
    },
  ];
}
