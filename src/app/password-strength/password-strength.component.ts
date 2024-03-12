// password-strength.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  @Input() simpleField: string = 'gray';
  @Input() mediumField: string = 'gray';
  @Input() strongField: string = 'gray';
}