import { CategorieService } from './categorie.service';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cart2Service {

  constructor(private fs:AngularFirestore, private as:AuthService) { }

  addToCart2(data: CategorieService){
    return this.fs.collection(`shopping-carts/${this.as.user$}/items`).add(data);
  }


}
