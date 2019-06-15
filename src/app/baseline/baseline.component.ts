import { BaselineService } from './baseline.service';
import { Component, OnInit } from '@angular/core';
import { Baseline } from './baseline';

@Component({
  selector: 'app-baseline',
  templateUrl: './baseline.component.html',
  styleUrls: ['./baseline.component.css']
})
export class BaselineComponent implements OnInit {

  constructor(private baselineService: BaselineService) { }
  
  ngOnInit() {
    this.getAllBaseline();
  }

  baselineTableColumnNames: string[] = [
    'Id',
    'Name',
    'Module Id',
    'Type',
    'Version',
    'Created by',
    'Created on',
    'Modified by',
    'Modified on' 
  ];

  baselines: Baseline[];


  getAllBaseline(){
    console.log('In Baseline Component getAllBaseline');
    this.baselineService.getAllBaseline().subscribe(response =>this.handleSuccesfullResponse(response));
   }

   handleSuccesfullResponse(response: Baseline[]){
    this.baselines = response;
    console.log(this.baselines);
  }




}
