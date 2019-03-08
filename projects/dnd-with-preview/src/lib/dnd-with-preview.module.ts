import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { DndWithPreviewComponent } from './dnd-with-preview.component';
import { FileDropModule } from 'ngx-file-drop';

@NgModule({
  declarations: [DndWithPreviewComponent],
  imports: [
    BrowserModule,
    FileDropModule
  ],
  exports: [DndWithPreviewComponent]
})
export class DndWithPreviewModule { }
