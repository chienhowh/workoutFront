import { MovementRecordSettingModalComponent } from '../movement-record-setting-modal/movement-record-setting-modal.component';
import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map } from 'rxjs/operators';
import { movementInfo } from '../classes/workout-info.class';

@Component({
  selector: 'app-movement-record',
  templateUrl: './movement-record.component.html',
  styleUrls: ['./movement-record.component.scss']
})
export class MovementRecordComponent implements OnInit {
  displayList: movementInfo[] = [];
  constructor(
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
  }

  createMovementModal() {
    const modal = this.modal.create({
      nzTitle: '重量編輯',
      nzContent: MovementRecordSettingModalComponent,
      nzFooter: null,
      nzClosable: false,
      nzOnOk: (res) => console.log(res)
    });
    modal.afterClose.pipe(map(res => res.data)).subscribe(res => {
      this.displayList.push(res)
      console.log(this.displayList)
    })
  }

}
