import { AuthService } from './../../auth.service';
import { ShoppingCartItem } from './../../models/shopping-cart-item';
import { OrderService } from './../../order.service';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from './../../shopping-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCart } from 'src/app/models/shopping-cart';
import { Order } from 'src/app/models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-check-out',
  templateUrl: './body-check-out.component.html',
  styleUrls: ['./body-check-out.component.css']
})
export class BodyCheckOutComponent implements OnInit, OnDestroy {

  shipping = {};
  cart: ShoppingCart;
  cartSubscription: Subscription;
  userSubscription: Subscription;
  userId: string;
  
  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService,
    private shoppingCartService: ShoppingCartService) { }

  async ngOnInit(){
    let cart$ = await this.shoppingCartService.getCart();
    this.cartSubscription = cart$.subscribe( cart => this.cart = cart);
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy(){
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }


  async placeOrder(){
    let order = new Order(this.userId, this.shipping, this.cart)
    let result = await this.orderService.placeOrder(order);

    if(!confirm('félicitations, votre demande sera livré dés que possible')) return;

    this.router.navigate(['/particulier']);
  }

}
