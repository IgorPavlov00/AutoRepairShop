import { Component } from '@angular/core';
import {ScrollService} from "../scroll.service";

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css']
})
export class HeroBannerComponent {
  constructor(private scrollService: ScrollService) {}
  scrollToAbout() {
    this.scrollService.scrollTo('feature');
  }
}
