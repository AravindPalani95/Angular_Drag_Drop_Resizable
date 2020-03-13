import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.css']
})
export class KpiComponent implements OnInit {

  @Input() count:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
