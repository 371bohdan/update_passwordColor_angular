import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';





import { AppComponent } from './app.component';
import { PasswordListComponent } from './password-list/password-list.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', 
      component: PasswordListComponent,
    },
    ])
  ],
  declarations: [
    AppComponent,
    PasswordListComponent,
    PasswordInputComponent,
    PasswordStrengthComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }