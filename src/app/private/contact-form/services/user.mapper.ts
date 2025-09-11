import { Injectable } from "@angular/core";
import { format } from "date-fns";
import { User } from "../../../interfaces/user.interface";

@Injectable({ providedIn: 'root' })
export class UserMapper {
  toDomain(formValue: any, lastUserId: number, id?: string): User {
    const date_birthday = format(formValue.date_birthday, 'yyyy-MM-dd');
    return {
      ...formValue,
      id: id ? +id : lastUserId + 1,
      country: formValue.country.name,
      Deparment: formValue.Deparment ? formValue.Deparment.name : '',
      City: formValue.City.name,
      date_birthday
    };
  }
}