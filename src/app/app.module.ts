import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { MonacoEditorComponent } from 'ng2-monaco-editor';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatGridListModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
