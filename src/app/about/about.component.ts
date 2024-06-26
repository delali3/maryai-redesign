import { Component, ElementRef, AfterViewInit, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('count1', { static: false }) count1!: ElementRef;
  @ViewChild('count2', { static: false }) count2!: ElementRef;
  @ViewChild('count3', { static: false }) count3!: ElementRef;

  private observer!: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId) && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.startCounting(entry.target);
            this.observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      this.observer.observe(this.count1.nativeElement);
      this.observer.observe(this.count2.nativeElement);
      this.observer.observe(this.count3.nativeElement);
    }
  }

  private startCounting(element: any) {
    const target = parseInt(element.getAttribute('data-target'), 10);
    let count = 0;
    const step = Math.ceil(target / 100);

    const counter = setInterval(() => {
      count += step;
      if (count > target) {
        count = target;
        clearInterval(counter);
      }
      element.textContent = count.toString();
    }, 80);
  }
}
