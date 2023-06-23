import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnHelpComponent } from './fn-help.component';

describe('FnHelpComponent', () => {
  let component: FnHelpComponent;
  let fixture: ComponentFixture<FnHelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FnHelpComponent]
    });
    fixture = TestBed.createComponent(FnHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
