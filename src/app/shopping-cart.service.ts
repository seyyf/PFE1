import { ShoppingItem } from './models/item';
import { Products } from './models/products';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { promise } from 'protractor';
import { ShoppingCart } from './models/shopping-cart';
import { Observable } from 'rxjs';
import { ShoppingCartItem } from './models/shopping-cart-item';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  product: Products []

  constructor(private db: AngularFireDatabase) { }


  async clearCart(){
    let cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items/').remove();
  }


  private create(){
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId)
      .valueChanges().map( x => new ShoppingCart(x.items)); 
  }

  private getItem(cartId: string, productId: string){
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }
  
  private async getOrCreateCartId(): Promise<string>{
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  async addToCart(product: Products){
    this.updateItemQuantity(product, 1);
  }

  async removeFromCart(product: Products){
    this.updateItemQuantity(product, -1);
  }

  private async updateItemQuantity(product: Products, change: number){
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.key);
    item$.valueChanges().pipe(take(1)).subscribe((item : any)  => {
        let quantity1 = (item?.quantity ?? 0) + change ;
        if (quantity1 === 0 ) item$.remove();
        else item$.update({ product: product, quantity: quantity1 });
    });
  }

//****************************************//




} 
