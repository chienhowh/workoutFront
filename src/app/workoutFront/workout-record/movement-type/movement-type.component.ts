import { MovementRecordSettingModalComponent } from './../movement-record-setting-modal/movement-record-setting-modal.component';
import { MovementTypeSettingModalComponent } from './../movement-type-setting-modal/movement-type-setting-modal.component';

import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map } from 'rxjs/operators';
import { MovementType } from '../classes/workout-info.class';

@Component({
  selector: 'app-movement-type',
  templateUrl: './movement-type.component.html',
  styleUrls: ['./movement-type.component.scss']
})
export class MovementTypeComponent implements OnInit {
  movementList: MovementType[] = [];
  constructor(
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
  }


  createMovementPanel() {
    const modal = this.modal.create({
      nzContent: MovementTypeSettingModalComponent,
      nzFooter: null,
      nzClosable: false,
    });
    modal.afterClose.pipe(map(res => res ? res.data : null)).subscribe(res => {
      if (res) {
        this.movementList.push(res);
      }
    });
  }

  onCheckDetail() {

  }


}
