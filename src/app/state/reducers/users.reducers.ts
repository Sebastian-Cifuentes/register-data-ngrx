import { createReducer, on } from "@ngrx/store";
import { User } from "../../interfaces/user.interface";
import { addUser, loadedUsers, loadUsers } from "../actions/users.actions";
import { UserState } from "../../interfaces/user.state";

export const initialState: UserState = {loading: false, users: []};

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
  );