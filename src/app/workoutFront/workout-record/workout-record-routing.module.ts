import { Routing } from './../const/routing.const';
import { MovementTypeComponent } from './movement-type/movement-type.component';
import { MovementRecordComponent } from './movement-record/movement-record.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutRecordComponent } from './workout-record.component';

const routes: Routes = [
  { path: '', component: WorkoutRecordComponent },
  { path: Routing.Movement, component: MovementTypeComponent },
  { path: Routing.MovementDetail, component: MovementRecordComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutRecordRoutingModule { }
