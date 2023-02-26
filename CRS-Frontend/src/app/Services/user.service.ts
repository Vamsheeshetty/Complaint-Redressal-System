import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8080';

  //get user by role name

  getUserByRole(role: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/user/get-all/${role}`);
  }

  deleteUser(userId: number): Observable<Object> {
    return this.http.delete<Object>(`${this.baseUrl}/user/delete-user/${userId}`);
  }

  updateUser(username: string, user: User): Observable<Object> {
    return this.http.put<Object>(`${this.baseUrl}/user/update-user/${username}`, user);
  }

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/user/get-user/${username}`);
  }

}
