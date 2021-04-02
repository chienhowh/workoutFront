import { GetActionService } from './../services/get-action.service';
import { FORMKEYS } from './../../const/FORMKEYS.const';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-movement-type-setting-modal',
  templateUrl: './movement-type-setting-modal.component.html',
  styleUrls: ['./movement-type-setting-modal.component.scss']
})
export class MovementTypeSettingModalComponent implements OnInit {
  FORMKEYS = FORMKEYS;
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
    private fb: FormBuilder,
    private getActionService: GetActionService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getActionService.getActions();
  }

  private initForm() {
    this.movementForm = this.fb.group({
      [FORMKEYS.part]: ['', Validators.required],
      [FORMKEYS.movement]: ['', Validators.required]
    });
  }


  partChange(value: string): void {
    this.selectedPart = value;
    const movement = this.movementForm.get(FORMKEYS.movement);
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
