import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FormBase } from '../../../../bases/form.base';
import { sex } from '../../../../utils/data/sex';
import { Sex } from '../../../../interfaces/sex.interface';
import { User } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [DropdownModule, CommonModule, CalendarModule, ReactiveFormsModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss'
})
export class PersonalInfoComponent extends FormBase {

  @Input() user!: User | null | undefined;
  sexs: Sex[] = [];

  constructor(
    private controlContainer: ControlContainer
  ) {
    super();
  }

  ngOnInit(): void {
    this.init();
  }
  
  init() {
    this.sexs = sex;
    const form = this.controlContainer.control as FormGroup;
    this.load(form);
    if (this.user) {
      this.setData();
    }
  }

  setData() {
    this.getControl('sex')?.setValue(this.user?.sex);
    this.getControl('name')?.setValue(this.user?.name);
    this.getControl('last_name')?.setValue(this.user?.last_name);
    this.getControl('email')?.setValue(this.user?.email);
    this.getControl('addres')?.setValue(this.user?.addres);
    this.getControl('date_birthday')?.setValue(new Date(this.user?.date_birthday ?? new Date()));
  }

}
