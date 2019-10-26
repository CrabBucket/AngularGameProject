import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldBoxComponent } from './hold-box.component';

describe('HoldBoxComponent', () => {
  let component: HoldBoxComponent;
  let fixture: ComponentFixture<HoldBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoldBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
