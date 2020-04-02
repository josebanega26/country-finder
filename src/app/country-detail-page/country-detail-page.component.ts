import { Component, OnInit } from "@angular/core";
import { Router,ActivatedRoute } from "@angular/router";
import { CountriesService } from "../services/countries.service";
@Component({
  selector: "app-country-detail-page",
  templateUrl: "./country-detail-page.component.html",
  styleUrls: ["./country-detail-page.component.scss"]
})
export class CountryDetailPageComponent implements OnInit {
  constructor(
    private route:Router,
    private router: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  isLoading: boolean = false;
  country: any;
  codeOfCountry: string;
  ngOnInit(): void {
    this.codeOfCountry = this.router.snapshot.params["country"];
    this.getCountry(this.codeOfCountry);
    this.router.params.subscribe(params => {
      this.codeOfCountry = params["country"];
      this.getCountry(this.codeOfCountry);
    });
  }

  getCountry(codeOfCountry: string) {
    this.isLoading = true;
    this.countriesService.getCountryByCode(codeOfCountry).subscribe(country => {
      this.isLoading = false;
      this.country = country;
      console.log("country", country);
    });
  }

  goHome(){
    this.route.navigate(['/'])
  }

  goToBorder(border: string){
    this.route.navigate(['/detail',border])
  }
}
