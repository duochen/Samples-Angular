import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-highcharts-basic',
  templateUrl: './highcharts-basic.component.html',
  styleUrls: ['./highcharts-basic.component.scss']
})
export class HighchartsBasicComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        type: 'line',
        name: 'Line 1',
        data: [1, 2, 3, 4]
      }
    ]
  });

  ngOnInit(): void {
  }

  // add point to chart series
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
}
