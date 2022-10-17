import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _bookUrl = "http://localhost:8081/api/v1/digitalbooks/books";

  constructor(private http: HttpClient) { }

  getBooks(){
    return this.http.get<any>(this._bookUrl);
  }

}
