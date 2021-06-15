import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
form={
  email:'',
  password:''
}
  constructor(public authServie:AuthService) { }
onSubmit(){
  this.authServie.loginWithEmail(this.form.email,this.form.password)
}
  ngOnInit(): void {
  }

}
