import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicIndexComponent } from './dynamic-index.component';

describe('DynamicIndexComponent', () => {
  let component: DynamicIndexComponent;
  let fixture: ComponentFixture<DynamicIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
