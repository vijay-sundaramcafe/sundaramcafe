import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDBComponent } from './sample-db.component';

describe('SampleDBComponent', () => {
  let component: SampleDBComponent;
  let fixture: ComponentFixture<SampleDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
