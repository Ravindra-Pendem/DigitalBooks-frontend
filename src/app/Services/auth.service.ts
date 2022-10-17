import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../Interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:8081/register";
  private _loginUrl = "http://localhost:8081/authenticate";

  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user: IUser){
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user: IUser){
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  logoutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
