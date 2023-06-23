import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnDonationComponent } from './dn-donation.component';

describe('DnDonationComponent', () => {
  let component: DnDonationComponent;
  let fixture: ComponentFixture<DnDonationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DnDonationComponent]
    });
    fixture = TestBed.createComponent(DnDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
