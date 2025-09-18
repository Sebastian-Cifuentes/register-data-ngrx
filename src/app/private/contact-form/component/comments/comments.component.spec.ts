import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsComponent } from './comments.component';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;

  const mockFormGroup = new FormGroup({
    comment: new FormControl('')
  });

  const mockFormGroupDirective = new FormGroupDirective([], []);
  mockFormGroupDirective.form = mockFormGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsComponent, ReactiveFormsModule],
      providers: [
        { provide: ControlContainer, useValue: mockFormGroupDirective },
        { provide: FormGroupDirective, useValue: mockFormGroupDirective },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
