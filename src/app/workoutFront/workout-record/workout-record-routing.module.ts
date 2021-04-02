import { ROUTING } from './../const/routing.const';
import { MovementTypeComponent } from './movement-type/movement-type.component';
import { MovementRecordComponent } from './movement-record/movement-record.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutRecordComponent } from './workout-record.component';

const routes: Routes = [
  { path: ROUTING.MOVEMENT, component: MovementTypeComponent },
  { path: ROUTING.MOVEMENT_DETAIL, component: MovementRecordComponent },
  { path: '', component: WorkoutRecordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutRecordRoutingModule { }
