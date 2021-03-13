import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../nz.modules';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports:[
    NgZorroAntdModule
  ]
})
export class SharedModule { }
