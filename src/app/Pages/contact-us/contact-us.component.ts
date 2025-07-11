import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiService } from '../../Services/Api/api.service';
import { CommonServiceService } from '../../Services/Common/common-service.service';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  enquiry_form: any

  constructor(private api_service: ApiService,
    private common_service: CommonServiceService,
    private router: Router, private fb: FormBuilder, private title: Title) {
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

  Is_load: boolean = false
  onSubmit() {
    if (this.enquiry_form.valid) {
      this.Is_load = true
      const body = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        email: this.email.value,
        phone: this.phone.value,
        message: this.message.value
      }
      console.log(body)

       emailjs.send(
        'service_5dlvvnj',
        'template_k9fhay6',
        body,
        '7CKMbRHH-FmvPGu22'
      ).then((res) => {
        this.Is_load = false;
        this.common_service.displaySuccess('Submission successful. You will hear from us soon.');
        this.enquiry_form.reset();
      }).catch((err) => {
        this.Is_load = false;
        this.common_service.displayWarning('Please try again after sometime.');
        console.error('EmailJS Error:', err);
      });

      // this.api_service.contact_us(body).subscribe((res: any) => {
      //   console.log(res)
      //   if (res.status) {
      //     this.Is_load = false
      //     this.common_service.displaySuccess('Submission successful. You will hear from us soon.')
      //     this.enquiry_form.reset()
      //   } else {
      //     this.Is_load = false
      //     this.common_service.displayWarning('Please try again after sometime.')
      //   }
      // })
    } else {
      this.enquiry_form.markAllAsTouched(); // Marks all fields to show validation errors
    }
  }

  route_to_page(page_name: any) {
    this.router.navigate([page_name]);
    window.scrollTo(0, 0);
  }
}
