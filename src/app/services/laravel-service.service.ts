import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterObject, Visitors } from '../interfaces/Interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class LaravelService {
  // apiUrl: string = 'http://localhost:8000/api/register';
  constructor(private http: HttpClient) {}

  registerUser(visitor: RegisterObject): Observable<string> {
    return this.http.post<string>(environment.apiUrl, visitor);
  }

  getVisitors(): Observable<Visitors[]> {
    return this.http.get<Visitors[]>(environment.apiUrl);
  }
}
