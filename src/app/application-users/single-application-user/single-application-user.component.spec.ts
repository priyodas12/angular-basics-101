import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleApplicationUserComponent } from './single-application-user.component';

describe('SingleApplicationUserComponent', () => {
  let component: SingleApplicationUserComponent;
  let fixture: ComponentFixture<SingleApplicationUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleApplicationUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleApplicationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
