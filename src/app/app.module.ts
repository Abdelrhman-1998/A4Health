import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DotorSearchFieldComponent } from './Component/search_doctors/main/dotor-search-field/dotor-search-field.component';
import { SearchResultsComponent } from './Component/search_doctors/main/search_results/search-results/search-results.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RatingStarsPipe } from './Pipes/rating-stars.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import { NavBarComponent } from './Component/Landing-page/nav-bar/nav-bar.component';
import { MainLandingPageComponent } from './Component/Landing-page/main-landing-page/main-landing-page.component';
import { FooterComponent } from './Component/Landing-page/footer/footer.component';
import { ServicesComponent } from './Component/Landing-page/main-landing-page/services/services.component';
import {MeetDoctorsComponent } from './Component/Landing-page/main-landing-page/meet-doctors/meet-doctors.component';
import { FeedbackComponent } from './Component/Landing-page/main-landing-page/feedback/feedback.component';
import { BookWithDoctorComponent } from './Component/book-with-doctor/book-with-doctor.component';
import { ReviewComponent } from './Component/Review/review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainLandingPageComponent,
    FooterComponent,
    ServicesComponent,
    DotorSearchFieldComponent,
    SearchResultsComponent,
    RatingStarsPipe,
    MeetDoctorsComponent,
    FeedbackComponent,
    BookWithDoctorComponent,   
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
