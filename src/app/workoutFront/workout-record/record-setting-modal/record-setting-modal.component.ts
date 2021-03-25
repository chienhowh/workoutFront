import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzI18nService, zh_TW } from 'ng-zorro-antd/i18n';
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
    this.initRecordForm();
  }

  initRecordForm() {
    this.recordForm = this.fb.group({
      date: ['', Validators.required],
      title: ['', Validators.required],
    });
  }
  onModalConfirm(): void {
    if (this.recordForm.invalid) { return; }
    this.modalRef.close({ data: this.recordForm.value });
  }

  onModalCancel() {
    this.modalRef.close();
  }
}
