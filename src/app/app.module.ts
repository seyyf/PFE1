import { OrderService } from './order.service';
import { ShoppingCartService } from './shopping-cart.service';
import { CategorieService } from './categorie.service';
import { ProductService } from './product.service';
import { UserService } from './user.service';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './particulier/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderContentComponent } from './particulier/header/header-content/header-content.component';
import { ConceptComponent } from './particulier/concept/concept.component';
import { ProduitComponent } from './particulier/produit/produit.component';
import { NvproduitComponent } from './particulier/produit/nvproduit/nvproduit.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { VenteComponent } from './particulier/produit/vente/vente.component';
import { ParticulierComponent } from './particulier/particulier.component';
import { ContactComponent } from './particulier/contact/contact.component';
import { ProfessionnelComponent } from './professionnel/professionnel.component';
import { HeaderprofComponent } from './professionnel/headerprof/headerprof.component';
import { HeadercontentprofComponent } from './professionnel/headerprof/headercontentprof/headercontentprof.component';
import { ContentbodyComponent } from './professionnel/contentbody/contentbody.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule,  } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from './../environments/environment';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyordersComponent } from './myorders/myorders.component';
import { ProfileComponent } from './profile/profile.component';
import { BodyComponent } from './products/body/body.component';
import { HeaderproductComponent } from './products/headerproduct/headerproduct.component';
import { CardProductComponent } from './products/card-product/card-product.component';
import { HeaderOrdersComponent } from './myorders/header-orders/header-orders.component';
import { BodyOrdersComponent } from './myorders/body-orders/body-orders.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { HeaderCheckOutComponent } from './check-out/header-check-out/header-check-out.component';
import { BodyCheckOutComponent } from './check-out/body-check-out/body-check-out.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { AchatsComponent } from './achats/achats.component';
import { HeaderAchatsComponent } from './achats/header-achats/header-achats.component';
import { BodyAchatsComponent } from './achats/body-achats/body-achats.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderContentComponent,
    ConceptComponent,
    ProduitComponent,
    NvproduitComponent,
    VenteComponent,
    ParticulierComponent,
    ContactComponent,
    ProfessionnelComponent,
    HeaderprofComponent,
    HeadercontentprofComponent,
    ContentbodyComponent,
    RegisterComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyordersComponent,
    ProfileComponent,
    BodyComponent,
    HeaderproductComponent,
    CardProductComponent,
    HeaderOrdersComponent,
    BodyOrdersComponent,
    ProductQuantityComponent,
    HeaderCheckOutComponent,
    BodyCheckOutComponent,
    ShoppingCartSummaryComponent,
    AchatsComponent,
    HeaderAchatsComponent,
    BodyAchatsComponent
  ],
  entryComponents: [RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    ProductService,
    CategorieService,
    ShoppingCartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
