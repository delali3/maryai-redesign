import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('collaboratorsRef') collaboratorsRef!: ElementRef;

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    this.setupAnimations();
  }

  ngOnDestroy(): void {
    ScrollTrigger!.getAll().forEach(trigger => trigger.kill());
  }

  private setupAnimations() {
    if (this.collaboratorsRef.nativeElement) {
      const images = this.collaboratorsRef.nativeElement.querySelectorAll('img');
      images.forEach((img: HTMLElement) => {
        gsap.to(img, {
          scrollTrigger: {
            trigger: this.collaboratorsRef.nativeElement,
            start: "top bottom", // Animation starts when top of section hits bottom of viewport
            end: "bottom top",   // Animation ends when bottom of section leaves top of viewport
            scrub: true,         // Smooth transition linked to scroll position
            markers: false,      // Hide markers (used for debugging)
          },
          xPercent: -100,        // Move images to the left by 100% of their width
          ease: "none",          // Linear animation for uniform motion
          toggleActions: "play reverse play reverse"  // Actions on scroll up and down
        });
      });
    }
  }
}
