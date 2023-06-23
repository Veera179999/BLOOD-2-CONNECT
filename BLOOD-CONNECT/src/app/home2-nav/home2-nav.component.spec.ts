import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2NavComponent } from './home2-nav.component';

describe('Home2NavComponent', () => {
  let component: Home2NavComponent;
  let fixture: ComponentFixture<Home2NavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Home2NavComponent]
    });
    fixture = TestBed.createComponent(Home2NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
