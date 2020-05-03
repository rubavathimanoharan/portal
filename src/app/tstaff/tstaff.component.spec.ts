/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TstaffComponent } from './tstaff.component';

describe('TstaffComponent', () => {
  let component: TstaffComponent;
  let fixture: ComponentFixture<TstaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TstaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
