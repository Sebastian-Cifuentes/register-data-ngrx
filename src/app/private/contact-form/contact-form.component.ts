import { Component, Input } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { InfoComponent } from './component/info/info.component';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormErrorService } from '../../services/form-error.service';
import { ageValidator } from '../../utils/validators/age.validator';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FloatLabelModule, DropdownModule, CalendarModule, InfoComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  cities: any = [];
  sexs: any = [];
  countries: any = [];
  departments: any = [];

  form!: FormGroup;
  @Input() id!: number;

  constructor(
    private _formErrorService: FormErrorService
  ) {}

  ngOnInit() {
    this.cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    this.sexs = [
        { name: 'Masculino', code: 'M' },
        { name: 'Femenino', code: 'F' }
    ];
    this.departments = [
        { name: 'Amazonas', code: 'LDN' },
        { name: 'Cundinamarca', code: 'NY' },
        { name: 'Boyacá', code: 'RM' },
    ];
    this.countries = [
        { name: 'Colombia', code: 'COL' },
        { name: 'Argentina', code: 'ARG' },
        { name: 'México', code: 'MEX' },
    ];
    this.form = new FormGroup({
      sex: new FormControl('', Validators.required),
      date_birthday: new FormControl('', [Validators.required, ageValidator(18)]),
      name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      addres: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      Deparment: new FormControl('', Validators.required),
      City: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.required),
    });
  }

  save() {
    console.log(this.form);
  }

  getError(control: string): boolean {
    return this.form.get(control)!.invalid && this.form.get(control)!.touched;
  }

  getErrorMessage(control: string): string[] {
    if (this.getError(control)) {
      return this._formErrorService.mapErrors(this.form.get(control)!);
    }
    return [];
  }
}
