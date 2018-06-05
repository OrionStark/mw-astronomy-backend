import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoritmapComponent } from './meteoritmap.component';

describe('MeteoritmapComponent', () => {
  let component: MeteoritmapComponent;
  let fixture: ComponentFixture<MeteoritmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteoritmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoritmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
