import { Component, OnInit,Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-widget-piechart',
  templateUrl: './widget-piechart.component.html',
  styleUrls: ['./widget-piechart.component.css']
})
export class WidgetPiechartComponent implements OnInit {

  pieChart: any;
  @Input() id:any;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {

      this.pieChart = new Chart(this.id, {
        type: 'pie',
        data: {
          labels: ["New","Completed","Error"],
          datasets: [{
            label: 'Pie',
            backgroundColor: [
                        '#ffff66',
                        '#1a75ff',
                        '#00ffbf',
                        '#00ff00',
                        '#3399ff'
            ],

            borderColor: [
                        '#ffff66',
                        '#1a75ff',
                        '#00ffbf',
                        '#00ff00',
                        '#3399ff'
            ],
            hoverBorderColor: [
              '#ffff66',
              '#1a75ff',
              '#00ffbf',
              '#00ff00',
              '#3399ff'
  ],
            data: [10,20,30],
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
          },
        }
      });
    });
  }

}
