import { Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DataTableComponent } from './data-table/data-table.component';

/** Components */


export const PRIVATE_ROUTES: Routes = [
    {
        path: 'contact-form',
        component: ContactFormComponent
    },
    {
        path: 'data',
        component: DataTableComponent
    },
    {
        path: 'contact-form/:id',
        component: ContactFormComponent
    },
    {
        path: '**',
        redirectTo: 'contact-form'
    }
];

