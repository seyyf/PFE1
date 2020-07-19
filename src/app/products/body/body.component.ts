import { ShoppingCartService } from './../../shopping-cart.service';
import { Products } from './../../models/products';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProductService } from './../../product.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, OnDestroy  { 

  products: Products[] = [];
  filteredProducts: Products[] = [];
  cart: any;
  category: string;
  subscription : Subscription;


  constructor(private productService: ProductService,
              private route : ActivatedRoute,
              private shoppingCartService: ShoppingCartService) {

                this.productService.getAll()
                .pipe(switchMap( products => {
                  let temp: any[];
                  temp = products;
                  this.products = temp; 
                  return this.route.queryParamMap;
                  }))
                  .subscribe(params => {
                    this.category = params.get('category');
              
                    this.filteredProducts = (this.category) ?
                      this.products.filter(p => p.category === this.category) : 
                      this.products;
                  }); 
                }


   async ngOnInit(){
    this.subscription = (await this.shoppingCartService.getCart())
      .subscribe(cart => this.cart = cart);
   }

   ngOnDestroy(){
     this.subscription.unsubscribe();
   }
}
