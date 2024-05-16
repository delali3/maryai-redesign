// File: visible.directive.ts
import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appVisible]'
})
export class VisibleDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('visible-step');
        } else {
          this.el.nativeElement.classList.remove('visible-step');
        }
      });
    }, {
      root: null,
      threshold: 0.1
    });

    observer.observe(this.el.nativeElement);
  }
}
