import { createAction, props } from '@ngrx/store';
import { User } from '../../interfaces/user.interface';
import { UserState } from '../../interfaces/user.state';

export const loadUsers = createAction(
    '[Users List] Load users'
);

export const loadedUsers = createAction(
    '[Users List] Loaded success',
    props<{users: User[]}>()
);

export const addUser = createAction(
    '[Users List] Add user',
    props<{user: User}>()
);

export const editUser = createAction(
    '[Users List] Edit user',
    props<{user: User}>()
);

export const deleteUser = createAction(
    '[Users List] Delete user',
    props<{id: number}>()
);

export const setFilter = createAction(
    '[Users List] Set Users Filter',
    props<{ filters: Partial<UserState['filters']> }>()
);

export const clearFilter = createAction(
    '[Users List] Clear Users Filter'
);