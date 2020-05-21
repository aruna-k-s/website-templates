import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnifiedViewImageComponent } from './magnified-view-image.component';

describe('MagnifiedViewImageComponent', () => {
  let component: MagnifiedViewImageComponent;
  let fixture: ComponentFixture<MagnifiedViewImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagnifiedViewImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagnifiedViewImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
