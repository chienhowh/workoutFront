import { MovementTypeComponent } from './movement-type/movement-type.component';
import { MovementRecordComponent } from './movement-record/movement-record.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutRecordComponent } from './workout-record.component';

const routes: Routes = [
  { path: '', component: WorkoutRecordComponent },
  { path: 'movement', component: MovementTypeComponent },
  { path: 'detail', component: MovementRecordComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutRecordRoutingModule { }
