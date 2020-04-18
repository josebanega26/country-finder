import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CountriesService } from "../services/countries.service";
import { Title} from '@angular/platform-browser';
import { Subscription } from "rxjs";
@Component({
  selector: "app-country-detail-page",
  templateUrl: "./country-detail-page.component.html",
  styleUrls: ["./country-detail-page.component.scss"]
})
export class CountryDetailPageComponent implements OnInit, OnDestroy {
  constructor(
    private titleService: Title,
    private route: Router,
    private router: ActivatedRoute,
    private countriesService: CountriesService
  ) {}
  paramsSubscription: Subscription;
  isLoading: boolean = false;
  country: any;
  codeOfCountry: string;
  languages: string;
  ngOnInit(): void {
    this.codeOfCountry = this.router.snapshot.params["country"];
    this.getCountry(this.codeOfCountry);
    this.paramsSubscription = this.router.params.subscribe(params => {
      this.codeOfCountry = params["country"];
      this.getCountry(this.codeOfCountry);
    });
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
  getCountry(codeOfCountry: string) {
    this.isLoading = true;
    this.countriesService.getCountryByCode(codeOfCountry).subscribe((country:any) => {
      this.isLoading = false;
      this.titleService.setTitle(`Country Finder | Detail of ${country.name}`)
      this.country = country;
      this.formatingLanguage(this.country.languages);
    });
  }

  formatingLanguage(languages: any[]){
    const arrayLanguages:any[] = languages.map(item => item.name)
    this.languages = arrayLanguages.join(', ')
  }
  goHome() {
    this.route.navigate(["/"]);
  }

  goToBorder(border: string) {
    this.route.navigate(["/detail", border.toLocaleLowerCase()]);
  }
}
