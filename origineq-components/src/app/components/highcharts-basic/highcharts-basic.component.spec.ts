import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartsBasicComponent } from './highcharts-basic.component';

describe('HighchartsBasicComponent', () => {
  let component: HighchartsBasicComponent;
  let fixture: ComponentFixture<HighchartsBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartsBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
