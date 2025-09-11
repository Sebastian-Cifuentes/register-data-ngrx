import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectFilteredUsers, selectLastUserId, selectUserById, selectUsersLoading } from "../../state/selectors/users.selectors";
import { AppState } from "../../interfaces/app.state";
import { deleteUser, loadUsers, clearFilter, setFilter, editUser, addUser } from '../../state/actions/users.actions';
import { UserState } from "../../interfaces/user.state";
import { Observable } from "rxjs";
import { User } from "../../interfaces/user.interface";

@Injectable({ providedIn: 'root' })
export class UserFacade {

    loading$ = this.store.select(selectUsersLoading);
    filteredUsers$ = this.store.select(selectFilteredUsers);
    lastUserId$ = this.store.select(selectLastUserId);

    constructor(
        private store: Store<AppState>
    ) {

    }

    userById(id: string): Observable<User | undefined> {
        return this.store.select(selectUserById(id)) ?? undefined;
    }

    deleteUser(id: number) {
        this.store.dispatch(deleteUser({id}));
    }

    editUser(user: User) {
        this.store.dispatch(editUser({user}));
    }

    addUser(user: User) {
        this.store.dispatch(addUser({user}));
    }

    loadUsers() {
        this.store.dispatch(loadUsers());
    }

    clearFilter() {
        this.store.dispatch(clearFilter());
    }

    setFilter(filters: Partial<UserState['filters']>) {
        this.store.dispatch(
            setFilter({ filters })
        );
    }

}