import { Component, SimpleChanges, OnInit, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
// ads the extension module 'HighchartsMore" to the imported namespace
HighchartsMore(Highcharts);

@Component({
  selector: 'app-highcharts-only',
  templateUrl: './highcharts-only.component.html',
  styleUrls: ['./highcharts-only.component.scss']
})
export class HighchartsOnlyComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {

  public chart: Highcharts.Chart;

  constructor() { }

  public ngOnInit(): void {

  }

  public ngAfterViewInit() {
    this.updateChart();
  }

  public ngOnChanges(changes: SimpleChanges): void {
  }

  public ngOnDestroy(): void {
  }

  private updateChart(): void {
    let highChart: Highcharts.Chart;
    highChart = Highcharts.chart({
      title: {
          text: 'Custom legend symbol'
      },

      series: [{
          type: 'line',
          data: [1, 2, 3, 4],
          color: 'red',
          negativeColor: 'lightblue',
          marker: {
              enabled: false
          }
      }]
    });

    this.chart = highChart;
  }
}

// import { Component, SimpleChanges, OnInit, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { interval, Subscription } from 'rxjs';
// import * as Highcharts from 'highcharts';
// import HighchartsMore from 'highcharts/highcharts-more';
// // ads the extension module 'HighchartsMore" to the imported namespace
// HighchartsMore(Highcharts);
// import * as HightStockcharts from 'highcharts/highstock';

// declare var require: any;
// let Boost = require('highcharts/modules/boost');
// let noData = require('highcharts/modules/no-data-to-display');
// let More = require('highcharts/highcharts-more');


// Boost(Highcharts);
// noData(Highcharts);
// More(Highcharts);
// noData(Highcharts);

// @Component({
//   selector: 'app-highcharts-only',
//   templateUrl: './highcharts-only.component.html',
//   styleUrls: ['./highcharts-only.component.scss']
// })
// export class HighchartsOnlyComponent implements OnInit {

//   public options: any = {
//     chart: {
//       type: 'scatter',
//       height: 700
//     },
//     title: {
//       text: 'Sample Scatter Plot'
//     },
//     credits: {
//       enabled: false
//     },
//     tooltip: {
//       formatter: function() {
//         return '<b>x: </b>' + Highcharts.dateFormat('%e %b %y %H:%M:%S', this.x) +
//           ' <br> <b>y: </b>' + this.y.toFixed(2);
//       }
//     },
//     xAxis: {
//       type: 'datetime',
//       labels: {
//         formatter: function() {
//           return Highcharts.dateFormat('%e %b %y', this.value);
//         }
//       }
//     },
//     series: [
//       {
//         name: 'Normal',
//         turboThreshold: 500000,
//         data: []
//       },
//       {
//         name: 'Abnormal',
//         turboThreshold: 500000,
//         data: []
//       }
//     ]
//   }
//   subscription: Subscription;
//   constructor(private http: HttpClient) { }

//   ngOnInit(){
//     // Set 10 seconds interval to update data again and again
//     const source = interval(10000);

//     // Sample API
//     const apiLink = 'https://api.myjson.com/bins/13lnf4';

//     this.subscription = source.subscribe(val => this.getApiResponse(apiLink).then(
//       data => {
//         const updated_normal_data = [];
//         const updated_abnormal_data = [];
//         data.forEach(row => {
//           const temp_row = [
//             new Date(row.timestamp).getTime(),
//             row.value
//           ];
//           row.Normal === 1 ? updated_normal_data.push(temp_row) : updated_abnormal_data.push(temp_row);
//         });
//         this.options.series[0]['data'] = updated_normal_data;
//         this.options.series[1]['data'] = updated_abnormal_data;
//         Highcharts.chart('container', this.options);
//       },
//       error => {
//         console.log('Something went wrong.');
//       })
//     );
//   }

//   getApiResponse(url) {
//     return this.http.get<any>(url, {})
//       .toPromise().then(res => {
//         return res;
//       });
//   }
// }
