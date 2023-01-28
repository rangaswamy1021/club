import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDetailModelComponent } from './member-detail-model.component';

describe('MemberDetailModelComponent', () => {
  let component: MemberDetailModelComponent;
  let fixture: ComponentFixture<MemberDetailModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberDetailModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberDetailModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
