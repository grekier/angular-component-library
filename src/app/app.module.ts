import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DndWithPreviewModule } from 'dnd-with-preview';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DndWithPreviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
