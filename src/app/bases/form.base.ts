import { AbstractControl, FormGroup } from "@angular/forms";
import { FormErrorService } from "../services/form-error.service";
import { inject } from "@angular/core";
import { IFormBase } from "../interfaces/form-base.interface";

export abstract class FormBase implements IFormBase {

    parentForm!: FormGroup;
    formErrorService = inject(FormErrorService);

    constructor(
    ) {}

    load(form: FormGroup) {
        this.parentForm = form;
    }

    getControl(control: string): AbstractControl {
      return this.parentForm.get(control)!;
    }
    
    getError(control: string): boolean {
      return this.getControl(control)!.invalid && this.getControl(control)!.touched;
    }
  
    getErrorMessage(control: string): string[] {
      if (this.getError(control)) {
        return this.formErrorService.mapErrors(this.getControl(control)!);
      }
      return [];
    }

}