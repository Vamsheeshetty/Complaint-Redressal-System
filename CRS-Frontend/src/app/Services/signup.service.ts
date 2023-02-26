import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8080'

  userSignup(user: User): Observable<Object> {
    return this.http.post<Object>(`${this.baseUrl}/user/create-user`, user);
  }


}
