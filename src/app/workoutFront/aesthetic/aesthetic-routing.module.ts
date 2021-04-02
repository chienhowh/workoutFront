import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AestheticComponent } from './aesthetic.component';

const routes: Routes = [{ path: '', component: AestheticComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AestheticRoutingModule { }
