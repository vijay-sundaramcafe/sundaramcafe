import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiaccessComponent } from './apiaccess.component';

describe('ApiaccessComponent', () => {
  let component: ApiaccessComponent;
  let fixture: ComponentFixture<ApiaccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiaccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
