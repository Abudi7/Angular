import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // إضافة HttpClientModule هنا

@Component({
  selector: 'app-register',
  standalone: true, // تأكد من أنها مكون مستقل
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
  ], // تأكد من إضافة HttpClientModule
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  onRegister(form: any) {
    if (form.valid) {
      const { fullName, email, password } = form.value;
      this.apiService.registerUser(fullName, email, password).subscribe(
        (response) => {
          console.log('Registration successful:', response);
          // تخزين بيانات المستخدم في localStorage
          localStorage.setItem('user', JSON.stringify({ fullName, email }));
          // إعادة التوجيه بعد التسجيل الناجح
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Registration failed:', error);
          // إذا كانت هناك مشكلة في التسجيل، يمكنك التعامل مع الخطأ هنا
        }
      );
    }
  } 
  
}
