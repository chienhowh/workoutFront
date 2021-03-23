import { MovementTypeSettingModalComponent } from './../movement-type-setting-modal/movement-type-setting-modal.component';
import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movement-type',
  templateUrl: './movement-type.component.html',
  styleUrls: ['./movement-type.component.scss']
})
export class MovementTypeComponent implements OnInit {

  constructor(
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
  }


  onCreateTypeModal(){
    const modal = this.modal.create({
      nzTitle: '重量編輯',
      nzContent: MovementTypeSettingModalComponent,
      nzFooter: null,
      nzClosable: false,
      nzOnOk: (res) => console.log(res)
    });
    modal.afterClose.pipe(map(res => res.data)).subscribe(res => {
      // this.displayList.push(res)
      // console.log(this.displayList)
    });
  }
}
