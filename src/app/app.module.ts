import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NavBarComponent } from './Landing-page/nav-bar/nav-bar.component';
import { MainLandingPageComponent } from './Landing-page/main-landing-page/main-landing-page.component';
import { FooterComponent } from './Landing-page/footer/footer.component';
import { ServicesComponent } from './Landing-page/main-landing-page/services/services.component';
import { MeetDoctorsComponent } from './Landing-page/main-landing-page/meet-doctors/meet-doctors.component';
import { FeedbackComponent } from './Landing-page/main-landing-page/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainLandingPageComponent,
    FooterComponent,
    ServicesComponent,
    MeetDoctorsComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }