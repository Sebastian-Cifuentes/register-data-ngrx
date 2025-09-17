import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroup, FormControl, FormGroupDirective, ControlContainer } from '@angular/forms';
import { PersonalInfoComponent } from './personal-info.component';

describe('PersonalInfoComponent', () => {
  let fixture: ComponentFixture<PersonalInfoComponent>;
  let component: PersonalInfoComponent;

  // ✅ create a real FormGroup that your component will bind to
  const mockFormGroup = new FormGroup({
    sex: new FormControl(''),
    name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    addres: new FormControl(''),
    date_birthday: new FormControl(''),
  });

  // ✅ mock FormGroupDirective and attach the form
  const mockFormGroupDirective = new FormGroupDirective([], []);
  mockFormGroupDirective.form = mockFormGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalInfoComponent, ReactiveFormsModule], // ✅ standalone goes in imports
      providers: [
        { provide: ControlContainer, useValue: mockFormGroupDirective },
        { provide: FormGroupDirective, useValue: mockFormGroupDirective },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
