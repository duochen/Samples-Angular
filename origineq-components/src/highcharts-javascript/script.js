
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

  title: { text: 'Sales' },
  subtitle: { text: 'Fiscal Year 2020' },
  xAxis: [
    {
      title: { text: 'Month' },
      categories: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ]
    }
  ],
  yAxis: [
    {
      title: { text: 'Sales' },
      tickInterval: 5
    }
  ],

  series: [
    {
      name: 'Model R',
      data: [ [0,5],
              [1,8],
              {
                x: 2,
                y: 11,
                name: 'Trade Show',
                color: '#FF9FFF'
              },
              [3,19],
              [4,7],
              [5,8]],
      color: '#2A9FBC'
    },
    // {
    //   name: 'Model R2',
    //   data: [3, 4, 13, 36, 27, 18],
    //   color: '#F15B2A'
    // }

  ],



  legend: { enabled: true }
});
