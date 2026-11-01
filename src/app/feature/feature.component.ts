import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
})
export class FeatureComponent {
  readonly items = [
    { title: 'Profesionalan servis', text: 'Nudimo vrhunsku uslugu popravke vaših vozila s dugogodišnjim iskustvom.' },
    { title: 'Vrhunski majstori', text: 'Iskusni majstori brinu se za vaše vozilo s vrhunskom pažnjom i veštinom.' },
    { title: 'Na vreme', text: 'Brzina i tačnost su naš zaštitni znak jer uvek stižemo na vreme.' },
  ];
}
