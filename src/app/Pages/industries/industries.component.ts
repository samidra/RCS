import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-industries',
  imports: [],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss'
})
export class IndustriesComponent {

  constructor(private router: Router, private title: Title) {
    this.title.setTitle('RCS Engineering | Industries')
  }
  route_to_page(page_name: any) {
    this.router.navigate([page_name]);
    window.scrollTo(0, 0);
  }

}
