import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulting',
  imports: [],
  templateUrl: './consulting.component.html',
  styleUrl: './consulting.component.scss'
})
export class ConsultingComponent {

  constructor(private router: Router, private title: Title) {
    this.title.setTitle('RCS Engineering | Consulting')
  }
  route_to_page(page_name: any) {
    this.router.navigate([page_name]);
    window.scrollTo(0, 0);
  }

}
