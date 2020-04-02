import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { Routes ,RouterModule} from '@angular/router';

import {CountriesService} from '../app/services/countries.service'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CountryDetailPageComponent } from './country-detail-page/country-detail-page.component';
import { FilterPipe } from './filter.pipe';



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
    CountryDetailPageComponent,
    FilterPipe,
  ],
  imports: [
    FormsModule,
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
