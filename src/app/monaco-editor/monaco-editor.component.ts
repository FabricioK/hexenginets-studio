import { Component, OnDestroy, ViewChild, ElementRef, AfterViewInit, Input, Output, forwardRef, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MonacoEditorLoader } from './monacoeditorloader'


declare var monaco: any;

@Component({
  selector: 'monaco-editor',
  templateUrl: './monaco-editor.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MonacoEditorComponent),
      multi: true
    }
  ],
  styleUrls: ['./monaco-editor.component.css']
})
export class MonacoEditorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('editor') editorRef: ElementRef;
  private _disposed = false;
  private _editor: any;

  constructor(
    private _monacoLoader: MonacoEditorLoader
  ) {    
  }

  ngAfterViewInit() {
    // Wait until monaco editor is available
    this._monacoLoader.waitForMonaco().then(() => {
      // Need to check if the view has already been destroyed before Monaco was loaded
      if (this._disposed) return;
      this.initMonaco();
    });
  }

  ngOnDestroy() {
    if (this._disposed) return;
    this._disposed = true;

    // Close possibly loaded editor component
    if (this._editor) this._editor.dispose();
    this._editor = null;
  }

  initMonaco() {
    this._editor = monaco.editor.create(this.editorRef.nativeElement, {
      value: '',
      language: 'javascript',
    });
  }
}