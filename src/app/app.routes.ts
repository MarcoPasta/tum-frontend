import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GeneralComponent } from './pages/general/general.component';
import { EventsComponent } from './pages/events/events.component';
import { LocationComponent } from './pages/location/location.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'general', component: GeneralComponent },
  { path: 'events', component: EventsComponent },
  { path: 'location', component: LocationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
];
