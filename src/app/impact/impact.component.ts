import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-impact',
  templateUrl: './impact.component.html',
  styleUrl: './impact.component.css'
})
export class ImpactComponent {

  items = [
    {
      imageUrl: "assets/images/Felix-Davis-microclinics-dartmouth.jpg",
      title: "Felix Davis ’26 Develops Microclinics for Rural Ghana",
      description: "RESEARCH & DEVELOPMENT",
      link: "https://home.dartmouth.edu/news/2024/10/felix-davis-26-develops-microclinics-rural-ghana/"
    },
    {
      imageUrl: "assets/images/grants.jpeg",
      title: "DartUp Social Blueprint Challenge",
      description: "RESEARCH & DEVELOPMENT",
      link: "https://magnuson.dartmouth.edu/grants-support-nine-start-ups-with-nearly-20000-in-funding/"
    },
    {
      imageUrl: "assets/images/sidebyside.png",
      title: "MGH partners with Claron Health International ahead of piloting",
      description: "PARTNERSHIP",
      link: "https://magnuson.dartmouth.edu/grants-support-nine-start-ups-with-nearly-20000-in-funding/"
    },
    {
      imageUrl: "assets/images/felixddavis.jpg",
      title: "MGH raises $3,000 grant to support feasibility studies",
      description: "PARTNERSHIP",
      link: "https://magnuson.dartmouth.edu/grants-support-nine-start-ups-with-nearly-20000-in-funding/"
    }
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
