import { CategorieService } from './../../categorie.service';
import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from './../../product.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-headerproduct',
  templateUrl: './headerproduct.component.html',
  styleUrls: ['./headerproduct.component.css']
})
export class HeaderproductComponent implements OnInit {
  categories$;
  @Input('category') category;

  constructor( categorieService: CategorieService ) {
    this.categories$ = categorieService.getAll();
  }
    

  ngOnInit() {
  }

}
