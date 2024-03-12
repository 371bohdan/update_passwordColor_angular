import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password.input.component.css']
})
export class PasswordInputComponent {
  form: FormGroup;

  @Output() onInput: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      password: [''] // початкове значення
    });
  }

  emitInputValue() {
    const control = this.form.get('password');
    if (control) {
      const password = control.value;
      this.onInput.emit(password);
    }
  }
}
