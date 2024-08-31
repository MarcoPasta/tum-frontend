import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { NgClass } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { Country, RegisterObject, Visitors } from '../../interfaces/Interfaces';
import { LaravelService } from '../../services/laravel-service.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    DropdownModule,
    NgClass,
    InputTextModule,
    ButtonModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  handleInput: string | undefined = '';
  groupInput: string | undefined = '';
  countries: Country[] = [];
  selectedCountry: Country = {} as Country;

  visitors: Visitors[] = [];

  style = {
    'background-color': '#ff8610',
    'border-color': '#ff8610',
  };

  constructor(private laravelService: LaravelService) {
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

  ngOnInit(): void {
    this.getVisitors();
  }

  getCountryFlag(code: string) {
    return 'fi fi-' + code.toLowerCase() + ' fis';
  }

  getVisitors() {
    this.laravelService.getVisitors().subscribe({
      next: (visitors) => {
        this.visitors = visitors;
        console.log('get', this.visitors);
      },
      error: (err) => {
        console.log('err', err);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }

  handleSubmit() {
    let visitor: RegisterObject = { handle: '', group: '', country: '' };

    if (this.handleInput !== undefined && this.handleInput !== null) {
      console.log(this.handleInput);
      visitor.handle = this.handleInput;
    }
    if (this.groupInput !== undefined && this.groupInput !== null) {
      this.groupInput;
      visitor.group = this.groupInput;
    }
    if (this.selectedCountry !== undefined && this.selectedCountry !== null) {
      this.selectedCountry;
      visitor.country = this.selectedCountry.code;
    }

    if (visitor.group === '') {
      visitor = { ...visitor, ['group']: undefined };
    }
    this.registerUser(visitor);
  }

  registerUser(visitor: RegisterObject) {
    this.laravelService.registerUser(visitor).subscribe({
      next: (msg) => {
        console.log(msg);
        this.getVisitors();
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
}
