import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuninformationComponent } from './suninformation.component';

describe('SuninformationComponent', () => {
  let component: SuninformationComponent;
  let fixture: ComponentFixture<SuninformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuninformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuninformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
