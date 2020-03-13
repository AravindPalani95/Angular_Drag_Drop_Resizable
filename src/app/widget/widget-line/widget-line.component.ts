import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-widget-line',
  templateUrl: './widget-line.component.html',
  styleUrls: ['./widget-line.component.css']
})
export class WidgetLineComponent implements OnInit {

  lineChart: any;
  @Input() id:any;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {

      this.lineChart = new Chart(this.id, {
        type: 'line',
        data: {
            labels: ["New", "Open", "Completed", "Error", "Acknowledged", "NotAcknowledged", "OffDuty", "Change"],
            datasets: [
                {
                    data: [1,3,4,5,7,9,8,10],
                    backgroundColor: 'rgba(102, 216, 208, 0)',
                    borderColor: '#ff3300',
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
                    fontColor: "#b2b2b3"
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: "#b2b2b3"
                    },
                    gridLines: {
                        color: "rgb(98, 98, 100,0.5)",
                    }
                }],
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: "#b2b2b3"
                    }
                }]
            },
        }
    });
    });
  }

}
