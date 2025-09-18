import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { UserFacade } from '../../share/facades/usersFacade.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

class MockUserFacade {
  loadUsers = jest.fn();
  users$ = { subscribe: jest.fn() }; // mimic observable
}
describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormComponent],
      providers: [
        UserFacade,
        provideMockStore({ initialState: {} }),
        { provide: 'UserFacade', useClass: MockUserFacade },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: new Map([['id', '123']]) },
            params: of({ id: '123' }),
            queryParams: of({ filter: 'all' })
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
