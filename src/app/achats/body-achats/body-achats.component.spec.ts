import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAchatsComponent } from './body-achats.component';

describe('BodyAchatsComponent', () => {
  let component: BodyAchatsComponent;
  let fixture: ComponentFixture<BodyAchatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyAchatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyAchatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
