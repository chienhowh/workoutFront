import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../nz.modules';
import { CreateBtnComponent } from './components/buttons/create-btn/create-btn.component';



@NgModule({
  declarations: [CreateBtnComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports:[
    NgZorroAntdModule,
    CreateBtnComponent
  ]
})
export class SharedModule { }
