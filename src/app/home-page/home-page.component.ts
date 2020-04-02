import { Component, OnInit } from "@angular/core";
import { CountriesService } from "../services/countries.service";
import { Countries } from "../models/countries.model";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  constructor(private countriesService: CountriesService) {}
  breakpoint: number = 4;
  countries: Countries[];
  isLoading: boolean = false;

  ngOnInit() {
    this.breakpoint = this.getBreakpoint();
    this.getAll();
  }
  getAllCountries() {
    this.getAll();
  }

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
    event.target.innerWidth >= 1024
      ? 4
      : event.target.innerWidth >= 768 && window.innerWidth < 1023
      ? 2
      : 1;
  }
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
