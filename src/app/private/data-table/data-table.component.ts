import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { Observable } from 'rxjs';
import { loadUsers } from '../../state/actions/users.actions';
import { selectUsersList, selectUsersLoading } from '../../state/selectors/users.selectors';


@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [TableModule, InputTextModule, AsyncPipe],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {

  loading$: Observable<boolean> = new Observable();
  users$: Observable<any> = new Observable();

  constructor(
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.loading$ = this.store.select(selectUsersLoading);
    this.users$ = this.store.select(selectUsersList);
    this.store.dispatch(loadUsers());
  }
}
