import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnDonationComponent } from './fn-donation.component';

describe('FnDonationComponent', () => {
  let component: FnDonationComponent;
  let fixture: ComponentFixture<FnDonationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FnDonationComponent]
    });
    fixture = TestBed.createComponent(FnDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
