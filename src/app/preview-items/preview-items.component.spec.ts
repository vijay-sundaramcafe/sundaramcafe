import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewItemsComponent } from './preview-items.component';

describe('PreviewItemsComponent', () => {
  let component: PreviewItemsComponent;
  let fixture: ComponentFixture<PreviewItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
