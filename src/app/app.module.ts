import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule, MatInputModule, MatFormFieldModule,
  MatBottomSheetModule,
  MatSliderModule,
  MatIconModule, MatCardModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './components/settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatBottomSheetModule,
    MatSliderModule
  ],
  entryComponents: [SettingsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
