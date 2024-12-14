import { Injectable, Injector } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../interfaces/user.interface';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiService {

  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  getUsers(): Observable<{users: User[]}> {
    return this.get('');
  }

}
