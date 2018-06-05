import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoTodayComponent } from './neo-today.component';

describe('NeoTodayComponent', () => {
  let component: NeoTodayComponent;
  let fixture: ComponentFixture<NeoTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeoTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeoTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
