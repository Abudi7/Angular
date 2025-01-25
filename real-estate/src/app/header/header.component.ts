import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // استيراد RouterLink و RouterLinkActive
import { CommonModule } from '@angular/common'; // استيراد CommonModule

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],  // إضافة CommonModule هنا
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: any;
  language: string = 'en'; // اللغة الافتراضية هي الإنجليزية

  ngOnInit() {
    // استرجاع معلومات المستخدم من LocalStorage عند التحميل
    const user = localStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
    }

    // التحقق من اللغة المخزنة في LocalStorage
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      this.language = storedLanguage;
      this.applyLanguageChanges(this.language);
    }
  }

  // تغيير اللغة
  changeLanguage(event: any) {
    this.language = event.target.value;
    localStorage.setItem('language', this.language); // تخزين اللغة في LocalStorage
    this.applyLanguageChanges(this.language); // تطبيق التغييرات
  }

  // تطبيق التغييرات الخاصة باللغة
  private applyLanguageChanges(language: string) {
    if (language === 'ar') {
      document.documentElement.setAttribute('lang', 'ar');
      document.body.style.direction = 'rtl'; // تغيير اتجاه النص إلى اليمين لليسار
    } else {
      document.documentElement.setAttribute('lang', 'en');
      document.body.style.direction = 'ltr'; // تغيير اتجاه النص إلى اليسار لليمين
    }
  }

  // التبديل بين القائمة في الأجهزة الصغيرة
  toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks?.classList.toggle('active');
  }
}
