import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private db:AngularFireDatabase) { }

  getAll(){
    return this.db
      .list('/categories', reference => reference.orderByChild('name'))
      .snapshotChanges().pipe(
        map(actions => 
          actions.map(a => ({ $key: a.payload.key, ...a.payload.val() as {} }))
        )
      );
  }
  
  
}
