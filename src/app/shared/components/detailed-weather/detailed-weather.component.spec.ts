import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailedWeatherComponent } from './detailed-weather.component';

describe('DetailedWeatherComponent', () => {
  let component: DetailedWeatherComponent;
  let fixture: ComponentFixture<DetailedWeatherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
