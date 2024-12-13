import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormBase } from '../../../../bases/form.base';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { cities } from '../../../../utils/data/cities';
import { departments } from '../../../../utils/data/departments';
import { countries } from '../../../../utils/data/countries';

@Component({
  selector: 'app-address-info',
  standalone: true,
  imports: [DropdownModule, CommonModule, ReactiveFormsModule],
  templateUrl: './address-info.component.html',
  styleUrl: './address-info.component.scss'
})
export class AddressInfoComponent extends FormBase {

  cities: any = [];
  countries: any = [];
  departments: any = [];

  constructor(
    private controlContainer: ControlContainer
  ) {
    super();
  }

  ngOnInit(): void {
    this.init();
  }
  
  init() {
    this.departments = departments;
    this.countries = countries;
    const form = this.controlContainer.control as FormGroup;
    this.load(form);
  }

  validateCountry() {
    console.log('country');
    const country = this.getControl('country').value;
    if (country.code === 'COL') {
      this.getControl('Deparment').enable();
      this.getControl('City').disable();
      return;
    }
    this.cities = cities.filter(c => c.country === country.code);
    this.getControl('City').enable();
    this.getControl('Deparment').disable();
    return;
  }

  validateDepartment() {
    this.getControl('City').enable();
    const department = this.getControl('Deparment').value;
    this.cities = cities.filter(c => c.deparment === department.code);
  }

}
