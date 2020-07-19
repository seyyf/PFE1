import { ShoppingCartService } from 'src/app/shopping-cart.service';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { HostListener } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from './register/register.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ShoppingCart } from './models/shopping-cart';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faLinkedinIn = faLinkedinIn;
  faSearch = faSearch;
  faShoppingCart = faShoppingCart;

  cart$: Observable<ShoppingCart>;

  constructor(public dialog: MatDialog, 
              public auth: AuthService, 
              router: Router, 
              private userService: UserService,
              private shoppingCartService: ShoppingCartService) {
      auth.user$.subscribe(user => {
        if (!user) return;
        userService.save(user);

        let returnUrl = localStorage.getItem('returnUrl');
        if(!returnUrl) return;

        localStorage.removeItem('returnUrl');
        router.navigateByUrl(returnUrl); 
      })
  }

  async ngOnInit(){
    this.cart$ = await this.shoppingCartService.getCart();
    
  }

  //Scroll EVENT
  @HostListener('window:scroll', ['$event'])

onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
  openDialog(){
    this.dialog.open(RegisterComponent)
  }
  

  //logOut
  logout(){
    this.auth.logout();
  }
}
