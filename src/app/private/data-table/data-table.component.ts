import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { Observable } from 'rxjs';
import { clearFilter, loadUsers, setFilter } from '../../state/actions/users.actions';
import { selectFilteredUsers, selectUsersList, selectUsersLoading } from '../../state/selectors/users.selectors';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';


@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [TableModule, InputTextModule, AsyncPipe, ButtonModule, CalendarModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {

  loading$: Observable<boolean> = new Observable();
  filteredUsers$: Observable<any> = new Observable();

  constructor(
    private store: Store<any>,
    private router: Router
  ) {}

  ngOnInit() {
    this.loading$ = this.store.select(selectUsersLoading);
    this.filteredUsers$ = this.store.select(selectFilteredUsers);
    this.store.dispatch(clearFilter());
  }

  addContact() {
    this.router.navigate(['contact-form']);
  }

  onFilterChange(field: string, value: any) {
    value = value.value;
    // if (field === 'date_birthday' && value.value) {

    // } else {

    // }
    this.store.dispatch(
      setFilter({ filters: { [field]: value } })
    );
  }
}
