import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserSub } from 'src/app/Interfaces/IUserSub';
import { BookService } from 'src/app/Services/book.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm: FormGroup;

  constructor(public _userUrl: UserService,private fb: FormBuilder, private _router: Router) {
    this.userForm = this.fb.group({
      id: [''],
      mail: [''],
      name: ['']
    });
  }

  ngOnInit(): void {
  }

  subscribeBook() {
    this._userUrl.getUserByMail(this.userForm.value.mail).subscribe(
      res => {
        if(res != ""){
          this._userUrl.addBookToUser(res[0].id).subscribe(
            res =>{ console.log("subscribing user details to existing id : "+res[0].id) 
            this._router.navigate(['/userBooks'])
            },
            err => console.log(err)
          );
        }
        else{
          console.log("Received null object for registrating user and now completing registration");
          this._userUrl.userSubscription(this.userForm.value).
          subscribe(
            res => {
              console.log("new users details : "+JSON.stringify(res))
              console.log("new user id : "+res.id);
              console.log("new user mail : "+res.mail);
                this._userUrl.addBookToUser(res.id).subscribe(
                  res =>{ console.log("subscribing user details for new user : "+res) 
                  this._router.navigate(['/userBooks'])
                  },
                  err => console.log(err)
                );
                },
                err => console.log(err)
          );
        }
    },
      err => console.log(err)
    );

  }

  findBooks(){
    this._userUrl.getUserByMail(this.userForm.value.mail).subscribe(
      res => {
        if(res != ""){
          this._userUrl.userId = res[0].id;
          this._userUrl.subscribed = false;
          this._router.navigate(['/userBooks']);
        }
        else{
          this._router.navigate(['/home']);
        }
    },
      err => console.log(err)
    );
  }

}
