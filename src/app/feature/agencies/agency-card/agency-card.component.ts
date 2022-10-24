import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IAgency } from '../shared/models/agency.model';

@Component({
  selector: 'app-agency-card',
  templateUrl: './agency-card.component.html',
  styleUrls: ['./agency-card.component.scss'],
})
export class AgencyCardComponent implements OnInit {
  @Input() agency: IAgency;
  @Input() index: number;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  seeDetails() {
    this.router.navigateByUrl(`details/${this.index}`);
  }
}
