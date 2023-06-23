import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnHelpComponent } from './dn-help.component';

describe('DnHelpComponent', () => {
  let component: DnHelpComponent;
  let fixture: ComponentFixture<DnHelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DnHelpComponent]
    });
    fixture = TestBed.createComponent(DnHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
