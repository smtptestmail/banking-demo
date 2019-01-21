import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApsChargesTabComponent } from './aps-charges-tab.component';

describe('ApsChargesTabComponent', () => {
  let component: ApsChargesTabComponent;
  let fixture: ComponentFixture<ApsChargesTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApsChargesTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApsChargesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
