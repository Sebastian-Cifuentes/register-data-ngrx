import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { format } from 'date-fns';
import { Observable, Subscription } from 'rxjs';
import { InfoComponent } from './component/info/info.component';
import { ageValidator } from '../../utils/validators/age.validator';
import { PersonalInfoComponent } from './component/personal-info/personal-info.component';
import { AddressInfoComponent } from './component/address-info/address-info.component';
import { CommentsComponent } from './component/comments/comments.component';
import { User } from '../../interfaces/user.interface';
import { UserFacade } from '../../share/facades/usersFacade.service';
import { UserFormFactory } from './services/user-form.factory';
import { UserMapper } from './services/user.mapper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    InfoComponent, 
    ReactiveFormsModule, 
    PersonalInfoComponent, 
    AddressInfoComponent, 
    CommentsComponent, 
    ButtonModule,
    CommonModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  
  @Input() id!: string;
  lastUserId!: number;
  form!: FormGroup;
  user$!: Observable<User | undefined>;

  constructor(
    private router: Router,
    private userFacade: UserFacade,
    private formFactory: UserFormFactory,
    private mapper: UserMapper
  ) {}

  ngOnInit() {
    this.form = this.formFactory.createForm();
    this.userFacade.lastUserId$.subscribe(id => this.lastUserId = id ?? undefined);
    if (this.id) {
      this.user$ = this.userFacade.userById(this.id);
    }
  }

  save(lastUserId: number) {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const user = this.mapper.toDomain(this.form.value, lastUserId, this.id);

    if (this.id) {
      this.userFacade.editUser(user);
    } else {
      this.userFacade.addUser(user);
    }

    this.router.navigateByUrl('data');
  }
}
