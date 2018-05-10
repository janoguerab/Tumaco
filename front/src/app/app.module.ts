import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';

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
      MatCardModule,
      MatToolbarModule,
      MatIconModule,
      MatTabsModule,
      MatSelectModule,
      MatRadioModule,
      MatCheckboxModule,
      MatDividerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
