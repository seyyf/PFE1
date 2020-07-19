import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/shopping-cart.service';

@Component({
  selector: 'app-header-orders',
  templateUrl: './header-orders.component.html',
  styleUrls: ['./header-orders.component.css']
})
export class HeaderOrdersComponent implements OnInit {
  cart$
  constructor(private shoppingCartService: ShoppingCartService) { }

  async ngOnInit(){
    this.cart$ = await this.shoppingCartService.getCart();
  }

}
