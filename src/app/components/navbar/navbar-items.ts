export const items = [
  {
    label: 'HOME',
    icon: 'pi pi-home',
    target: 'home',
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
    target: 'events',
    items: [
      {
        label: 'Components',
        icon: 'pi pi-bolt',
      },
      {
        label: 'Blocks',
        icon: 'pi pi-server',
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-pencil',
      },
      {
        label: 'Templates',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Apollo',
            icon: 'pi pi-palette',
          },
          {
            label: 'Ultima',
            icon: 'pi pi-palette',
          },
        ],
      },
    ],
    command: () => this.router.navigate(['events']),
  },
  {
    label: 'LOCATION & TRAVEL',
    icon: 'pi pi-envelope',
    target: 'location',
    command: () => this.router.navigate(['location']),
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
