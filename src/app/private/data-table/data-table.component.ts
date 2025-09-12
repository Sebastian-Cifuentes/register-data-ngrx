import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Observable, take } from 'rxjs';
import { UserFacade } from '../../share/facades/usersFacade.service';
import { ExportFactory } from '../../share/export/export-factory.service';

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
  providers: [
    MessageService,
  ]
})
export class DataTableComponent {

  loading$: Observable<boolean> = new Observable();
  filteredUsers$: Observable<any> = new Observable();

  constructor(
    private messageService: MessageService,
    private userFacade: UserFacade,
    private exportFactory: ExportFactory
  ) {}

  ngOnInit() {
    // this.userFacade.loadUsers();
    this.loading$ = this.userFacade.loading$;
    this.filteredUsers$ = this.userFacade.filteredUsers$;
    this.userFacade.clearFilter();
  }

  onFilterChange(field: string, value: any) {
    value = value.value;
    this.userFacade.setFilter({ [field]: value });
  }

  deleteUser(id: number) {
    this.showMessage('El contacto ha sido eliminado.', 'Borrado');
    this.userFacade.deleteUser(id);
  }

  showMessage(detail: string, summary: string) {
    this.messageService.add({ severity: 'success', summary, detail });
  }

  export(type: 'csv' | 'pdf' | 'excel') {
    this.userFacade.filteredUsers$
      .pipe(take(1))
      .subscribe(data => {
        const exportStrategy = this.exportFactory.getStrategy(type);
        exportStrategy.export(data);
      });
  }
}
