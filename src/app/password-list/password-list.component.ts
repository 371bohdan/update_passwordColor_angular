import { Component } from '@angular/core';
import { FieldColor } from '../field-color.enum';
import { PasswordService } from '../password.service';
import { FieldsState } from '../fields-state'; // Adjust the path as necessary

@Component({
  selector: 'app-password-list',
  templateUrl: './password-list.component.html',
  styleUrls: ['./password-list.component.css']
})
export class PasswordListComponent {
  fieldsState: FieldsState = {
    simpleField: FieldColor.Gray,
    mediumField: FieldColor.Gray,
    strongField: FieldColor.Gray,
    difficultPassword: 'nothing'
  };
  password: string = '';

  constructor(private passwordService: PasswordService) {}

  checkPasswordStrength(password: string) {
    this.fieldsState = this.passwordService.checkPasswordStrength(password, this.fieldsState);
  }

  sendPassword() {
    window.alert(`You send your password on level ${this.fieldsState.difficultPassword}`);
  }
}
