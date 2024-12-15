import { createSelector } from '@ngrx/store';
import { AppState } from '../../interfaces/app.state';
import { UserState } from '../../interfaces/user.state';
import { User } from '../../interfaces/user.interface';
import { City } from '../../interfaces/city.interface';

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

export const selectUserById = (id: string) => createSelector(
    selectUsersList,
    (users) => users.find((user) => user.id === +id)
);

export const selectUsersFilters = createSelector(
    selectUsersFeature,
    (state: UserState) => state.filters
);

export const selectFilteredUsers = createSelector(
    selectUsersList,
    selectUsersFilters,
    (users: any, filters: any) =>
        users.filter((user: any) => {
            return (
                (!filters.name || user.name.toLowerCase().includes(filters.name.toLowerCase())) &&
                (!filters.last_name || user.last_name.toLowerCase().includes(filters.last_name.toLowerCase())) &&
                (!filters.email || user.email.toLowerCase().includes(filters.email.toLowerCase())) &&
                (!filters.addres || user.addres.toLowerCase().includes(filters.addres.toLowerCase())) &&
                (!filters.country || user.country.toLowerCase().includes(filters.country.toLowerCase())) &&
                (!filters.Deparment || user.Deparment.toLowerCase().includes(filters.Deparment.toLowerCase())) &&
                (!filters.City || user.City.toLowerCase().includes(filters.City.toLowerCase())) &&
                (!filters.comment || user.comment.toLowerCase().includes(filters.comment.toLowerCase())) &&
                (!filters.sex || user.sex.toLowerCase().includes(filters.sex.toLowerCase())) &&
                (!filters.date_birthday || user.date_birthday === filters.date_birthday)
              );
            })
);
