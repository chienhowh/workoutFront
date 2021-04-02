import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../const/api.conts';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient
  ) { }

  request(method: string, url: API, sendData?): Observable<any> {
    switch (method) {
      case API.GET:
        return this.http.get(environment.DEFAULT_IP + url)
    }
  }
}
