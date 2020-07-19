import { Products } from './../models/products';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Products[];
  category: string;
  
  constructor(productService: ProductService,
              route: ActivatedRoute) {
   productService.getAll().subscribe(products => products);
    
    route.queryParamMap.subscribe(params =>{
      this.category = params.get('category')
    })
   }

}
