export class RegularChecks {
    static litersReg: RegExp = /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ]+$/;
    static numbersReg: RegExp = /^\d+$/;
    static symbolsReg: RegExp = /^[!@#$%^&*()_+\-=\[\]{};'"\\|,.<>\/?]+$/;
    static comboStringsNumbers: RegExp = /^(?=.*[a-zA-Zа-яА-ЯґҐєЄіІїЇ])(?=.*\d).+$/;
    static comboStringsSymbols: RegExp = /^(?=.*[a-zA-Zа-яА-ЯґҐєЄіІїЇ])(?=.*[!@#$%^&*()_+\-=\[\]{};'"\\|,.<>\/?]).+$/;
    static comboNumbersSymbols: RegExp = /^(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};'"\\|,.<>\/?]).+$/;
    static comboStrongReg: RegExp = /^(?=.*[a-zA-Zа-яА-ЯґҐєЄіІїЇ])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};'"\\|,.<>\/?]).+$/;
  }