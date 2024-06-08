
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  items = [
    {
      imageUrl: "assets/images/foundation-model-thumbnail.png",
      title: "FOUNDATION MODEL FOR RADIOLOGY",
      description: "RESEARCH & DEVELOPMENT"
    },
    {
      imageUrl: "assets/images/foundation-model-thumbnail.png",
      title: "UNITED NATIONS GLOBAL INITIATIVE ON AI FOR HEALTH (GI-AI4H)",
      description: "REGULATIONS & STANDARDS"
    },
    {
      imageUrl: "assets/images/llama-thumbnail.jpg",
      title: "LLAMA (LARGE LANGUAGE MODEL META AI 2)",
      description: "PARTNERSHIP"
    },
    {
      imageUrl: "assets/images/foundation-model-thumbnail.png",
      title: "UNITED NATIONS GLOBAL INITIATIVE ON AI FOR HEALTH (GI-AI4H)",
      description: "REGULATIONS & STANDARDS"
    },
    {
      imageUrl: "assets/images/llama-thumbnail.jpg",
      title: "LLAMA (LARGE LANGUAGE MODEL META AI 2)",
      description: "PARTNERSHIP"
    },
    {
      imageUrl: "assets/images/foundation-model-thumbnail.png",
      title: "UNITED NATIONS GLOBAL INITIATIVE ON AI FOR HEALTH (GI-AI4H)",
      description: "REGULATIONS & STANDARDS"
    },
    {
      imageUrl: "assets/images/llama-thumbnail.jpg",
      title: "LLAMA (LARGE LANGUAGE MODEL META AI 2)",
      description: "PARTNERSHIP"
    },
    {
      imageUrl: "assets/images/foundation-model-thumbnail.png",
      title: "UNITED NATIONS GLOBAL INITIATIVE ON AI FOR HEALTH (GI-AI4H)",
      description: "REGULATIONS & STANDARDS"
    },
    {
      imageUrl: "assets/images/llama-thumbnail.jpg",
      title: "LLAMA (LARGE LANGUAGE MODEL META AI 2)",
      description: "PARTNERSHIP"
    }
    // Add more items as needed
  ];

  selectedItem: any; // Declaration of the selectedItem property

  @ViewChild('carousel') private carousel!: ElementRef;

  openModal(item: any) {
    this.selectedItem = item;
    ($('#portfolioModal') as any).modal('show');
  }

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
