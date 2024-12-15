import { createSelector } from '@ngrx/store';
import { AppState } from '../../interfaces/app.state';
import { UserState } from '../../interfaces/user.state';
import { User } from '../../interfaces/user.interface';

export const selectUsersFeature = (state: AppState) => state.users;

export const selectUsersList = createSelector(
    selectUsersFeature,
    (state: UserState) => state.users
);

export const selectUsersLoading = createSelector(
    selectUsersFeature,
    (state: UserState) => state.loading
);

export const selectLastUserId = createSelector(
    selectUsersList,
    (users) => users[users.length - 1].id
);