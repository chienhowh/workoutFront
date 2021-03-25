import { MovementTypeSettingModalComponent } from './movement-type-setting-modal/movement-type-setting-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutRecordComponent } from './workout-record.component';
import { WorkoutRecordRoutingModule } from './workout-record-routing.module';
import { RecordSettingModalComponent } from './record-setting-modal/record-setting-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovementRecordComponent } from './movement-record/movement-record.component';
import { MovementRecordSettingModalComponent } from './movement-record-setting-modal/movement-record-setting-modal.component';
import { MovementTypeComponent } from './movement-type/movement-type.component';


@NgModule({
  declarations: [
    WorkoutRecordComponent,
    RecordSettingModalComponent,
    MovementRecordComponent,
    MovementRecordSettingModalComponent,
    MovementTypeComponent,
    MovementTypeSettingModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    WorkoutRecordRoutingModule,
  ]
})
export class WorkoutRecordModule { }
