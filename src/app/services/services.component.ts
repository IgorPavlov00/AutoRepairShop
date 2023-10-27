import {Component, Renderer2, ElementRef, ViewChild, HostListener} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  constructor(private el: ElementRef, private router: Router, private renderer: Renderer2) { }



  scrollToServices(): void {
    const targetId = 'services'; // This should be the ID of the HTML element you want to scroll to
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


  @ViewChild('featureSection') featureSection!: ElementRef;




  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const position = this.featureSection.nativeElement.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight) {
      this.renderer.addClass(this.featureSection.nativeElement, 'show');
    }
  }
}
