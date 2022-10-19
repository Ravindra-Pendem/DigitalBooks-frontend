import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBook } from '../Interfaces/IBook';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _bookUrl = "http://localhost:8081/api/v1/digitalbooks/books";
  // private _bookImageUrl = "http://localhost:8081/api/v1/digitalbooks/upload";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getBooks(){
    return this.http.get<any>(this._bookUrl);
  }
  addBooks(book: IBook){
    return this.http.post<any>(this._bookUrl,book, this.httpOptions);
  }

  // addBookImage(bookImage:any){
  //   return this.http.post<any>(this._bookImageUrl,bookImage);
  // }

  updateBook(book: IBook){
    return this.http.post<any>(this._bookUrl,book);
  }

  getBooksByTitle(title: string){
    return this.http.get<any>(`${this._bookUrl}/title/${title}`);
  }

  getBooksByCategory(category: string){
    return this.http.get<any>(`${this._bookUrl}/category/${category}`);
  }

  getBooksByAuthor(author: string){
    return this.http.get<any>(`${this._bookUrl}/author/${author}`);
  }

}
