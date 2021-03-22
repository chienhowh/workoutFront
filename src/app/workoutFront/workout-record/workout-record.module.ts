import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutRecordComponent } from './workout-record.component';
import { WorkoutRecordRoutingModule } from './workout-record-routing.module';
import { RecordSettingModalComponent } from './record-setting-modal/record-setting-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WorkoutRecordComponent,
    RecordSettingModalComponent
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
