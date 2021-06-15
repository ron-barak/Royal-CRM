import { Directive, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appLogin]'
})
export class LoginDirective {
constructor(private authService:AuthService) { }
@HostListener('click',['$event'])
clickEvent(e:MouseEvent){
  this.authService.loginWithGoogle();
}
}
