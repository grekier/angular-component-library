import { TestBed } from '@angular/core/testing';

import { DndWithPreviewService } from './dnd-with-preview.service';

describe('DndWithPreviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DndWithPreviewService = TestBed.get(DndWithPreviewService);
    expect(service).toBeTruthy();
  });
});
