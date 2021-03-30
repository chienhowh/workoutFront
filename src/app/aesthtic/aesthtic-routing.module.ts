import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AesthticComponent } from './aesthtic.component';

const routes: Routes = [{ path: '', component: AesthticComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AesthticRoutingModule { }
