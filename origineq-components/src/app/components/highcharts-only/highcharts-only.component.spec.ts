import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartsOnlyComponent } from './highcharts-only.component';

describe('HighchartsOnlyComponent', () => {
  let component: HighchartsOnlyComponent;
  let fixture: ComponentFixture<HighchartsOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartsOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartsOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
