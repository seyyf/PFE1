import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/shopping-cart.service';

@Component({
  selector: 'app-body-orders',
  templateUrl: './body-orders.component.html',
  styleUrls: ['./body-orders.component.css']
})
export class BodyOrdersComponent implements OnInit {

  cart$;

  constructor(private shoppingCartService: ShoppingCartService) { }

  async ngOnInit(){
    this.cart$ = await this.shoppingCartService.getCart();
  }

  clearCart(){
    this.shoppingCartService.clearCart();
  }

}
