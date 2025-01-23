import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';  // Import RouterLink to use in the navigation

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],  // Import RouterLink
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
