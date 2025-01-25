import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';  // إضافة CommonModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, CommonModule],  // تأكد من إضافة CommonModule هنا
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: any;

  ngOnInit() {
    // Retrieve user info from localStorage
    const user = localStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
    } else {
      console.log('No user information found');
    }
  }
}
