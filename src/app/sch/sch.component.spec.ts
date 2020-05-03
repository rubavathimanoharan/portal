/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SchComponent } from './sch.component';

describe('SchComponent', () => {
  let component: SchComponent;
  let fixture: ComponentFixture<SchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
