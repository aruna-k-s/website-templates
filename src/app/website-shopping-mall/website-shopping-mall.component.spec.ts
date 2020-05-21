import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteShoppingMallComponent } from './website-shopping-mall.component';

describe('WebsiteShoppingMallComponent', () => {
  let component: WebsiteShoppingMallComponent;
  let fixture: ComponentFixture<WebsiteShoppingMallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteShoppingMallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteShoppingMallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
