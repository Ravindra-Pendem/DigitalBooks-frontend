import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/Interfaces/IBook';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnInit {

  books:any;
  userId!: number;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.userId = this._userService.userId;
    this._userService.getBooksByUser(this.userId).subscribe(
      res => {
        console.log("Subscribed user book details : "+res);
        this.books = res;
        this.books = this.books.filter((book:any) => (book.status !== 'inActive'))
      },
      err => console.log(err)
    );
  }

}
