import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './Components/create-book/create-book.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { SearchBooksComponentComponent } from './Components/search-books-component/search-books-component.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  { path: 'home', component: SearchBooksComponentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'addBook', component: CreateBookComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
