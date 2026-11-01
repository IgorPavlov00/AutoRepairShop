import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';

/** Fades an element in the first time it scrolls into view. */
@Directive({ selector: '[appReveal]' })
export class RevealDirective implements OnInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const element = this.el.nativeElement;
    if (typeof IntersectionObserver === 'undefined') return;

    element.classList.add('reveal');
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('is-visible');
        this.observer?.disconnect();
      }
    }, { rootMargin: '0px 0px -8% 0px' });
    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
