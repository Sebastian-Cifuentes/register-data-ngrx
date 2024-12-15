import { createReducer, on } from "@ngrx/store";
import { User } from "../../interfaces/user.interface";
import { addUser, clearFilter, loadedUsers, loadUsers, setFilter } from "../actions/users.actions";
import { UserState } from "../../interfaces/user.state";

export const initialState: UserState = {loading: false, users: [], filters: {}};

export const userFeatureKey = 'users';

export const userReducer = createReducer(
    initialState,
    on(loadUsers, (state) => {
        return { ...state, loading: true }
    }),
    on(loadedUsers, (state, {users}) => {
        return { ...state, loading: false, users }
    }),
    on(addUser, (state, {user}) => {
        return { ...state, loading: false, users: [...state.users, ...[user]] }
    }),
    on(setFilter, (state, { filters }) => {
        return { ...state, loading: false, filters: { ...state.filters, ...filters } }
    }),
    on(clearFilter, (state) => {
        return { ...state, loading: false, filters: { } }
    }),
  );