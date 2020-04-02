import { Component, OnInit, Input } from '@angular/core';
import {Countries} from '../models/countries.model'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() country:Countries
  constructor() { }

  ngOnInit(): void {
  }

}
