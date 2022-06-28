import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password:string = '';
  passwordLength: number = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  private _letters: string = 'abcdefghijklmnopqrstuvxyz';
  private _numbers: string = '0123456789';
  private _symbols: string = '!@$%^&*()';

  onButtonClick() {
    let validChars = '';
    let generatedPassword = '';

    if (this.includeLetters) {
      validChars += this._letters;
    }

    if (this.includeNumbers) {
      validChars += this._numbers;
    }

    if (this.includeSymbols) {
      validChars += this._symbols;
    }

    for (let i=0; i<this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;

    return false;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(event: KeyboardEvent) {
    const value = parseInt((event.target as HTMLInputElement).value);

    if (!isNaN(value)) {
      this.passwordLength = value;
    } else {
      this.passwordLength = 0;
    }
  }

  disableGenerate() {
    return !(this.passwordLength && (this.includeLetters || this.includeNumbers || this.includeSymbols));
  }
}
