import { RequestService } from './../../services/request.service';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../../const/api.conts';

@Injectable({
  providedIn: 'root'
})
export class GetActionService {

  constructor(
    private requestService: RequestService
  ) { }


  getActions() {
    this.requestService.request(API.GET, API.ACTIONS).subscribe(res => console.log(res));
  }
}
