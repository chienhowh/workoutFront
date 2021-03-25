import { MovementType, MovementInfo } from './../classes/workout-info.class';
import { MovementRecordSettingModalComponent } from '../movement-record-setting-modal/movement-record-setting-modal.component';
import { Component, Input, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-movement-record',
  templateUrl: './movement-record.component.html',
  styleUrls: ['./movement-record.component.scss']
})
export class MovementRecordComponent implements OnInit {
  /**
   * 部位 & 動作
   */
  @Input() movement: MovementType;
  movementInfoList: MovementInfo[] = [];
  /**
   * 編輯紀錄的重量
   */
  previousInfo: MovementInfo;
  constructor(
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
  }


  /**
   * 設定重量次數
   */
  createMovementInfo() {
    const modal = this.modal.create({
      nzTitle: '重量編輯',
      nzContent: MovementRecordSettingModalComponent,
      nzFooter: null,
      nzClosable: false,
      nzOnOk: (res) => console.log(res)
    });
    modal.afterClose.pipe(map(res => res ? res.data : null)).subscribe(res => {
      if (res) {
        this.movementInfoList.push(res);
        this.previousInfo = { ...res };
        console.log(this.movementInfoList);
      }

    });
  }

  createSameMovementInfo() {
    // 還沒設定重量
    if (!this.previousInfo) { return this.createMovementInfo(); }
    this.movementInfoList.push(this.previousInfo);
  }

}
