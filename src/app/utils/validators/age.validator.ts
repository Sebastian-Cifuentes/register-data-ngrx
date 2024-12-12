import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const ageValidator: any = (minAge: number): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
        const birthDate = new Date(control.value);
        if (!birthDate || isNaN(birthDate.getTime())) {
            return null;
        }

        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const isBirthdayPassed = 
            today.getMonth() > birthDate.getMonth() || 
            (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

        const calculatedAge = isBirthdayPassed ? age : age - 1;

        return calculatedAge >= minAge ? null : { age: true };
    };
}