import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenProvjpComponent } from './studen-provjp.component';

describe('StudenProvjpComponent', () => {
  let component: StudenProvjpComponent;
  let fixture: ComponentFixture<StudenProvjpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudenProvjpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenProvjpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
