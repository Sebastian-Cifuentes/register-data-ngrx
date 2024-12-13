import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormBase } from '../../../../bases/form.base';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { sex } from '../../../../utils/data/sex';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [DropdownModule, CommonModule, CalendarModule, ReactiveFormsModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss'
})
export class PersonalInfoComponent extends FormBase {

  sexs: any = [];

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
  }

}
