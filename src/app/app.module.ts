import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Rutas

import {app_routing} from "./app.routes"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DocsComponent } from './components/docs/docs.component';
import { FeaturesComponent } from './components/features/features.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactComponent } from './components/contact/contact.component';
import { Page404Component } from './components/page404/page404.component';
import { DocspageComponent } from './components/docspage/docspage.component';
import { HowweworkComponent } from './components/howwework/howwework.component';
import { HowdoesworkComponent } from './components/howdoeswork/howdoeswork.component';
import { TeaserComponent } from './components/teaser/teaser.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { IntegrationsComponent } from './components/integrations/integrations.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { Testimonials2Component } from './components/testimonials2/testimonials2.component';
import { AboutComponent } from './components/about/about.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PricingmarketingComponent } from './components/pricingmarketing/pricingmarketing.component';
import { PricingtotalsComponent } from './components/pricingtotals/pricingtotals.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DocsComponent,
    FeaturesComponent,
    PricingComponent,
    ContactComponent,
    Page404Component,
    DocspageComponent,
    HowweworkComponent,
    HowdoesworkComponent,
    TeaserComponent,
    TestimonialsComponent,
    IntegrationsComponent,
    FaqsComponent,
    Testimonials2Component,
    AboutComponent,
    PhotosComponent,
    PricingmarketingComponent,
    PricingtotalsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing,
    HttpClientModule
    
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent,
    FooterComponent, HomeComponent, HowdoesworkComponent, 
    HowweworkComponent, ContactComponent, DocsComponent, 
    DocspageComponent, TeaserComponent,
    TestimonialsComponent, IntegrationsComponent,
    FaqsComponent, Testimonials2Component,
    AboutComponent, PhotosComponent,
    FeaturesComponent, PricingComponent, Page404Component]
})
export class AppModule { }
