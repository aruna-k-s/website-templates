import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowDoIHelpComponent } from './how-do-i-help.component';

describe('HowDoIHelpComponent', () => {
  let component: HowDoIHelpComponent;
  let fixture: ComponentFixture<HowDoIHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowDoIHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowDoIHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
