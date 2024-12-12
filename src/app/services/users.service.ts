import { Injectable, Injector } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../interfaces/user.interface';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ApiService {

  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  getUsers(): Promise<{users: User[]}> {
    return this.get('');
  }

}
