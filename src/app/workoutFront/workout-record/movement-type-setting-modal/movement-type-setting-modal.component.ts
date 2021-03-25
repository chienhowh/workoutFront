import { formkeys } from './../../const/formkeys.const';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-movement-type-setting-modal',
  templateUrl: './movement-type-setting-modal.component.html',
  styleUrls: ['./movement-type-setting-modal.component.scss']
})
export class MovementTypeSettingModalComponent implements OnInit {
  formkeys = formkeys;
  movementForm: FormGroup;
  selectedPart = '胸';
  selectedMovement = '啞鈴臥推';
  partData = ['胸', '背'];
  movementData: { [movement: string]: string[] } = {
    胸: ['啞鈴臥推', '槓鈴臥推', '飛鳥夾胸'],
    背: ['下拉', '啞鈴划船', '繩索划船']
  };
  constructor(
    private modalRef: NzModalRef,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  private initForm() {
    this.movementForm = this.fb.group({
      [formkeys.part]: ['', Validators.required],
      [formkeys.movement]: ['', Validators.required]
    });
  }


  partChange(value: string): void {
    this.selectedPart = value;
    const movement = this.movementForm.get(formkeys.movement);
    movement.patchValue(this.movementData[value][0]);
  }
  onModalConfirm(): void {
    // if (this.movementForm.invalid) { return; }
    this.modalRef.close({ data: this.movementForm.value });
  }

  onModalCancel() {
    this.modalRef.close();
  }

}
