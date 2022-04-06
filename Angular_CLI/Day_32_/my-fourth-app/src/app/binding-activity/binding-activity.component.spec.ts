import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingActivityComponent } from './binding-activity.component';

describe('BindingActivityComponent', () => {
  let component: BindingActivityComponent;
  let fixture: ComponentFixture<BindingActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
