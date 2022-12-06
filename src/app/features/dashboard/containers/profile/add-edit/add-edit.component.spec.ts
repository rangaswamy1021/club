import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAddEditComponent } from './add-edit.component';

describe('AddEditComponent', () => {
  let component: ProfileAddEditComponent;
  let fixture: ComponentFixture<ProfileAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
