import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementTypeSettingModalComponent } from './movement-type-setting-modal.component';

describe('MovementTypeSettingModalComponent', () => {
  let component: MovementTypeSettingModalComponent;
  let fixture: ComponentFixture<MovementTypeSettingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovementTypeSettingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementTypeSettingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
