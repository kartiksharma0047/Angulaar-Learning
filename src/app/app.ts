import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  userForm!: FormGroup;
  Validators=Validators;
  passwordMismatch: boolean = false;
  searchResults: string[] = [];
  constructor(private fb: FormBuilder) {}

  // Independent Form Control
  searchControl:FormControl=new FormControl("");

  ngOnInit(): void {
    this.initializeForm();
    this.getName()?.valueChanges.subscribe((res:string)=>{
      console.log(res)
    })

    this.searchControl.valueChanges.subscribe((searchText)=>{
      console.log("Entered text: ",searchText)
    })
  }

  initializeForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      subscribe: [false],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      age: [],
      drivingLicense: [],
      country: [],
      currency: [],
      search: [],
    });
  }

  getName() {
    return this.userForm.get('name');
  }

  getEmail(){
    return this.userForm.get('email')
  }

  getPassword(){
    return this.userForm.get('password');
  }

  getConfirmPassword(){
    return this.userForm.get('confirmPassword');
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }
  }
}
