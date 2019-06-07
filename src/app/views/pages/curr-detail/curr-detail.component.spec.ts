import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrDetailComponent } from './curr-detail.component';

describe('CurrDetailComponent', () => {
  let component: CurrDetailComponent;
  let fixture: ComponentFixture<CurrDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
