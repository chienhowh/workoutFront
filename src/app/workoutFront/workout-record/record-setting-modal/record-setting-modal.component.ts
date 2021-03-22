import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-record-setting-modal',
  templateUrl: './record-setting-modal.component.html',
  styleUrls: ['./record-setting-modal.component.scss']
})
export class RecordSettingModalComponent implements OnInit {

  recordForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private modalRef: NzModalRef

  ) { }

  ngOnInit(): void {
    this.initRecordForm()
  }

  initRecordForm() {
    this.recordForm = this.fb.group({
      weight: [25, Validators.required],
      reps: [12, Validators.required],
    })
  }
  onModalConfirm(): void {
    this.modalRef.close({ data: this.recordForm.value });
  }

  onModalCancel(){
    this.modalRef.close()
  }
}
