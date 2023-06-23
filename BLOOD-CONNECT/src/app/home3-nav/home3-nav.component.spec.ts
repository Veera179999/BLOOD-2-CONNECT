import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home3NavComponent } from './home3-nav.component';

describe('Home3NavComponent', () => {
  let component: Home3NavComponent;
  let fixture: ComponentFixture<Home3NavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Home3NavComponent]
    });
    fixture = TestBed.createComponent(Home3NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
