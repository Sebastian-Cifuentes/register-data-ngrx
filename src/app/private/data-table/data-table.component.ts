import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { Observable } from 'rxjs';
import { clearFilter, setFilter, deleteUser } from '../../state/actions/users.actions';
import { selectFilteredUsers, selectUsersLoading } from '../../state/selectors/users.selectors';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [TableModule, InputTextModule, AsyncPipe, ButtonModule, CalendarModule, RouterModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {

  loading$: Observable<boolean> = new Observable();
  filteredUsers$: Observable<any> = new Observable();

  constructor(
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.loading$ = this.store.select(selectUsersLoading);
    this.filteredUsers$ = this.store.select(selectFilteredUsers);
    this.store.dispatch(clearFilter());
  }

  onFilterChange(field: string, value: any) {
    value = value.value;
    this.store.dispatch(
      setFilter({ filters: { [field]: value } })
    );
  }

  deleteUser(id: number) {
    this.store.dispatch(deleteUser({id}));
  }
}
