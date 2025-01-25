import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // إضافة HttpClientModule هنا

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  onLogin(form: any) {
    if (form.valid) {
      const { email, password } = form.value;
      this.apiService.loginUser(email, password).subscribe(
        (response) => {
          console.log('Login successful:', response);
          // Store user info in localStorage or sessionStorage
          localStorage.setItem('user', JSON.stringify({ email }));
          // Redirect to home after successful login
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
    }
  }
}
