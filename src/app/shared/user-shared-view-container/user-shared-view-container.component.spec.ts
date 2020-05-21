import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSharedViewContainerComponent } from './user-shared-view-container.component';

describe('UserSharedViewContainerComponent', () => {
  let component: UserSharedViewContainerComponent;
  let fixture: ComponentFixture<UserSharedViewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSharedViewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSharedViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
