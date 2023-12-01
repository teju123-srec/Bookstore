/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FictionComponent } from './fiction.component';

describe('FictionComponent', () => {
  let component: FictionComponent;
  let fixture: ComponentFixture<FictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
