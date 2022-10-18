import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubExperienceComponent } from './club-experience.component';

describe('ClubExperienceComponent', () => {
  let component: ClubExperienceComponent;
  let fixture: ComponentFixture<ClubExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
