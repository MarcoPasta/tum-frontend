import { Routes } from '@angular/router';
import { GeneralComponent } from './pages/general/general.component';
import { LocationComponent } from './pages/location/location.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ComposComponent } from './pages/compos/compos.component';
import { TimetableComponent } from './pages/timetable/timetable.component';
import { TravelComponent } from './pages/travel/travel.component';
import { DataProtectionComponent } from './pages/data-protection/data-protection.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'general', component: GeneralComponent },
  { path: 'compos', component: ComposComponent },
  { path: 'timetable', component: TimetableComponent },
  { path: 'location', component: LocationComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'data-protection', component: DataProtectionComponent },
];
