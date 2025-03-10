import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-software-engineering',
  imports: [],
  templateUrl: './software-engineering.component.html',
  styleUrl: './software-engineering.component.scss'
})
export class SoftwareEngineeringComponent {

  constructor(private router: Router,) { }
    route_to_page(page_name: any) {
      this.router.navigate([page_name]);
      window.scrollTo(0, 0);
    }
    
}
