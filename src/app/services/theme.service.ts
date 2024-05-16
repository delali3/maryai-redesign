// theme.service.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly lightTheme = 'light';
  private readonly darkTheme = 'dark';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      const savedTheme = this.getSavedTheme() || this.lightTheme;
      this.setTheme(savedTheme);
    }
  }

  private isLocalStorageAvailable(): boolean {
    if (!this.isBrowser) return false;
    try {
      const test = '__localStorageTest__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  private getSavedTheme(): string | null {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem('theme');
    }
    return null;
  }

  private saveTheme(theme: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('theme', theme);
    }
  }

  setTheme(theme: string): void {
    if (this.isBrowser) {
      document.documentElement.setAttribute('data-theme', theme);
      this.saveTheme(theme);
    }
  }

  toggleTheme(): void {
    if (this.isBrowser) {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === this.lightTheme ? this.darkTheme : this.lightTheme;
      this.setTheme(newTheme);
    }
  }

  getCurrentTheme(): string | null {
    if (this.isBrowser) {
      return document.documentElement.getAttribute('data-theme');
    }
    return null;
  }
}
