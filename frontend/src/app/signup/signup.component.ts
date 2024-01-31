import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  signup() {
    // Your signup logic here
    // For example, create user account and navigate to the dashboard
    if (this.signupForm.valid && this.createUserAccount()) {
      this.router.navigate(['/dashboard']);
    }
  }

  private createUserAccount() {
    // Implement your own logic to create user account
    // For simplicity, always return true in this example
    return true;
  }
}
