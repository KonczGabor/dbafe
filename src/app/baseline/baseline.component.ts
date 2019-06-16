import { BaselineService } from "./baseline.service";
import { Component, OnInit, Input } from "@angular/core";
import { Baseline } from "./baseline";

@Component({
  selector: "app-baseline",
  templateUrl: "./baseline.component.html",
  styleUrls: ["./baseline.component.css"]
})
export class BaselineComponent implements OnInit {
  constructor(private baselineService: BaselineService) {}

  ngOnInit() {
    //this.getAllBaseline();
    this.getBaselinesByModuleId("module_id_1");
  }

  baselineTableColumnNames: string[] = [
    "Id",
    "Name",
    "Module Id",
    "Type",
    "Version",
    "Created by",
    "Created on",
    "Modified by",
    "Modified on"
  ];

  @Input() baselines: Baseline[];

  getAllBaseline() {
    console.log("In Baseline Component getAllBaseline");
    this.baselineService
      .getAllBaseline()
      .subscribe(response => this.handleSuccesfullResponse(response));
  }

  getBaselinesByModuleId(moduleId: string) {
    console.log("getBaselinesByModuleId " + moduleId);
    this.baselineService
      .getBaselinesByModuleId(moduleId)
      .subscribe(response => this.handleSuccesfullResponse(response));
  }

  handleSuccesfullResponse(response: Baseline[]) {
    this.baselines = response;
    console.log("In Handle Succefull response " + response);
    console.log(this.baselines);
  }

  clearBaselineTable() {
    this.baselines = null;
  }
}
