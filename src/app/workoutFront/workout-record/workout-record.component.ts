import { RecordSettingModalComponent } from './record-setting-modal/record-setting-modal.component';
import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-workout-record',
  templateUrl: './workout-record.component.html',
  styleUrls: ['./workout-record.component.scss']
})

export class WorkoutRecordComponent implements OnInit {
  displayList = [
    { date: '2021/03/21 16:00', title: '腿日' },
    { date: '2021/03/21 16:00', title: '今天練胸' }
  ];
  constructor(
    private modal: NzModalService,
    private router: Router,
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
      this.displayList.push(res);
      console.log(this.displayList);
    });
  }
  /**
   * 新增訓練內容
   */
  onCheckDetail() {
    this.router.navigate(['record/movement']);
  }
}
