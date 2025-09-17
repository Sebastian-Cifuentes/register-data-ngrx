import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableComponent } from './data-table.component';
import { UserFacade } from '../../share/facades/usersFacade.service';

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { EXPORT_STRATEGIES } from '../../share/export';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

class MockUserFacade {
  loadUsers = jest.fn();
  users$ = { subscribe: jest.fn() }; // mimic observable
}
describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;
  let store: MockStore;

  beforeEach(async () => {
    TestBed.overrideComponent(DataTableComponent, {
      set: { styleUrls: [], styles: [] }
    });
    await TestBed.configureTestingModule({
      imports: [DataTableComponent],
      providers: [
        UserFacade,
        provideMockStore({ initialState: {} }),
        {
          provide: EXPORT_STRATEGIES,
          useValue: [
            { name: 'mock-csv', execute: jest.fn() },
            { name: 'mock-pdf', execute: jest.fn() },
          ]
        },
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

    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
