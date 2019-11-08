import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from './pet';

@Injectable({
  providedIn: 'root'
})
export class PetProxyService {

  constructor(private _http: HttpClient) { }

  getPets(){
    return this._http.get<Pet[]>('http://10.112.124.71:8060/pet');
  }
}
