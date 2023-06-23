import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnProfileComponent } from './fn-profile.component';

describe('FnProfileComponent', () => {
  let component: FnProfileComponent;
  let fixture: ComponentFixture<FnProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FnProfileComponent]
    });
    fixture = TestBed.createComponent(FnProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
