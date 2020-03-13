import { Component, OnInit } from '@angular/core';
import {CompactType, DisplayGrid, Draggable, GridsterConfig, GridsterItem, GridType, PushDirections, Resizable} from 'angular-gridster2';
import { fromEvent, Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;

  ngOnInit(): void {
    this.options = {
      gridType: GridType.Fixed,
      setGridSize : true,
      compactType: CompactType.CompactUp,
      margin: 10,
      outerMargin: true,
      useTransformPositioning: true,
      minCols: 1,
      maxCols: 8,
      minRows: 1,
      maxRows: 1000,
      maxItemCols: 8,
      minItemCols: 1,
      maxItemRows: 1000,
      minItemRows: 1,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 145,
      fixedRowHeight: 145,
      mobileBreakpoint : 600,
      keepFixedWidthInMobile: false,
      keepFixedHeightInMobile: true,
      pushItems: true,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      ignoreMarginInRow: false,
      draggable: {
        enabled: true,
        stop:function(item, gridsterItem, event){
          console.info('drag-end');
          console.info(item);
          console.info(gridsterItem);
          console.info(event);
          //do position update
        }
      },
      resizable: {
        enabled: true,
        stop:function(item, gridsterItem, event){
          console.info('resize-end');
          console.info(item);
          console.info(gridsterItem);
          console.info(event);
          //do position update
        }
      },
      swap: false,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: {north: true, east: true, south: true, west: true},
      pushResizeItems: false,
      displayGrid: DisplayGrid.None,
      disableWindowResize: false,
      disableWarnings: true,
      scrollToNewItems: true
     };
 
     this.dashboard = [
       {cols: 2, rows: 2, y: 0, x: 0,widget:"bar"},
       {cols: 2, rows: 2, y: 0, x: 2,widget:"pie"},
       {cols: 3, rows: 2, y: 2, x: 0,widget:"line"},
       {cols: 3, rows: 3, y: 2, x: 3,widget:"donut"},
       {cols: 3, rows: 2, y: 4, x: 0,widget:"area"},
       {cols: 4, rows: 2, y: 0, x: 4,widget:"area"},
       {cols: 2, rows: 2, y: 4, x: 4,widget:"kpi"}
     ];

     this.resizeObservable$ = fromEvent(window, 'resize')
      this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
        this.onResize(evt);
      })
  }
 
  constructor() { }
  
  removeItem(event,item) {
    event.stopPropogation();
    event.preventDefault();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({cols: 8, rows: 2, y: this.findMaxRow(), x: 0,widget:"bar"});
  }

  findMaxRow(){
    let row = 0;
    this.dashboard.forEach(chart=>{
      if(chart.y > row)
        row =chart.y;
    });
    return row;
  }


  onResize(event) {
    if(event.target.screen.availWidth <= 640)
    {
      this.options.setGridSize = false;
      this.changedOptions();
    }
    else{
      this.options.setGridSize = true;
      this.changedOptions();
    }
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }
}

