import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ageValidator } from "../../../utils/validators/age.validator";

@Injectable({ providedIn: 'root' })
export class UserFormFactory {
  createForm(): FormGroup {
    return new FormGroup({
      sex: new FormControl('', Validators.required),
      date_birthday: new FormControl('', [Validators.required, ageValidator(18)]),
      name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      addres: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      Deparment: new FormControl({ value: '', disabled: true }, Validators.required),
      City: new FormControl({ value: '', disabled: true }, Validators.required),
      comment: new FormControl('', Validators.required),
    });
  }
}