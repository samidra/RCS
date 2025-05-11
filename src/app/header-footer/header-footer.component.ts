import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header-footer',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './header-footer.component.html',
  styleUrl: './header-footer.component.scss'
})
export class HeaderFooterComponent {

  isScrolled = false;
  enquiry_form: any
  @ViewChild('smallMenu') smallMenu!: ElementRef;

  constructor(private router: Router,){  }

 @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (this.show_small_menu && this.smallMenu && !this.smallMenu.nativeElement.contains(event.target)) {
      this.show_small_menu = false;
    }
  }

  show_small_menu = false
  toggleNav() {
    this.show_small_menu = !this.show_small_menu
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  route_to_page(page_name:any) {
    this.router.navigate([page_name]);
    window.scrollTo(0, 0);

    if(this.show_small_menu){
      this.show_small_menu = false
    }
  }

  scroll_top(){
    window.scrollTo(0, 0);
  }
}
