import { Component } from '@angular/core';

enum FieldColor {
  Gray = 'gray',
  Red = 'red',
  Yellow = 'yellow',
  Green = 'green'
}

@Component({
  selector: 'app-password-list',
  templateUrl: './password-list.component.html',
  styleUrls: ['./password-list.component.css']
})
export class PasswordListComponent {
  simpleField: FieldColor = FieldColor.Gray;
  mediumField: FieldColor = FieldColor.Gray;
  strongField: FieldColor = FieldColor.Gray;
  password: string = '';
  difficultPassword: string = 'nothing';
  litersReg: RegExp =  /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ]+$/;
  numbersReg: RegExp =  /^\d+$/;
  symbolsReg: RegExp = /^[!@#$%^&*()_+\-=\[\]{};'"\\|,.<>\/?]+$/;
  comboStringsNumbers: RegExp = /^(?=.*[a-zA-Zа-яА-ЯґҐєЄіІїЇ])(?=.*\d).+$/;
  comboStringsSymbols: RegExp = /^(?=.*[a-zA-Zа-яА-ЯґҐєЄіІїЇ])(?=.*[!@#$%^&*()_+\-=\[\]{};'"\\|,.<>\/?]).+$/;
  comboNumbersSymbols: RegExp = /^(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};'"\\|,.<>\/?]).+$/;
  comboStrongReg: RegExp = /^(?=.*[a-zA-Zа-яА-ЯґҐєЄіІїЇ])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};'"\\|,.<>\/?]).+$/;

  checkPasswordStrength(password: string){
    if(!password || password === null){
      this.difficultPassword = "nothing";
      this.simpleField = FieldColor.Gray;
      this.mediumField = FieldColor.Gray;
      this.strongField = FieldColor.Gray;
    }else if(password.length < 8){
      this.difficultPassword = "weak"
      this.simpleField = FieldColor.Red;
      this.mediumField = FieldColor.Red;
      this.strongField = FieldColor.Red;
    }else if((this.litersReg.test(password) || this.numbersReg.test(password) || this.symbolsReg.test(password))){
      this.difficultPassword = "simple";
      this.simpleField = FieldColor.Red;
      this.mediumField = FieldColor.Gray;
      this.strongField = FieldColor.Gray;
    }else if(this.comboStrongReg.test(password)){
      this.difficultPassword = "strong";
      this.simpleField = FieldColor.Green;
      this.mediumField = FieldColor.Green;
      this.strongField = FieldColor.Green;
    }else if(( this.comboStringsNumbers.test(password)|| this.comboStringsSymbols.test(password) || this.comboNumbersSymbols.test(password))){
      this.difficultPassword = 'medium';
      this.simpleField = FieldColor.Yellow;
      this.mediumField = FieldColor.Yellow;
      this.strongField = FieldColor.Gray;
    }
  }
  sendPassword(){
    window.alert(`You send your password on level ${this.difficultPassword}`)
  }
}



