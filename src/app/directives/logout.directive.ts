import { Directive, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appLogout]'
})
export class LogoutDirective {
  @HostListener('click',['$event'])
  clickEvent(e:MouseEvent){
    this.authService.logOut();
  }
    constructor(private authService:AuthService) { }

  }
