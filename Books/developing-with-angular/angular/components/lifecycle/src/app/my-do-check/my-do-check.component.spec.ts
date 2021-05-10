import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDoCheckComponent } from './my-do-check.component';

describe('MyDoCheckComponent', () => {
  let component: MyDoCheckComponent;
  let fixture: ComponentFixture<MyDoCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDoCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDoCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
