import { NgModule } from '@angular/core';
import { DndWithPreviewComponent } from './dnd-with-preview.component';
import { FileDropModule } from 'ngx-file-drop';

@NgModule({
  declarations: [DndWithPreviewComponent],
  imports: [
    FileDropModule
  ],
  exports: [DndWithPreviewComponent]
})
export class DndWithPreviewModule { }
