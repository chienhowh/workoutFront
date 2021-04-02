import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AestheticRoutingModule } from './aesthetic-routing.module';
import { AestheticComponent } from './aesthetic.component';


@NgModule({
  declarations: [AestheticComponent],
  imports: [
    CommonModule,
    SharedModule,
    AestheticRoutingModule
  ]
})
export class AestheticModule { }
