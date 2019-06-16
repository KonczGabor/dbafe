import { Baseline } from "./baseline";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BaselineService {
  getBaselinesByModuleId(moduleId: string) {
    console.log("InService Choosen Module id " + moduleId);
    return this.http.get<Baseline[]>(
      `http://localhost:8080/baseline/find-by-module/${moduleId}`
    );
  }

  constructor(private http: HttpClient) {}

  getAllBaseline() {
    return this.http.get<Baseline[]>("http://localhost:8080/baseline/get-all");
  }

  kabbe(): string {
    return "Kabbe a faszom!";
  }
}
