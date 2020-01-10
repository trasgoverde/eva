import { RouterModule, Routes } from "@angular/router";

import{
    
    AppComponent,
    HomeComponent,
    AboutComponent,
    PricingComponent,
    FeaturesComponent,
    DocsComponent,
    ContactComponent,
    Page404Component,
    DocspageComponent,
    HowweworkComponent,
    HowdoesworkComponent,
    TeaserComponent,
    PhotosComponent
} from "./components/index.pages"
   

const app_routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'features', component: FeaturesComponent},
    {path: 'docs', component: DocsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'page404', component: Page404Component},
    {path: 'docspage', component: DocspageComponent},
    {path: 'howwework', component: HowweworkComponent},
    {path: 'Howdoeswork', component: HowdoesworkComponent},
    {path: 'teaser', component: TeaserComponent},
    {path: 'photos', component: PhotosComponent},
    {path: '**', pathMatch: 'full', redirectTo:'home'}
];

export  const app_routing = RouterModule.forRoot(app_routes, {useHash:true});