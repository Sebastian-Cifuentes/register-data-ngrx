import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { UserFacade } from '../../share/facades/usersFacade.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { UserState } from '../../interfaces/user.state';
import { User } from '../../interfaces/user.interface';
import { selectUserById } from '../../state/selectors/users.selectors';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  let store: MockStore;

  const initialUsersState: UserState = {
    loading: false,
    users: [
      {
        "id": 1,
        "sex": "Hombre",
        "date_birthday": "1989-01-15",
        "name": "Juan",
        "last_name": "Perez",
        "email": "tes1@tes.com",
        "addres": "Calle falsa 123 apto 201",
        "country": "Colombia",
        "Deparment": "Cundinamarca",
        "City": "Bogota",
        "comment": "Comentario de prueba"
		  },
      {
        "id": 2,
        "sex": "Mujer",
        "date_birthday": "2000-01-15",
        "name": "Andre",
        "last_name": "lopez",
        "email": "tes2@tes.com",
        "addres": "Calle falsa 123 apto 202",
        "country": "Colombia",
        "Deparment": "Valle",
        "City": "Cali",
        "comment": "Comentario de prueba 2"
      },
    ],
    filters: {
      sex: '  Mujer',
      country: 'Colombia',
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormComponent],
      providers: [
        UserFacade,
        provideMockStore({ initialState: { users: initialUsersState } }),
        { provide: UserFacade, useClass: UserFacade },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ id: '123' }) },
            params: of({ id: '123' })
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    component.id = '2';
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the last id from users list', () => {
    expect(component.lastUserId).toBe(2);
  });

  it('should get user from id route', (done) => {
    fixture.detectChanges();

    component.user$!.subscribe({
      next: (user: User | undefined) => {
        expect(user!.name).toEqual('Andre');
        done();
      }
    });
  });
});
