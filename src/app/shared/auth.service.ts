import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export class User {
  name: String;
  email: String;
  password: String;
  password_confirmation: String
  email_verified_at:any;
  id:any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // User registration
  register(user: User): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/register', user);
  }

  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/auth/login', user);
  }

  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/user-profile');
  }
  // resendEamil(): Observable<any> {
  //   return this.http.get('http://127.0.0.1:8000/api/auth/email/resend');
  // }
  // verifyEmail(id,hash): Observable<any> {
  //   return this.http.get(`http://127.0.0.1:8000/api/auth/email/verify/${id}/${hash}`);
  // }
  
  sendResetPasswordLink(data) {
    return this.http.post('http://127.0.0.1:8000/api/auth/reset-password-request', data)
  }

  resetPassword(data) {
    return this.http.post('http://127.0.0.1:8000/api/auth/change-password', data)
  }
}
