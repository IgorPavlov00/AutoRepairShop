import {Component, ViewChild} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ServicesComponent} from "../services/services.component";
import {ScrollService} from "../scroll.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

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
