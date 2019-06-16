import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ModuleComponent } from './module/module.component';
import { BaselineComponent } from './baseline/baseline.component';
import { HttpClientModule } from '@angular/common/http';
import { MainCanvasComponent } from './main-canvas/main-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ModuleComponent,
    BaselineComponent,
    MainCanvasComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
