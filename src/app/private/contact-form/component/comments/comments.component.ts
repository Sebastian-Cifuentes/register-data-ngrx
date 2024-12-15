import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBase } from '../../../../bases/form.base';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent extends FormBase {

  @Input() user!: User;

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
    if (this.user) {
      this.setData();
    }
  }

  setData() {
    this.getControl('comment').patchValue(this.user.comment);
  }

}
