import { Component ,OnInit } from '@angular/core';
import {CountriesService} from './services/countries.service'
import {Countries} from './models/countries.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private countriesService : CountriesService){}
  title = 'countries-finder';
  countries:Countries[];
  isLoading: boolean = false;
  ngOnInit(){
    this.getAll()
  }
  getAllCountries(){
    this.getAll()
  }

  getAll(){
    this.isLoading= true
    this.countriesService.getAllCountries()
    .subscribe((response: Countries[])=>{
      this.isLoading = false;
      this.countries = response;
      console.log('data',response)
    })
  }
}
