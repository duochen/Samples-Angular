
Highcharts.chart('chart', {
  // chart: { type: 'pie'},
  // plotOptions: {
  //   pie: {
  //     dataLabels: {
  //       enabled: true,
  //       format:
  //         '{point.percentage:.1f} %'
  //     }
  //   }
  // },
  // chart: { polar: true},
  chart: { type: 'bar' },

  title: { text: 'Sales' },
  subtitle: { text: 'Fiscal Year 2020' },
  xAxis: [
    {
      title: { text: 'Month' },
      type: 'category',
      reversed: false
    }
  ],
  yAxis: [
    {
      title: { text: 'Sales' },
      tickInterval: 5
    }
  ],

  // series: [
  //   {
  //     name: 'Model R',
  //     data: [ ['Jan',5],
  //             ['Feb',8],
  //             {
  //               x: 2,
  //               y: 11,
  //               name: 'Mar',
  //               color: '#FF9FFF'
  //             },
  //             ['Apr',19],
  //             ['May',7],
  //             ['Jun',8]],
  //     dataSorting: {
  //       enabled: true,
  //       sortKey: 'name'
  //     },
  //     color: '#2A9FBC'
  //   },
  //   // {
  //   //   name: 'Model R2',
  //   //   data: [3, 4, 13, 36, 27, 18],
  //   //   color: '#F15B2A'
  //   // }

  //   ],

  data: {
    csvURL: 'file:///D:/myproject/Samples-Angular/origineq-components/src/highcharts-javascript/data.csv'
  },

  legend: { enabled: true }
});
