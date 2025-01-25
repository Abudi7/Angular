import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // دالة تسجيل الدخول
  loginUser(email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:5000/api/login', { email, password });
  }

  // دالة تسجيل المستخدم
  registerUser(fullName: string, email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:5000/api/register', { fullName, email, password });
  }
}
