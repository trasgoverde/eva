import { RouterModule, Routes } from "@angular/router";

import{
  HomeComponent,
  AboutComponent,
  PricingComponent,
  FeaturesComponent
} from "./components/index.pages"
   

const app_routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'features', component: FeaturesComponent},
    {path: '**', pathMatch: 'full', redirectTo:'home'}
];

export  const app_routing = RouterModule.forRoot(app_routes, {useHash:true});