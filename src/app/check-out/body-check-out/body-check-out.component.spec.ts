import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCheckOutComponent } from './body-check-out.component';

describe('BodyCheckOutComponent', () => {
  let component: BodyCheckOutComponent;
  let fixture: ComponentFixture<BodyCheckOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyCheckOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCheckOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
