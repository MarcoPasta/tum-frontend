import { NgOptimizedImage } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, TabMenuModule, NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  items: MenuItem[] = [];
  activeItem: MenuItem = {} as MenuItem;

  constructor(private router: Router) {
    this.items = [
      {
        label: 'HOME',
        icon: 'pi pi-home',
        target: '',
        items: [],
        command: () => this.router.navigate(['home']),
      },
      {
        label: 'GENERAL INFORMATION',
        icon: 'pi pi-star',
        target: 'general',
        items: [],
        command: () => this.router.navigate(['general']),
      },
      {
        label: 'EVENTS',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Compos',
            icon: 'pi pi-bolt',
            target: 'compos',
            command: () => this.router.navigate(['compos']),
          },
          {
            label: 'Timetable',
            icon: 'pi pi-server',
            target: 'compos',
            command: () => this.router.navigate(['timetable']),
          },
        ],
      },
      {
        label: 'LOCATION & TRAVEL',
        icon: 'pi pi-envelope',
        target: 'location',
        items: [
          {
            label: 'Location',
            icon: '',
            target: 'location',
            command: () => this.router.navigate(['location']),
          },
          {
            label: 'Travel',
            icon: '',
            target: 'travel',
            command: () => this.router.navigate(['travel']),
          },
        ],
      },
      {
        label: 'CONTACT',
        icon: 'pi pi-envelope',
        target: 'contact',
        command: () => this.router.navigate(['contact']),
      },
      {
        label: 'REGISTER',
        icon: 'pi pi-envelope',
        target: 'register',
        command: () => this.router.navigate(['register']),
      },
    ];

    const foundItem = this.items.find(
      (i) => i.target === window.location.pathname.replace('/', '')
    );

    if (foundItem !== undefined) {
      this.activeItem = foundItem;
    } else {
      this.activeItem = this.items[0];
    }
  }

  onChangeActiveItem($event: MenuItem) {
    this.activeItem = $event;
  }
}
