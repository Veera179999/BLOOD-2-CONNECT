import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindthedonorComponent } from './findthedonor.component';

describe('FindthedonorComponent', () => {
  let component: FindthedonorComponent;
  let fixture: ComponentFixture<FindthedonorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindthedonorComponent]
    });
    fixture = TestBed.createComponent(FindthedonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
