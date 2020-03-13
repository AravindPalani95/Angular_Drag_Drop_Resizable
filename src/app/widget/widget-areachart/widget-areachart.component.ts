import { Component, OnInit,Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-widget-areachart',
  templateUrl: './widget-areachart.component.html',
  styleUrls: ['./widget-areachart.component.css']
})
export class WidgetAreachartComponent implements OnInit {

  areaChart: any;

  @Input() id:any

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.areaChart = new Chart(this.id, {
        type: 'line',
        data: {
          labels: ["New","Complted","Error","Inprogress"],
          datasets: [
            {
              data: [10,40,20,5],
              backgroundColor: [
                'rgba(0,102,102,0.6)'
              ],
              borderColor: [
                '#006666'
              ],
              borderWidth: 1,
              pointRadius: 3,
            }
          ]

        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          responsiveAnimationDuration: 0,
          legend: {
            display: false,
            position: 'bottom',
            labels: {
              usePointStyle: true,
              padding: 20,
              boxWidth: 30,
              fontColor: "#b2b2b3",
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                fontColor: "#b2b2b3",
              },
              gridLines: {
                color: "rgb(98, 98, 100,0.5)",
              }
            }],
            xAxes: [{
              ticks: {
                  fontColor: "#b2b2b3",
              },
              gridLines: {
                color: "rgb(98, 98, 100,0.5)"
              },
          }]
          },
        }
      });
    });
  }

}
