import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOrdersComponent } from './header-orders.component';

describe('HeaderOrdersComponent', () => {
  let component: HeaderOrdersComponent;
  let fixture: ComponentFixture<HeaderOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
