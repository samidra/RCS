import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  constructor(private router: Router, private title: Title) {
    this.title.setTitle('RCS Engineering | About Us')
  }
  route_to_page(page_name: any) {
    this.router.navigate([page_name]);
    window.scrollTo(0, 0);
  }
}
