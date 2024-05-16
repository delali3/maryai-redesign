// header.component.ts
import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuActive: boolean = false;

  constructor(private themeService: ThemeService) {}

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  get currentTheme() {
    return this.themeService.getCurrentTheme();
  }
}
