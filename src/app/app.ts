import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  userForm!: FormGroup;
  Validators = Validators;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('Form is Online For submission');
    this.initializeForm();
  }
  initializeForm() {
    this.userForm = this.fb.group({
      fname: ['', Validators.required],
      lname: [''],
      email: ['', [Validators.required, Validators.email]],
      contact: [''],
    });
  }

  getfname() {
    return this.userForm.get('fname');
  }
  getlname() {
    return this.userForm.get('lname');
  }
  getEmail() {
    return this.userForm.get('email');
  }
  getContact() {
    return this.userForm.get('contact');
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      console.log('Form Is InValid');
      console.log(this.userForm);
      console.log(this.getfname)
      return;
    }

    console.log(this.userForm.value);
  }
}
