import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressInfoComponent } from './address-info.component';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

describe('AddressInfoComponent', () => {
  let component: AddressInfoComponent;
  let fixture: ComponentFixture<AddressInfoComponent>;

    const mockFormGroup = new FormGroup({
      addres: new FormControl(''),
      country: new FormControl(''),
      Deparment: new FormControl(''),
      City: new FormControl(''),
    });
  
    const mockFormGroupDirective = new FormGroupDirective([], []);
    mockFormGroupDirective.form = mockFormGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressInfoComponent, ReactiveFormsModule],
      providers: [
        { provide: ControlContainer, useValue: mockFormGroupDirective },
        { provide: FormGroupDirective, useValue: mockFormGroupDirective },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
