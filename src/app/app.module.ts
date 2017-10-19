import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MonacoEditorComponent } from './monaco-editor/monaco-editor.component';
import { MonacoEditorLoader } from './monaco-editor/monacoeditorloader';

@NgModule({
  declarations: [
    AppComponent,
    MonacoEditorComponent
  ],
  imports: [
    MatGridListModule,
    BrowserModule
  ],
  providers: [
    MonacoEditorLoader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
