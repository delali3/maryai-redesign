import { Component, AfterViewInit, ElementRef, Renderer2, ViewChildren, QueryList, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.css']
})
export class FocusComponent implements AfterViewInit {

  @ViewChildren('focusLeftPanel') focusLeftPanels!: QueryList<ElementRef>;
  @ViewChildren('focusRightPanel') focusRightPanels!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, 'in-view');
          } else {
            this.renderer.removeClass(entry.target, 'in-view');
          }
        });
      });

      this.focusLeftPanels.forEach(panel => {
        observer.observe(panel.nativeElement);
      });

      this.focusRightPanels.forEach(panel => {
        observer.observe(panel.nativeElement);
      });
    }
  }
}
