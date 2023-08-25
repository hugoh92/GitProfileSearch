import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitApiService {
  private apiUrl = 'https://api.github.com';
  //getUser: any;
 // getRepos: any;

  constructor(private http: HttpClient) { }

 /*  getUser(username: string): Observable<any> {
    const url = `${this.apiUrl}/users/${username}`;
    return this.http.get(url);
  }

  getRepos(username: string): Observable<any[]> {
    const url = `${this.apiUrl}/users/${username}/repos`;
    return this.http.get<any[]>(url);
  } */

  getUser(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${username}`);
  }

  getRepos(username: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users/${username}/repos`);
  }

}


