import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AesthticRoutingModule } from './aesthtic-routing.module';
import { AesthticComponent } from './aesthtic.component';


@NgModule({
  declarations: [AesthticComponent],
  imports: [
    CommonModule,
    AesthticRoutingModule
  ]
})
export class AesthticModule { }
