import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyOrdersComponent } from './body-orders.component';

describe('BodyOrdersComponent', () => {
  let component: BodyOrdersComponent;
  let fixture: ComponentFixture<BodyOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
