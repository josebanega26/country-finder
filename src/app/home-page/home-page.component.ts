import { Component, OnInit, OnDestroy } from "@angular/core";
import { CountriesService } from "../services/countries.service";
import { Countries } from "../models/countries.model";
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit, OnDestroy {
  constructor(
    private titleService: Title,
    private countriesService: CountriesService,
    private router: Router) { }
  filterCountry: string = '';
  filterByRegion: string = ''
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
    this.titleService.setTitle(`Country Finder | Home`)
    this.getAll();
  }
  ngOnDestroy() {

  }
  getAllCountries() {
    this.getAll();
  }
  /**
   * country details
   */
  goToDetail(event: string) {
    this.router.navigate(['/detail', event.toLowerCase()])
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
      });
  }
}
