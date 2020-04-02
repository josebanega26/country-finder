import { Component, OnInit } from "@angular/core";
import { CountriesService } from "../services/countries.service";
import { Countries } from "../models/countries.model";
import { Router } from '@angular/router';
@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  constructor(private countriesService: CountriesService, private router: Router) { }
  filterCountry: string = '';
  filterByRegion: string =''
  breakpoint: number = 4;
  countries: Countries[];
  isLoading: boolean = false;
  regions: any[] = [
    { value: '', viewValue: 'Filter By Region' },
    { value: 'africa', viewValue: 'Africa' },
    { value: 'america', viewValue: 'America' },
    { value: 'asia', viewValue: 'Asia' },
    { value: 'europe', viewValue: 'Europe' },
    { value: 'oceania', viewValue: 'Oceania' },
  ]
  ngOnInit() {
    this.breakpoint = this.getBreakpoint();
    this.getAll();
  }
  getAllCountries() {
    this.getAll();
  }
  /**
   * country details
   */
  goToDetail(event:string){
      this.router.navigate(['/detail',event.toLowerCase()])
  }
  /**
   * Resize Grid view
   */
  getBreakpoint(): number {
    if (window.innerWidth >= 1024) {
      return 4;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1023) {
      return 2;
    } else {
      return 1;
    }
  }

  onResize(event) {
    console.log('event', event.target.innerWidth)
    this.breakpoint = event.target.innerWidth >= 1024
      ? 4
      : event.target.innerWidth >= 768 && window.innerWidth < 1023
        ? 2
        : 1;
  }
  /**
   * Api Call for all the countries
   */
  getAll() {
    this.isLoading = true;
    this.countriesService
      .getAllCountries()
      .subscribe((response: Countries[]) => {
        this.isLoading = false;
        this.countries = response;
        console.log("data", response);
      });
  }
}
