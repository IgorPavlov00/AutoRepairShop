import { Component } from '@angular/core';
import {ScrollService} from "../scroll.service";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  constructor(private scrollService: ScrollService) {}

  scrollToServices(): void {
    this.scrollService.scrollTo('services');
  }
  scrollToHome(): void {
    this.scrollService.scrollTo('home');
  }
  scrollToAbout() {
    this.scrollService.scrollTo('feature');
  }
  scrollToLocation() {
    this.scrollService.scrollTo('location');
  }
}
