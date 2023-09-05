import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  baseurl = "";
  constructor(private http: HttpClient) { }
  public users_registration(users:Users): Observable<any> {
    return this.http.post(`${this.baseurl}`,users)

  }
}
