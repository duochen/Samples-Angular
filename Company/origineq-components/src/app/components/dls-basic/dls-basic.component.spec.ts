import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlsBasicComponent } from './dls-basic.component';

describe('DlsBasicComponent', () => {
  let component: DlsBasicComponent;
  let fixture: ComponentFixture<DlsBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlsBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
