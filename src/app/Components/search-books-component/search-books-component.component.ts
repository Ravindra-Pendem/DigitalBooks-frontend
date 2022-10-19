import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from 'src/app/Interfaces/IBook';
import { BookService } from 'src/app/Services/book.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-search-books-component',
  templateUrl: './search-books-component.component.html',
  styleUrls: ['./search-books-component.component.css']
})
export class SearchBooksComponentComponent implements OnInit {

  books:any;

  constructor(private _bookUrl:BookService, 
              private _router:Router,
              private _userUrl: UserService) {
  }

  ngOnInit(): void {
  }

  getBooks(title:string, category:string, author:string){
    console.log(title+" "+category+" "+author);
    if(title != ""){
      this._bookUrl.getBooksByTitle(title).subscribe(
        res => this.books = res,
        err => console.log(err)
      );
    }
    else if(category != ""){
      this._bookUrl.getBooksByCategory(category).subscribe(
        res => this.books = res,
        err => console.log(err)
      );
    }
    else if(author != ""){
      this._bookUrl.getBooksByAuthor(author).subscribe(
        res => this.books = res,
        err => console.log(err)
      );
    }
    else{
    this._bookUrl.getBooks().subscribe(
      res => {this.books = res,
        this.books = this.books.filter((book:any) => (book.status !== 'inActive' && book.bookStatus !== "notSubscibed" ))},
      err => console.log(err)
    )
    }

  }

  navigateToUser(book: IBook){
    console.log(book);
    this._userUrl._book = book;
    this._userUrl.subscribed = false;
    this._router.navigate(['/subscribe'])
  }

}
