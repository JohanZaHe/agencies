import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IAgency } from '../shared/models/agency.model';

@Component({
  selector: 'app-agency-detail',
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.scss'],
})
export class AgencyDetailComponent implements OnInit {
  agencyForm: FormGroup;
  id: number;
  agencies: IAgency[] = [];
  agency;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.agencies = JSON.parse(localStorage.getItem('agenciesData'));
    this.agency = this.agencies[this.id];
  }

  ngOnInit(): void {
    this.buildingForm();
  }

  buildingForm() {
    const agency = this.agencies[this.id];
    this.agencyForm = this.fb.group({
      agency: [agency.agencia],
      district: [agency.distrito],
      province: [agency.provincia],
      department: [agency.departamento],
      address: [agency.direccion],
      lat: [agency.lat],
      lon: [agency.lon],
    });
  }

  update() {
    const newData = {
      agencia: this.agencyForm.value.agency,
      distrito: this.agencyForm.value.district,
      provincia: this.agencyForm.value.province,
      departamento: this.agencyForm.value.department,
      direccion: this.agencyForm.value.address,
      lat: this.agencyForm.value.lat,
      lon: this.agencyForm.value.lon,
    };
    this.agencies[this.id] = newData;
    localStorage.setItem('agenciesData', JSON.stringify(this.agencies));
    this.location.back();
  }
}
