import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-digital-engineering',
  imports: [],
  templateUrl: './digital-engineering.component.html',
  styleUrl: './digital-engineering.component.scss'
})
export class DigitalEngineeringComponent {

  constructor(private router: Router,) { }
  route_to_page(page_name: any) {
    this.router.navigate([page_name]);
    window.scrollTo(0, 0);
  }

}
