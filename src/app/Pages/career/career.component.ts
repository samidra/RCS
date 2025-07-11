import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../Services/Api/api.service';
import { CommonServiceService } from '../../Services/Common/common-service.service';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-career',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {
  career_form: any

  constructor(private api_service: ApiService,
    private common_service: CommonServiceService,
    private fb: FormBuilder, private title: Title) {
    this.career_form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^\\+?[1-9]\\d{1,14}$')]],
      postion_role: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      // resume: [null, [Validators.required]]
    }) as FormGroup

    this.title.setTitle('RCS Engineering | Careers')
  }

  get firstName() {
    return this.career_form.get('firstName');
  }

  get lastName() {
    return this.career_form.get('lastName');
  }

  get email() {
    return this.career_form.get('email');
  }

  get phone() {
    return this.career_form.get('phone');
  }

  get postion_role() {
    return this.career_form.get('postion_role');
  }

  // get resume() {
  //   return this.career_form.get('resume');
  // }

  // onFileChange(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files && input.files.length > 0) {
  //     const file = input.files[0];
  //     this.career_form.patchValue({
  //       resume: file
  //     });
  //     this.career_form.get('resume')?.updateValueAndValidity();
  //   }
  // }

  Is_load: boolean = false
  onSubmit() {
    if (this.career_form.valid) {
      this.Is_load = true

      const body = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        email: this.email.value,
        phone: this.phone.value,
        postion_role: this.postion_role.value
      }

      emailjs.send(
        'service_5dlvvnj',
        'template_bn0v7co',
        body,
        '7CKMbRHH-FmvPGu22'
      ).then((result) => {
        this.Is_load = false;
        this.common_service.displaySuccess('Submission successful. You will hear from us soon.');
        this.career_form.reset();
      }).catch((error) => {
        this.Is_load = false;
        this.common_service.displayWarning('Submission failed. Please try again later.');
        console.error('EmailJS error:', error);
      });

      // const formData = new FormData();
      // formData.append('firstName', this.firstName.value);
      // formData.append('lastName', this.lastName.value);
      // formData.append('email', this.email.value);
      // formData.append('phone', this.phone.value);
      // formData.append('resume', this.resume.value);
      // this.api_service.career_form(formData).subscribe((res: any) => {
      //   if (res.status) {
      //     this.Is_load = false
      //     this.common_service.displaySuccess('Submission successful. You will hear from us soon.')
      //     this.career_form.reset()
      //   } else {
      //     this.Is_load = false
      //     this.common_service.displayWarning('Please try again after sometime.')
      //   }
      // })

    } else {
      this.career_form.markAllAsTouched(); // Marks all fields to show validation errors
    }
  }
}
