import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import{ Observable, BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  registerWithEmail: any;
  facebookProvider = new firebase.auth.FacebookAuthProvider();
  newUser : any;
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  constructor(private afAuth: AngularFireAuth, 
              private route: ActivatedRoute,
              private db: AngularFirestore,
              private router: Router
              ) { this.user$ = afAuth.authState; }

  //google login
   login(){
    let returnUrl =  this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
   }

   //facebook login
   loginWithFacebook(){
    let returnUrl =  this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    firebase.auth().signInWithPopup(this.facebookProvider).then((result) =>{
      this.router.navigate(['/']);
      // console.log(result.user);
    }).catch((error) =>{
      console.log(error);
    });
   }


   //Logout
   logout(){
    this.afAuth.signOut();
   }

   //loginnUser
   loginn(email: string, password: string){
     this.afAuth.signInWithEmailAndPassword(email, password)
      .catch(error =>{
        this.eventAuthError.next(error);
      })
      .then(userCredential =>{
        if(userCredential){
          this.router.navigate(['/']);
        }
      })
   }




   //createUser
   getUserState(){
    return this.afAuth.authState;
  }


   createUser(user){
     console.log(user);
     this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then(userCredential => {
        this.newUser = user;


        userCredential.user.updateProfile({
          displayName: `${user.firstName}  ${user.lastName}`
        });

        this.insertUserData(userCredential)
          .then(() =>{
            this.router.navigate(['/']);
          });
      })
      .catch(error => {
        this.eventAuthError.next(error);
      })
   }

   insertUserData(userCredential: firebase.auth.UserCredential){
     return this.db.doc(`Users/${userCredential.user.uid}`).set({
       email: this.newUser.email,
       firstName: this.newUser.firstName,
       lastName: this.newUser.lastName,
       adresse: this.newUser.adresse,
       role: 'network user'
     })
   }


}
