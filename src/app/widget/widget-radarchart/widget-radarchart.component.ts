import { Component, OnInit,Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-widget-radarchart',
  templateUrl: './widget-radarchart.component.html',
  styleUrls: ['./widget-radarchart.component.css']
})
export class WidgetRadarchartComponent implements OnInit {


  radarChart: any;

  @Input() id:any;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.radarChart = new Chart(this.id, {
        type: 'doughnut',
        data: {
          labels: ["New","Completed","Error"],
          datasets: [{
            label: 'Pie',
            backgroundColor: [
              '#8533ff',
              '#3399ff',
              '#ff6699'
              
            ],

            borderColor: [
              '#8533ff',
              '#3399ff',
              '#ff6699'
              
            ],
            hoverBorderColor: [
              '#8533ff',
              '#3399ff',
              '#ff6699'
              
            ],
            data: [10,20,50],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          responsiveAnimationDuration: 0,
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              padding: 20,
              fontColor: "#b2b2b3"
            }
          }
        }
      });
    }, 100);
  }

}
