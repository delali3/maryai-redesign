import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit, OnDestroy {
  @ViewChild('bgImgRef') bgImgRef!: ElementRef;
  @ViewChild('footerRef') footerRef!: ElementRef;
  @ViewChild('collaboratorsRef') collaboratorsRef!: ElementRef;
  @ViewChild('headingRef') headingRef!: ElementRef;

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    this.setupAnimations();
  }

  ngOnDestroy(): void {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }

  private setupAnimations() {
    // Background image scale animation
    if (this.bgImgRef.nativeElement) {
      gsap.fromTo(this.bgImgRef.nativeElement,
        { scale: 2 },
        {
          scrollTrigger: {
            trigger: this.footerRef.nativeElement,
            start: "top bottom",
            scrub: 0.75
          },
          scale: 1,
        }
      );
    }

    // Collaborators images move to the left and right based on scroll
    if (this.collaboratorsRef.nativeElement) {
      gsap.to(this.collaboratorsRef.nativeElement.querySelectorAll('img'), {
        scrollTrigger: {
          trigger: this.footerRef.nativeElement,
          start: "top bottom", // Animation starts when top of footer hits bottom of viewport
          end: "bottom top",   // Animation ends when bottom of footer leaves top of viewport
          scrub: true,         // Smooth transition linked to scroll position
          markers: false,       // Shows start and end points (for debugging)
        },
        xPercent: -100,        // Move images to the left by 100% of their width
        ease: "none",          // Linear animation for uniform motion
        toggleActions: "play reverse play reverse"  // Actions on scroll up and down
      });
    }
  }
}
