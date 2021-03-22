import { RecordSettingModalComponent } from './record-setting-modal/record-setting-modal.component';
import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { workoutInfo } from './classes/workout-info.class';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-workout-record',
  templateUrl: './workout-record.component.html',
  styleUrls: ['./workout-record.component.scss']
})

export class WorkoutRecordComponent implements OnInit {
  displayList: workoutInfo[] = [];
  constructor(
    private modal: NzModalService
  ) {

  }
  ngOnInit() {

  }


  createRecordModal() {
    const modal = this.modal.create({
      nzTitle: '重量編輯',
      nzContent: RecordSettingModalComponent,
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
