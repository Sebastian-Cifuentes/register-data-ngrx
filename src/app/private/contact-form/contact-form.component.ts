import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { InfoComponent } from './component/info/info.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FloatLabelModule, DropdownModule, CalendarModule, InfoComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  cities: any = [];
  sexs: any = [];
  countries: any = [];
  departments: any = [];

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
        { name: 'Colombia,', code: 'COL' },
        { name: 'Argentina', code: 'ARG' },
        { name: 'México', code: 'MEX' },
    ];
}

}
