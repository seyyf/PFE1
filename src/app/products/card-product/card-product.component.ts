import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/models/products';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ShoppingCartService } from 'src/app/shopping-cart.service';
import { ShoppingCart } from 'src/app/models/shopping-cart';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent  {
  @Input('product') product: Products;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  faShoppingCart = faShoppingCart;
  constructor(private cartService: ShoppingCartService) { }

  addToCart(){
    this.cartService.addToCart(this.product);
  }
}
