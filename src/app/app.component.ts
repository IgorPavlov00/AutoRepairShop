import { Component } from '@angular/core';
import {ScrollService} from "./scroll.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Auto Repair Shop';

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    this.scrollService.scrollToSection$.subscribe((targetId: string) => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}
