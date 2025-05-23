import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  enquiry_form: any

  constructor(private router: Router, private fb: FormBuilder, private title: Title) {
    this.title.setTitle('RCS Engineering | Contact Us')

    this.enquiry_form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^\\+?[1-9]\\d{1,14}$')]],
      message: ['', [Validators.required]]
    }) as FormGroup

  }

  get firstName() {
    return this.enquiry_form.get('firstName');
  }

  get lastName() {
    return this.enquiry_form.get('lastName');
  }

  get email() {
    return this.enquiry_form.get('email');
  }

  get phone() {
    return this.enquiry_form.get('phone');
  }

  get message() {
    return this.enquiry_form.get('message');
  }

  onSubmit() {
    if (this.enquiry_form.valid) {
      const body = {
        firstName: this.firstName.value,  // Access the value of the form control
        lastName: this.lastName.value,
        email: this.email.value,
        phone: this.phone.value
      }
      console.log('Form Submitted!', body);

    } else {
      this.enquiry_form.markAllAsTouched(); // Marks all fields to show validation errors
    }
  }

  route_to_page(page_name: any) {
    this.router.navigate([page_name]);
    window.scrollTo(0, 0);
  }
}
