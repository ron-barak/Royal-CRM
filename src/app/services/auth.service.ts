import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import 'firebase/auth';
import firebase from 'firebase/app'
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
user$: Observable<firebase.User> = null;
  user: firebase.User = null;
  isLogged: boolean = false;

  constructor(private afa: AngularFireAuth) {
    this.user$ = this.afa.authState.pipe(shareReplay(1));

    this.user$.subscribe((user) => {
      this.user = user;
      this.isLogged = Boolean(user);
    });
  }

  createUser(email: string, password: string) {
    return this.afa.createUserWithEmailAndPassword(email, password);
  }

  loginWithEmail(email: string, password: string) {
    return this.afa.signInWithEmailAndPassword(email, password);
  }

  loginWithGoogle() {
    return this.afa.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logOut() {
    return this.afa.signOut();
  }
  }
