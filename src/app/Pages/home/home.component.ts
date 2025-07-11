import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  images = [

    {
      heading: 'Your Trusted Partner for Engineering <br> and Digital Transformation',
      path: 'assets/Carousel/slide 11.webp',
      para: 'Reimagining Future through Innovation',
      alt: 'Your Trusted Partner',
    },
    {
      heading: 'Success Factors',
      path: 'assets/Carousel/slide 22.webp',
      para: 'Domain Expertise & Delivery Excellence ',
      alt: 'Success Factors',
    },
    {
      heading: 'Sustainable Development',
      path: 'assets/Carousel/slide 33.webp',
      para: 'Striving for Better Tomorrow',
      alt: 'Sustainable Development',
    },
    
  ];

  trackByFn(index: number, item: any): number {
  return index;
}

  constructor(private router: Router){}

  route_to_page(page_name: any) {
    this.router.navigate([page_name]);
    window.scrollTo(0, 0);
  }
}


