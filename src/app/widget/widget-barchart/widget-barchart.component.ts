import { Component, OnInit,Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-widget-barchart',
  templateUrl: './widget-barchart.component.html',
  styleUrls: ['./widget-barchart.component.css']
})
export class WidgetBarchartComponent implements OnInit {

  barChart: any;
  @Input() id:any;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.barChart = new Chart(this.id, {
        type: 'bar',
        data: {
            labels: ["New", "Open", "Completed", "Error"],
            datasets: [

                {
                    data: [12, 19, 3, 5],
                    backgroundColor: [
                        '#8533ff',
                        '#ff471a',
                        '#3399ff',
                        '#00ff00',
                        '#00ffbf',
                        
                    ],
                    borderColor: [
                        '#8533ff',
                        '#ff471a',
                        '#3399ff',
                        '#00ff00',
                        '#00ffbf',
                        
                        
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
                        fontColor: "#b2b2b3"
                    }
                }]
            },
        }
    });
    console.info(this.barChart);
    });

}

}