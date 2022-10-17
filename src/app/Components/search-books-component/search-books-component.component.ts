import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/Interfaces/IBook';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-search-books-component',
  templateUrl: './search-books-component.component.html',
  styleUrls: ['./search-books-component.component.css']
})
export class SearchBooksComponentComponent implements OnInit {

  books!:IBook;

  constructor(private _bookUrl:BookService) { 
    this.books = {
      id: 0,
      title: "",
      author: "",
      price: "",
      category: "",
      publisher: "",
      publishDate: "",
      picByte: [],
      status: "",
      bookStatus: ""
    }
  }

  ngOnInit(): void {
  }

  getBooks(title:string, category:string, author:string){
    this._bookUrl.getBooks().subscribe(
      res => this.books = res,
      err => console.log(err)
    )
  }

}
