import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { format } from 'date-fns';
import { Subscription } from 'rxjs';
import { InfoComponent } from './component/info/info.component';
import { ageValidator } from '../../utils/validators/age.validator';
import { PersonalInfoComponent } from './component/personal-info/personal-info.component';
import { AddressInfoComponent } from './component/address-info/address-info.component';
import { CommentsComponent } from './component/comments/comments.component';
import { User } from '../../interfaces/user.interface';
import { addUser, editUser } from '../../state/actions/users.actions';
import { selectLastUserId, selectUserById } from '../../state/selectors/users.selectors';



@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    InfoComponent, 
    ReactiveFormsModule, 
    PersonalInfoComponent, 
    AddressInfoComponent, 
    CommentsComponent, 
    ButtonModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  

  lastUserId!: number;
  suscription!: Subscription;

  form!: FormGroup;
  @Input() id!: string;
  user!: User;

  constructor(
    private store: Store<any>,
    private router: Router,
  ) {}

  ngOnInit() {
    this.suscription = this.store.select(selectLastUserId).subscribe(id => this.lastUserId = id);
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
    if (this.id) {
      this.suscription = this.store.select(selectUserById(this.id)).subscribe(user => this.user = user!);
    }
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
    if (this.id) {
      user.id = +this.id;
      this.store.dispatch(editUser({user}));
    } else {
      user.id = this.lastUserId + 1;
      this.store.dispatch(addUser({user}));
    }
    this.router.navigateByUrl('data');
  }
}
