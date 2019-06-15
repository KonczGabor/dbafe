import { Module } from './module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ModuleService {
  
  constructor(private http:HttpClient) { }

  getAllModule(){
    console.log("A service-ben");
    return this.http.get<Module[]>('http://localhost:8080/module/get-all');
  }
}
