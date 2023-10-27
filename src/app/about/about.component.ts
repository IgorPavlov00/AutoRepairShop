import {Component, ElementRef, HostListener, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @ViewChild('featureSection') featureSection!: ElementRef;


  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const position = this.featureSection.nativeElement.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight) {
      this.renderer.addClass(this.featureSection.nativeElement, 'show');
    }
  }
}
