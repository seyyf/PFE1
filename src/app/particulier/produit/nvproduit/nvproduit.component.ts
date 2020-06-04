import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nvproduit',
  templateUrl: './nvproduit.component.html',
  styleUrls: ['./nvproduit.component.css']
})
export class NvproduitComponent implements OnInit {

  faShoppingCart = faShoppingCart;
  constructor() { }

  ngOnInit(): void {
  }

}
