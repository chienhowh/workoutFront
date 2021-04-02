import { ROUTING } from './workoutFront/const/routing.const';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: ROUTING.RECORD,
    loadChildren: () => import('./workoutFront/workout-record/workout-record.module').then(m => m.WorkoutRecordModule)
  },
  { path: ROUTING.AESTHETIC, loadChildren: () => import('./workoutFront/aesthetic/aesthetic.module').then(m => m.AestheticModule) },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
