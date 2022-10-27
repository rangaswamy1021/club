import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchOfferComponent } from './launch-offer.component';

describe('LaunchOfferComponent', () => {
  let component: LaunchOfferComponent;
  let fixture: ComponentFixture<LaunchOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
