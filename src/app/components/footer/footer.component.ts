import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(private router: Router) {}
  navigateToDatenschutz() {
    this.router.navigate(['data-protection']);
  }
}
