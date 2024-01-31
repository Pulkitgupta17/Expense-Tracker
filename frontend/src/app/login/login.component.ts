import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    // Your login logic here
    // For example, check credentials and navigate to the dashboard
    if (this.loginForm.valid && this.checkCredentials()) {
      this.router.navigate(['/dashboard']);
    }
  }

  private checkCredentials() {
    // Implement your own logic to check credentials
    // For simplicity, always return true in this example
    return true;
  }
}
