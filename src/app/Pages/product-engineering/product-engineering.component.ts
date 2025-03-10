import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-engineering',
  imports: [],
  templateUrl: './product-engineering.component.html',
  styleUrl: './product-engineering.component.scss'
})
export class ProductEngineeringComponent {

    constructor(private router: Router,) { }
    route_to_page(page_name: any) {
      this.router.navigate([page_name]);
      window.scrollTo(0, 0);
    }
    
}
