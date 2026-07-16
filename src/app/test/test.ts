import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-test',
  imports: [RouterLink, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test implements OnInit {
  userForm!: FormGroup;
  Validators = Validators;
  passwordMismatch: boolean = false;
  searchResults: string[] = [];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();

    this.getPassword()
      ?.valueChanges.pipe(takeUntilDestroyed())
      .subscribe((res: any) => {
        const confirm = this.getConfirmPassword();

        if (res) {
          confirm?.setValidators([Validators.required]);
          confirm?.enable();
        } else {
          confirm?.clearValidators();
          confirm?.disable();
        }

        confirm?.updateValueAndValidity();
      });
    this.getConfirmPassword()?.disable();
  }

  initializeForm() {
    this.userForm = this.fb.group(
      {
        name: ['', Validators.required],
        subscribe: [false],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: [''],
        age: [],
        drivingLicense: [],
        country: [],
        currency: [],
        search: [],
      },
      { validators: this.passwordMatchValidator },
    );
  }

  // Form Level Validator
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirm = form.get('confirmPassword')?.value;
    if (!password) return null;
    return password === confirm ? null : { mismatch: true };
  }

  getName() {
    return this.userForm.get('name');
  }

  getEmail() {
    return this.userForm.get('email');
  }

  getPassword() {
    return this.userForm.get('password');
  }

  getConfirmPassword() {
    return this.userForm.get('confirmPassword');
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }
  }
}
