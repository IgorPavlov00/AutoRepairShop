import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";

import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {NavbarComponent} from "./navbar/navbar.component";
import {HeroBannerComponent} from "./hero-banner/hero-banner.component";
import {FeatureComponent} from "./feature/feature.component";
import {AboutComponent} from "./about/about.component";
import {ServicesComponent} from "./services/services.component";



const appRoute:Routes=[
  {path:'home',component:HeroBannerComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'banner',component:HeroBannerComponent},
  {path:'feature',component:FeatureComponent},
  {path:'about',component:AboutComponent},
  {path: 'services', component: ServicesComponent},
]

@NgModule({

  imports:[
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{

}
