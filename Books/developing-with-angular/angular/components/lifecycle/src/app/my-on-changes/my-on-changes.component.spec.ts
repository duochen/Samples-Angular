import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOnChangesComponent } from './my-on-changes.component';

describe('MyOnChangesComponent', () => {
  let component: MyOnChangesComponent;
  let fixture: ComponentFixture<MyOnChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOnChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOnChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
