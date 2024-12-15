import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InfoComponent } from './component/info/info.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ageValidator } from '../../utils/validators/age.validator';
import { countries } from '../../utils/data/countries';
import { departments } from '../../utils/data/departments';
import { sex } from '../../utils/data/sex';
import { PersonalInfoComponent } from './component/personal-info/personal-info.component';
import { AddressInfoComponent } from './component/address-info/address-info.component';
import { CommentsComponent } from './component/comments/comments.component';
import { Store } from '@ngrx/store';
import { format } from 'date-fns';
import { User } from '../../interfaces/user.interface';
import { addUser } from '../../state/actions/users.actions';
import { Observable, Subscription } from 'rxjs';
import { selectLastUserId } from '../../state/selectors/users.selectors';
import { Country } from '../../interfaces/country.interface';
import { Department } from '../../interfaces/department.interface';
import { City } from '../../interfaces/city.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [InfoComponent, ReactiveFormsModule, PersonalInfoComponent, AddressInfoComponent, CommentsComponent, ButtonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  lastUserId!: number;
  suscription!: Subscription;

  cities: any = [];
  sexs: any = [];
  countries: any = [];
  departments: any = [];

  form!: FormGroup;
  @Input() id!: number;

  constructor(
    private store: Store<any>,
    private router: Router
  ) {}

  ngOnInit() {
    this.suscription = this.store.select(selectLastUserId).subscribe(id => this.lastUserId = id);
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

  ngOnDestroy(): void {
    if (this.suscription) {
      this.suscription.unsubscribe();
    }
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    let date_birthday = this.form.value.date_birthday;
    date_birthday = format(date_birthday, 'yyyy-MM-dd');
    this.form.value.country = this.form.value.country.name;
    this.form.value.Deparment = this.form.value.Deparment ? this.form.value.Deparment.name : '';
    this.form.value.City = this.form.value.City.name;
    const user: User = { ...this.form.value, date_birthday }
    user.id = this.lastUserId + 1;
    this.store.dispatch(addUser({user}));
    this.router.navigateByUrl('data');
  }
}
