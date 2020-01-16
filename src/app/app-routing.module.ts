import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { DocsComponent } from './components/docs/docs.component';
import { DocspageComponent } from './components/docspage/docspage.component';
import { FeaturesComponent } from './components/features/features.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';




const routes: Routes = [
  {
    path: '**',
    component: Page404Component
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: AppComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'docs',
    component: DocsComponent
  },
  {
    path: 'docspage',
    component: DocspageComponent
  },
  {
    path: 'features',
    component: FeaturesComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
