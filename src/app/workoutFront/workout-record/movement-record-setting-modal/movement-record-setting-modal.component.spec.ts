import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementRecordSettingModalComponent } from './movement-record-setting-modal.component';

describe('MovementRecordSettingModalComponent', () => {
  let component: MovementRecordSettingModalComponent;
  let fixture: ComponentFixture<MovementRecordSettingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovementRecordSettingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementRecordSettingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
