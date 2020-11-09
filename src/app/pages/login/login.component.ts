import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ToastComponent } from './../../components/toast/toast.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  durationInSeconds = 2;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  public user = "";
  public pass = "";

  constructor(private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
  }

  openSnackBar(): void {
    this.snackBar.openFromComponent(ToastComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  asignUser(value){
    this.user = value;
  }

  asignPass(value){
    this.pass = value;
  }

  validateUser(){
    if(this.user.toLowerCase() == 'admin' && this.pass.toLowerCase() == 'admin'){
      localStorage.setItem('appUser', this.user);
      localStorage.setItem('appUser', this.pass);
      localStorage.setItem('isUserLoggedIn', 'true');
      this.router.navigate(['/posts']);
    }
    else{
      this.openSnackBar();
    }
  }

}
