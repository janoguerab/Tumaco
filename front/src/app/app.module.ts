import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EntrevistaComponent } from './entrevista/entrevista.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EntrevistaComponent
  ],
  imports: [
      BrowserModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatStepperModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
