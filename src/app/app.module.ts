import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';

import {AppRoutingModule} from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { FeatureComponent } from './feature/feature.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { LocationComponent } from './location/location.component'
import { ImagesComponent } from './images/images.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";




@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    HeroBannerComponent,
    FeatureComponent,
    AboutComponent,
    ServicesComponent,
    FooterComponent,
    LocationComponent,

    ImagesComponent,
     ContactComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
      BrowserAnimationsModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
      HttpClientModule,
      ToastrModule.forRoot(), // Add this line

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
