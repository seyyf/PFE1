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
    ContentbodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
