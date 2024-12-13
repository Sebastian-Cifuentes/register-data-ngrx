import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBase } from '../../../../bases/form.base';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent extends FormBase {

  constructor(
    private controlContainer: ControlContainer
  ) {
    super();
  }

  ngOnInit(): void {
    this.init();
  }
  
  init() {
    const form = this.controlContainer.control as FormGroup;
    this.load(form);
  }

}
