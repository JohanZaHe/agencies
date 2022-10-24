import { Component, OnInit } from '@angular/core';
import { IAgency } from './shared/models/agency.model';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.scss'],
})
export class AgenciesComponent implements OnInit {
  agencies: IAgency[] = [];
  constructor() {
    this.agencies = JSON.parse(localStorage.getItem('agenciesData'));
  }

  ngOnInit(): void {}
}
