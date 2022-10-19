import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IBook } from 'src/app/Interfaces/IBook';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  addBookForm: FormGroup;
  books:any;
  addOrUpdate:boolean = false;

  constructor(private fb: FormBuilder, private _bookService: BookService) {
    this.addBookForm = this.fb.group({
      id: [''],
      title: [''],
      author: [''],
      price: [''],
      category: [''],
      publisher: [''],
      publishDate: [''],
      imageUrl: [''],
      status: [''],
      bookStatus: ['']
    });
  }

  ngOnInit(): void {
    this._bookService.getBooks().subscribe(
      res => this.books = res,
      err => console.log(err)
    )
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
        this.addBookForm.get('imageUrl')?.setValue(event.target.files[0].name);
    }
  }

  addBook() {
    this.addBookForm.get('status')?.setValue("active");
    this.addBookForm.get('bookStatus')?.setValue('notSubscribed');
    console.log(this.addBookForm.value);
    this._bookService.addBooks(this.addBookForm.value).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    this.addBookForm.reset();
    location.reload();
  }

  editBook(book:IBook){
    this.addBookForm.setValue(book);
    this.addOrUpdate = true;
  }

  updateBook(){
    this._bookService.updateBook(this.addBookForm.value).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    this.addBookForm.reset();
    this.addOrUpdate = false;
    location.reload();
  }

  blockBook(book: IBook){
    this.addBookForm.setValue(book);
    this.addBookForm.get('status')?.setValue('inActive');
    this._bookService.updateBook(this.addBookForm.value).subscribe(
      res => console.log(res),
      err => console.log(err)
    ); 
    this.addBookForm.reset();
    location.reload();
  }

  unBlockBook(book: IBook){
    this.addBookForm.setValue(book);
    this.addBookForm.get('status')?.setValue('active');
    this._bookService.updateBook(this.addBookForm.value).subscribe(
      res => console.log(res),
      err => console.log(err)
    ); 
    this.addBookForm.reset();
    location.reload();
  }

}
