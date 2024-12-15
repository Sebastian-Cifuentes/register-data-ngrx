import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { Observable } from 'rxjs';
import { loadUsers } from '../../state/actions/users.actions';
import { selectUsersList, selectUsersLoading } from '../../state/selectors/users.selectors';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [TableModule, InputTextModule, AsyncPipe, ButtonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {

  loading$: Observable<boolean> = new Observable();
  users$: Observable<any> = new Observable();

  constructor(
    private store: Store<any>,
    private router: Router
  ) {}

  ngOnInit() {
    this.loading$ = this.store.select(selectUsersLoading);
    this.users$ = this.store.select(selectUsersList);
  }

  addContact() {
    this.router.navigate(['contact-form']);
  }
}
