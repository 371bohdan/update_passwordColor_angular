import { Injectable } from '@angular/core';
import { FieldColor } from './field-color.enum';
import { RegularChecks } from './regular-checks';
import { FieldsState } from './fields-state'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor() { }

  checkPasswordStrength(password: string, fieldsState: FieldsState): FieldsState {
    if (!password || password === null) {
      fieldsState.difficultPassword = "nothing";
      fieldsState.simpleField = FieldColor.Gray;
      fieldsState.mediumField = FieldColor.Gray;
      fieldsState.strongField = FieldColor.Gray;
    } else if (password.length < 8) {
      fieldsState.difficultPassword = "weak";
      fieldsState.simpleField = FieldColor.Red;
      fieldsState.mediumField = FieldColor.Red;
      fieldsState.strongField = FieldColor.Red;
    } else if (
      RegularChecks.litersReg.test(password) ||
      RegularChecks.numbersReg.test(password) ||
      RegularChecks.symbolsReg.test(password)
    ) {
      fieldsState.difficultPassword = "simple";
      fieldsState.simpleField = FieldColor.Red;
      fieldsState.mediumField = FieldColor.Gray;
      fieldsState.strongField = FieldColor.Gray;
    } else if (RegularChecks.comboStrongReg.test(password)) {
      fieldsState.difficultPassword = "strong";
      fieldsState.simpleField = FieldColor.Green;
      fieldsState.mediumField = FieldColor.Green;
      fieldsState.strongField = FieldColor.Green;
    } else if (
      RegularChecks.comboStringsNumbers.test(password) ||
      RegularChecks.comboStringsSymbols.test(password) ||
      RegularChecks.comboNumbersSymbols.test(password)
    ) {
      fieldsState.difficultPassword = 'medium';
      fieldsState.simpleField = FieldColor.Yellow;
      fieldsState.mediumField = FieldColor.Yellow;
      fieldsState.strongField = FieldColor.Gray;
    }
    return fieldsState; // Return the updated FieldsState object
  }
}
