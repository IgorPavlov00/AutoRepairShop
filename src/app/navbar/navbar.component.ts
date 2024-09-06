import { Component } from '@angular/core';
import { ScrollService } from "../scroll.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isMenuOpen = false;  // To control menu visibility on smaller screens

  constructor(private scrollService: ScrollService) {}

  scrollToHome(): void {
    this.scrollService.scrollTo('home');
    this.isMenuOpen = false;  // Close menu after clicking
  }

  scrollToAbout(): void {
    this.scrollService.scrollTo('feature');
    this.isMenuOpen = false;
  }

  scrollToServices(): void {
    this.scrollService.scrollTo('services');
    this.isMenuOpen = false;
  }

  scrollToLocation(): void {
    this.scrollService.scrollTo('location');
    this.isMenuOpen = false;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;  // Toggle the menu visibility
  }
}
