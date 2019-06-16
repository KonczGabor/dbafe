import { BaselineService } from "./../baseline/baseline.service";
import { Component, OnInit } from "@angular/core";
import { Baseline } from "../baseline/baseline";

@Component({
  selector: "app-main-canvas",
  templateUrl: "./main-canvas.component.html",
  styleUrls: ["./main-canvas.component.css"]
})
export class MainCanvasComponent implements OnInit {
  constructor(private baselineService: BaselineService) {}

  ngOnInit() {}

  idOfChoosenModule: string;
  baselines: Baseline[];

  handleModuleId(moduleId: string) {
    console.log("handleModuleId " + moduleId);
    this.idOfChoosenModule = moduleId;
    this.baselineService
      .getBaselinesByModuleId(this.idOfChoosenModule)
      .subscribe(response => this.handleSuccesfullResponse(response));
  }

  handleSuccesfullResponse(response: Baseline[]) {
    this.baselines = response;
    console.log("Hekkkk: " + this.baselines);
  }
}
