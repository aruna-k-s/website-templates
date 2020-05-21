import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteDemoComponent } from './website-demo.component';

describe('WebsiteDemoComponent', () => {
  let component: WebsiteDemoComponent;
  let fixture: ComponentFixture<WebsiteDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
