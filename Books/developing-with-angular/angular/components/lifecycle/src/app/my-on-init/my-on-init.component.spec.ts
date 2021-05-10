import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOnInitComponent } from './my-on-init.component';

describe('MyOnInitComponent', () => {
  let component: MyOnInitComponent;
  let fixture: ComponentFixture<MyOnInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOnInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOnInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
