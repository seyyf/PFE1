import { AuthGuardService } from './auth-guard.service';
import { MyordersComponent } from './myorders/myorders.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticulierComponent } from './particulier/particulier.component';
import { ProfessionnelComponent } from './professionnel/professionnel.component';
import { ProductsComponent } from './products/products.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AchatsComponent } from './achats/achats.component';



const routes: Routes = [
  { path:'particulier', component: ParticulierComponent },
  { path:'professionnel', component: ProfessionnelComponent },
  { path:'shopping-cart', component: ShoppingCartComponent },
  { path:'products', component: ProductsComponent },
  { path:'register', component: RegisterComponent },
  { path:'check-out', component: CheckOutComponent },

  { path:'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path:'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
  { path:'myorders', component: MyordersComponent, canActivate: [AuthGuardService] },
  { path:'achats', component: AchatsComponent, canActivate: [AuthGuardService] },
  { path:'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
