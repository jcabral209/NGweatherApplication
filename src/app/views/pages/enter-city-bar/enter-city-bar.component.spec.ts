import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterCityBarComponent } from './enter-city-bar.component';

describe('EnterCityBarComponent', () => {
  let component: EnterCityBarComponent;
  let fixture: ComponentFixture<EnterCityBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterCityBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterCityBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
