import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAddeditComponent } from './dynamic-addedit.component';

describe('DynamicAddeditComponent', () => {
  let component: DynamicAddeditComponent;
  let fixture: ComponentFixture<DynamicAddeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicAddeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicAddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
