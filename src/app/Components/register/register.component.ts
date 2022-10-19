import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Interfaces/IUser';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData!: IUser;

  constructor(private _auth: AuthService, private _router: Router) {
    if(this.registerUserData == undefined){
      this.registerUserData = {
        username: "",
        password: ""
      };
    }
   }

  ngOnInit(): void {
  }

  registerUser(username: string, password: string){
    this.registerUserData.username = username;
    this.registerUserData.password = password;

    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {console.log(res)
      this._router.navigate(['/login'])
      },
      err => console.log(err)
    )
  }

  routeToLogin(){
    this._router.navigate(['/login']);
  }

}
