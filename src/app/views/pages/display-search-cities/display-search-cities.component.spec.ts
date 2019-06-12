import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySearchCitiesComponent } from './display-search-cities.component';

describe('DisplaySearchCitiesComponent', () => {
  let component: DisplaySearchCitiesComponent;
  let fixture: ComponentFixture<DisplaySearchCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySearchCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySearchCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
