import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-career',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {
  career_form: any

  constructor(private fb:FormBuilder){
    this.career_form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^\\+?[1-9]\\d{1,14}$')]],
      message: ['', [Validators.required]],
      resume: [null, [Validators.required]]
    }) as FormGroup

  }

  get firstName(){
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

  get message() {
    return this.career_form.get('message');
  }

  get resume() {
    return this.career_form.get('resume');
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.career_form.patchValue({
        resume: file
      });
      this.career_form.get('resume')?.updateValueAndValidity();
    }
  }

  onSubmit() {
    if (this.career_form.valid) {
      const body = {
        firstName: this.firstName.value,  // Access the value of the form control
        lastName: this.lastName.value,
        email: this.email.value,
        phone: this.phone.value
      }
      console.log('Form Submitted!', body);
      
    } else {
      this.career_form.markAllAsTouched(); // Marks all fields to show validation errors
    }
  }
}
