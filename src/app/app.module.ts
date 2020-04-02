import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CountriesService} from '../app/services/countries.service'
import { Routes ,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { CardComponent } from './card/card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CountryDetailPageComponent } from './country-detail-page/country-detail-page.component';

const routes: Routes = [
  {path:'',component: HomePageComponent},
  {path:'detail/:country',component: CountryDetailPageComponent}];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    HomePageComponent,
    CountryDetailPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    RouterModule.forRoot(routes),
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
