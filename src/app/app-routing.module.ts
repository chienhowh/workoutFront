import { Routing } from './workoutFront/const/routing.const';
import { WorkoutRecordComponent } from './workoutFront/workout-record/workout-record.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: Routing.Record,
    loadChildren: () => import('./workoutFront/workout-record/workout-record.module').then(m => m.WorkoutRecordModule)
  },
  { path: '', redirectTo: '/record', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
