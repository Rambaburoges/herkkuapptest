import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  hide = true;
  user:any;
  password:any;
  email:any;
  errorCharMsg:any;
  constructor(private fb:FormBuilder,private router:Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      user: ['',Validators.compose([Validators.maxLength(50),Validators.email,Validators.required])],
      password: ['', [Validators.compose([Validators.minLength(6),Validators.required])]],
      })  
  }
  submitLogin(){
    this.router.navigateByUrl('calendar');
    this.snackBarFunc('Login successfully')
    // console.log('clicked')
  }
  // toLogin(){
    
  // }
  // toRegister(){

  // }
snackBarFunc(message:string){
  this._snackBar.open(message,'',{duration:1500,verticalPosition:'bottom',horizontalPosition:'center'})
  }    
}
