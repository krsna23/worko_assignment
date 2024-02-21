import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CandidateComponent } from '../candidate/candidate.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CandidateComponent,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  login: boolean = true;
  signup: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    phNumber: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  signupClicked() {
    this.login = false;
    this.signup = true;
  }

  loginSubmit() {
    console.log("Submitted");
    if (this.loginForm.valid) {
      console.log("Submitted");
      // Logic to handle login submission
      console.log('Login form submitted:', this.loginForm.value);
    }
  }

  signupSubmit() {
    console.log("Submitted");
    if (this.signupForm.valid) {
      // Logic to handle signup submission
      console.log('Signup form submitted:', this.signupForm.value);
    }
  }
}
