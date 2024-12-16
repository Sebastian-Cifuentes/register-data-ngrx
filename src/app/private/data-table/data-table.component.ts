import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Observable } from 'rxjs';
import { clearFilter, setFilter, deleteUser } from '../../state/actions/users.actions';
import { selectFilteredUsers, selectUsersLoading } from '../../state/selectors/users.selectors';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [
    TableModule, 
    InputTextModule, 
    AsyncPipe, 
    ButtonModule, 
    CalendarModule, 
    RouterModule,
    ToastModule
  ],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
  providers: [MessageService]
})
export class DataTableComponent {

  loading$: Observable<boolean> = new Observable();
  filteredUsers$: Observable<any> = new Observable();

  constructor(
    private store: Store<any>,
    private messageService: MessageService
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
    this.showMessage('El contacto ha sido eliminado.', 'Borrado');
    this.store.dispatch(deleteUser({id}));
  }

  showMessage(detail: string, summary: string) {
    this.messageService.add({ severity: 'success', summary, detail });
  }
}
