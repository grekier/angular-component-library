import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndWithPreviewComponent } from './dnd-with-preview.component';

describe('DndWithPreviewComponent', () => {
  let component: DndWithPreviewComponent;
  let fixture: ComponentFixture<DndWithPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndWithPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndWithPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
