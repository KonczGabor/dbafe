import { Baseline } from './baseline';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaselineService {

  constructor(private http:HttpClient) { }

  getAllBaseline(){
    console.log("A Baseline service-ben");
    return this.http.get<Baseline[]>('http://localhost:8080/baseline/get-all');
  }
}
