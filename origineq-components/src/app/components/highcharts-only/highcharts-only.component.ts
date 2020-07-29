import { Component, SimpleChanges, OnInit, OnChanges, OnDestroy } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
// ads the extension module 'HighchartsMore" to the imported namespace
HighchartsMore(Highcharts);
import * as HightStockcharts from 'highcharts/highstock';

@Component({
  selector: 'app-highcharts-only',
  templateUrl: './highcharts-only.component.html',
  styleUrls: ['./highcharts-only.component.scss']
})
export class HighchartsOnlyComponent implements OnInit, OnChanges, OnDestroy {

  public chart: Highcharts.Chart;

  constructor() { }

  public ngOnInit(): void {

  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.updateChart();
  }

  public ngOnDestroy(): void {

  }

  private updateChart(): void {
    // let highChart = Highcharts.chart(
    //   "main", {
    //   chart: {
    //     type: 'bar'
    //   },
    //   title: {
    //     text: 'Fruit Consumption'
    //   },
    //   xAxis: {
    //     categories: ['Apples', 'Bananas', 'Oranges']
    //   },
    //   yAxis: {
    //     title: {
    //       text: 'Fruit eaten'
    //     }
    //   },
    //   series: [{
    //     name: 'Jane',
    //     data: [1, 0, 4]
    //   }, {
    //     name: 'John',
    //     data: [5, 7, 3]
    //   }]
    // });
    // this.chart.addSeries({
    //   name: 'Balram',
    //   data:[2,3,7]
    // });

  }

}
