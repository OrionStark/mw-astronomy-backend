import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyneoComponent } from './weeklyneo.component';

describe('WeeklyneoComponent', () => {
  let component: WeeklyneoComponent;
  let fixture: ComponentFixture<WeeklyneoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyneoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
