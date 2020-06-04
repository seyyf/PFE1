import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercontentprofComponent } from './headercontentprof.component';

describe('HeadercontentprofComponent', () => {
  let component: HeadercontentprofComponent;
  let fixture: ComponentFixture<HeadercontentprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadercontentprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadercontentprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
