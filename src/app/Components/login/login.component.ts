import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Interfaces/IUser';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginUserData!: IUser;

    constructor(private _auth:AuthService, private _router: Router){
      if(this.loginUserData == undefined){
        this.loginUserData = {
          username: "",
          password: ""
        };
      }
    }

    ngOnInit(){
    }
  //   {
  //     "message": "INVALID_CREDENTIALS",
  //     "type": "class java.lang.Exception",
  //     "now": "2022-10-16T16:43:44.1932139"
  // }

//   {
//     "message": "Cannot pass null or empty values to constructor",
//     "type": "class org.springframework.security.authentication.InternalAuthenticationServiceException",
//     "now": "2022-10-16T16:43:54.8673099"
// }
    loginUser(username:string, password:string){
      this.loginUserData.username = username;
      this.loginUserData.password = password;
  
      this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['/home'])
        },
        err => console.log(err)
      )
    }

    register(){
      this._router.navigate(['/register']);
    }
    
}
