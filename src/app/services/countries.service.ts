import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API, FIELDS } from "../constants/api.constants";

@Injectable({ providedIn: "root" })
export class CountriesService {
  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get(`${API}/all${FIELDS}`);
  }

  getCountriesByRegion(region: string) {
    return this.http.get(`${API}/region/${region}${FIELDS}`);
  }

  getCountryByName(name: string) {
    return this.http.get(`${API}/name/${name}${FIELDS}`);
  }

  getCountryByCode(code: string) {
    return this.http.get(`${API}/alpha/${code}`);
  }
}
