import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, delay } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';

@Injectable()
export class UsersEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType('[Users List] Load users'),
    exhaustMap(() => this.userService.getUsers()
      .pipe(
        map(({users}) => ({ type: '[Users List] Loaded success', users })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UsersService
  ) {}
}