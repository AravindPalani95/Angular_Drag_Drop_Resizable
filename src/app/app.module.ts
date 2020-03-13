import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularDraggableModule } from 'angular2-draggable';
import { GridsterModule } from 'angular-gridster2';

import { AppComponent } from './app.component';
import { WidgetBarchartComponent } from './widget/widget-barchart/widget-barchart.component';
import { WidgetPiechartComponent } from './widget/widget-piechart/widget-piechart.component';
import { WidgetLineComponent } from './widget/widget-line/widget-line.component';
import { WidgetRadarchartComponent } from './widget/widget-radarchart/widget-radarchart.component';
import { WidgetAreachartComponent } from './widget/widget-areachart/widget-areachart.component';
import { KpiComponent } from './widget/kpi/kpi.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetBarchartComponent,
    WidgetPiechartComponent,
    WidgetLineComponent,
    WidgetRadarchartComponent,
    WidgetAreachartComponent,
    KpiComponent
  ],
  imports: [
    BrowserModule,
    GridsterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
