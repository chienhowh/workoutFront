import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordSettingModalComponent } from './record-setting-modal.component';

describe('RecordSettingModalComponent', () => {
  let component: RecordSettingModalComponent;
  let fixture: ComponentFixture<RecordSettingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordSettingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordSettingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
