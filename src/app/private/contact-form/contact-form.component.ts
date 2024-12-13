import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InfoComponent } from './component/info/info.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrorService } from '../../services/form-error.service';
import { ageValidator } from '../../utils/validators/age.validator';
import { countries } from '../../utils/data/countries';
import { departments } from '../../utils/data/departments';
import { sex } from '../../utils/data/sex';
import { PersonalInfoComponent } from './component/personal-info/personal-info.component';
import { AddressInfoComponent } from './component/address-info/address-info.component';
import { CommentsComponent } from './component/comments/comments.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [InfoComponent, ReactiveFormsModule, PersonalInfoComponent, AddressInfoComponent, CommentsComponent, ButtonModule],
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
    this.sexs = sex;
    this.departments = departments;
    this.countries = countries;
    this.form = new FormGroup({
      sex: new FormControl('', Validators.required),
      date_birthday: new FormControl('', [Validators.required, ageValidator(18)]),
      name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      addres: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      Deparment: new FormControl({value: '', disabled: true}, Validators.required),
      City: new FormControl({value: '', disabled: true}, Validators.required),
      comment: new FormControl('', Validators.required),
    });
  }

  save() {
    console.log(this.form);
  }
}
