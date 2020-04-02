import { Component, OnInit } from "@angular/core";
import { CountriesService } from "./services/countries.service";
import { Countries } from "./models/countries.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
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

  onResize(event){
    event.target.innerWidth >= 1024 ? 4 : 
    (event.target.innerWidth >= 768 && window.innerWidth < 1023) ? 2 : 1
  }
  //   $PHONE: "(max-width: 767px)";
  // $TABLET: "(min-width: 768px) and (max-width: 1023px)";
  // $DESKTOP: "(max-width: 1024px)";
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
