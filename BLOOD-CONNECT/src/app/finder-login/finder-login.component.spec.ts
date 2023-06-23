import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderLoginComponent } from './finder-login.component';

describe('FinderLoginComponent', () => {
  let component: FinderLoginComponent;
  let fixture: ComponentFixture<FinderLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinderLoginComponent]
    });
    fixture = TestBed.createComponent(FinderLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
