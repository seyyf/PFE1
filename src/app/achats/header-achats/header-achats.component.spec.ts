import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAchatsComponent } from './header-achats.component';

describe('HeaderAchatsComponent', () => {
  let component: HeaderAchatsComponent;
  let fixture: ComponentFixture<HeaderAchatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAchatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAchatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
