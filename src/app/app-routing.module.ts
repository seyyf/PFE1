import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticulierComponent } from './particulier/particulier.component';
import { ProfessionnelComponent } from './professionnel/professionnel.component';


const routes: Routes = [
  { path:'', component: ParticulierComponent },
  { path:'professionnel', component: ProfessionnelComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
