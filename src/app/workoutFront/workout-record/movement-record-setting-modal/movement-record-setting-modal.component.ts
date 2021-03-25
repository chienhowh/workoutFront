import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-movement-record-setting-modal',
  templateUrl: './movement-record-setting-modal.component.html',
  styleUrls: ['./movement-record-setting-modal.component.scss']
})
export class MovementRecordSettingModalComponent implements OnInit {
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
    this.modalRef.close();
  }
}
