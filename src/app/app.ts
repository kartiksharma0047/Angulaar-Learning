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
      contact: ['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
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

  getDataFromAPI(){
    this.userForm.patchValue({
      fname: 'Kartik',
      lname: 'Sharma',
      email: 'kartik@gmail.com',
      contact: '7850955109'
    })
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    console.log(this.userForm.value);
  }
}
