import { User } from "./user.interface";

export interface UserState {
    loading: boolean,
    users: ReadonlyArray<User>
}