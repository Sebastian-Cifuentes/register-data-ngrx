import { User } from "./user.interface";

export interface UserState {
    loading: boolean,
    users: ReadonlyArray<User>,
    filters: {
        sex?: string;
        date_birthday?: string;
        name?: string;
        last_name?: string;
        email?: string;
        addres?: string;
        country?: string;
        Deparment?: string;
        City?: string;
        comment?: string;
    };
}