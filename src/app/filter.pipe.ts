import { Pipe, PipeTransform } from "@angular/core";
import { Countries } from "./models/countries.model";
@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(value: Countries[], filter: string, filterProp: string): any {
    if (value.length === 0 || filter === "") {
      return value;
    }
    return value.filter(country =>
      country[filterProp].toLowerCase().includes(filter.toLowerCase())
    );
  }
}
