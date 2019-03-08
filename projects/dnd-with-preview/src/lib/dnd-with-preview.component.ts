import { Component, OnInit } from '@angular/core';
import {FileSystemEntry, FileSystemFileEntry, UploadEvent, UploadFile} from 'ngx-file-drop';
import {FileWithPath} from './dnd-with-preview.models';

@Component({
  selector: 'osnode-dnd-with-preview',
  templateUrl: './dnd-with-preview.component.html',
  styles: []
})
export class DndWithPreviewComponent implements OnInit {
  public files: FileWithPath[] = [];

  constructor() { }

  ngOnInit() {
  }

  dropped(event: UploadEvent) {
    for (const droppedFile of event.files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          const f: FileWithPath = {relativePath: droppedFile.relativePath, file};
          const reader: FileReader = new FileReader();
          reader.onload = (() => {
            f.imageURL = reader.result;
            console.log('Reader callback');
            console.log(f);
          });
          reader.readAsDataURL(file);
          this.files.push(f);
          console.log(f);
        });
      }
    }
  }

  fileOver(event) {
    console.log(event);
  }

  fileLeave(event) {
    console.log(event);
  }
}
