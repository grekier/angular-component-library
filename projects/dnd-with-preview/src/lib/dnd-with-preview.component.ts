import { Component, OnInit } from '@angular/core';
import {FileSystemDirectoryEntry, FileSystemFileEntry, UploadEvent, UploadFile} from 'ngx-file-drop';

@Component({
  selector: 'osnode-dnd-with-preview',
  template: `
    <p>
      dnd-with-preview works!
    </p>
  `,
  styles: []
})
export class DndWithPreviewComponent implements OnInit {
  public files: File[] = [];

  constructor() { }

  ngOnInit() {
  }

  public dropped(event: UploadEvent) {
    for (const droppedFile of event.files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          console.log(droppedFile.relativePath, file);
          this.files.push(file);
        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
        // TODO add all files recursively
      }
    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }
}
