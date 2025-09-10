import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

/** Environments */
import { environment } from '../../environments/environment';

/** Interfaces */
import { IApiService } from '../interfaces/api.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements IApiService {
  private httpClient: HttpClient;
  protected apiUrl = environment.apiUrl;

  constructor(
    protected injector: Injector
  ) {
    this.httpClient = injector.get(HttpClient)
  }

  get<T>(path: string, options: { [param: string]: unknown } = {}): Observable<T> {
    return this.httpClient.get<T>(`${this.apiUrl}${path}`, options);
  }
  
}
