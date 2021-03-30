import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AesthticComponent } from './aesthtic.component';

describe('AesthticComponent', () => {
  let component: AesthticComponent;
  let fixture: ComponentFixture<AesthticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AesthticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AesthticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
