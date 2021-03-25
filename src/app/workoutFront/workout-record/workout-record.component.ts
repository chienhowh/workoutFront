import { formkeys } from './../const/formkeys.const';
import { Routing } from './../const/routing.const';
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
    { [formkeys.date]: '2021/03/21 16:00', [formkeys.title]: '今天練胸日', detail: [{ name: '槓鈴臥推', volume: '2000kg' },
    { name: '啞鈴臥推', volume: '2000kg' },
    { name: '飛鳥夾胸', volume: '2000kg' }] },
    { date: '2021/03/21 16:00', title: '想練腿', detail: [{ name: '槓鈴深蹲', volume: '2000kg' },
    { name: '箭步蹲', volume: '2000kg' },
    { name: '硬舉Ｆ', volume: '2000kg' }] }

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
      nzContent: RecordSettingModalComponent,
      nzFooter: null,
      nzClosable: false,
    });
    modal.afterClose.pipe(map(res => res ? res.data : null)).subscribe(res => {
      if (res) {
        this.displayList.push(res);
        console.log(this.displayList);
      }
    });
  }
  /**
   * 新增訓練內容
   */
  onCheckDetail() {
    this.router.navigate([`${Routing.Record}/${Routing.Movement}`]);
  }
}
