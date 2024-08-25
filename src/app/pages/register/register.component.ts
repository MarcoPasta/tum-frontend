import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { NgClass } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';

interface Country {
  name: string;
  code: string;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, DropdownModule, NgClass, InputTextModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  handleInput: string | undefined = '';
  groupInput: string | undefined = '';
  countries: Country[] = [];
  selectedCountry: Country = {} as Country;

  constructor() {
    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' },
    ];
  }

  getCountryFlag(code: string) {
    return 'fi fi-' + code.toLowerCase() + ' fis';
  }
}
