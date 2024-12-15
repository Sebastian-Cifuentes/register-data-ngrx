import { createAction, props } from '@ngrx/store';
import { User } from '../../interfaces/user.interface';

export const loadUsers = createAction(
  '[Users List] Load users'
);

export const loadedUsers = createAction(
    '[Users list] Loaded success',
    props<{users: User[]}>()
);

export const addUser = createAction(
    '[Users list] Add user',
    props<{user: User}>()
);