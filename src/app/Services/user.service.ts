import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBook } from '../Interfaces/IBook';
import { IUserSub } from '../Interfaces/IUserSub';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userUrl = "http://localhost:8081/api/v1/digitalbooks/users"; 

   _book!: IBook;
   userId!:number;
   subscribed: boolean = false;

   private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  userSubscription(user:IUserSub){
    return this.http.post<any>(this._userUrl,user,this.httpOptions);
  }

  addBookToUser(userId:number){
    this.userId = userId;
    this._book.bookStatus = "subscribed";
    return this.http.post<any>(`${this._userUrl}/${userId}/books`,this._book);
  }

  getUsers(){
    return this.http.get<any>(this._userUrl, this.httpOptions);
  }

  getBooksByUser(userId:number){
    return this.http.get<any>(`${this._userUrl}/${userId}/books`)
  }

  getUserByMail(mail: string){
    return this.http.get<any>(`${this._userUrl}/mail/${mail}`);
  }

}
