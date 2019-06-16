import { ModuleService } from "./module.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Module } from "./module";

@Component({
  selector: "app-module",
  templateUrl: "./module.component.html",
  styleUrls: ["./module.component.css"]
})
export class ModuleComponent implements OnInit {
  constructor(private moduleService: ModuleService) {}

  ngOnInit() {
    this.getAllModule();
  }

  @Output() moduleIdtoEmit = new EventEmitter<string>();

  selectedModuleId: string;

  moduleTableColumnNames: string[] = [
    "Id",
    "Name",
    "Module Id",
    "Created by",
    "Created on",
    "Modified by",
    "Modified on"
  ];

  modules: Module[];

  getAllModule() {
    this.moduleService
      .getAllModule()
      .subscribe(response => this.handleSuccesfullResponse(response));
  }

  getModuleId(moduleId: string) {
    this.selectedModuleId = moduleId;
    console.log("Selected " + this.selectedModuleId);
    this.moduleIdtoEmit.emit(this.selectedModuleId);
  }

  handleSuccesfullResponse(response: Module[]) {
    this.modules = response;
    console.log(this.modules);
  }
}
