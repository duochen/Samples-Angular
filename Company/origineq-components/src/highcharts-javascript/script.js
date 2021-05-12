
// Highcharts.chart('chart', {
//   // chart: { type: 'pie'},
//   // plotOptions: {
//   //   pie: {
//   //     dataLabels: {
//   //       enabled: true,
//   //       format:
//   //         '{point.percentage:.1f} %'
//   //     }
//   //   }
//   // },
//   // chart: { polar: true},
//   chart: { type: 'bar' },

//   title: { text: 'Sales' },
//   subtitle: { text: 'Fiscal Year 2020' },
//   xAxis: [
//     {
//       title: { text: 'Month' },
//       type: 'category',
//       reversed: false
//     }
//   ],
//   yAxis: [
//     {
//       title: { text: 'Sales' },
//       tickInterval: 5
//     }
//   ],

//   // series: [
//   //   {
//   //     name: 'Model R',
//   //     data: [ ['Jan',5],
//   //             ['Feb',8],
//   //             {
//   //               x: 2,
//   //               y: 11,
//   //               name: 'Mar',
//   //               color: '#FF9FFF'
//   //             },
//   //             ['Apr',19],
//   //             ['May',7],
//   //             ['Jun',8]],
//   //     dataSorting: {
//   //       enabled: true,
//   //       sortKey: 'name'
//   //     },
//   //     color: '#2A9FBC'
//   //   },
//   //   // {
//   //   //   name: 'Model R2',
//   //   //   data: [3, 4, 13, 36, 27, 18],
//   //   //   color: '#F15B2A'
//   //   // }

//   //   ],

//   data: {
//     csvURL: 'https://raw.githubusercontent.com/duochen/Samples-Angular/master/origineq-components/src/highcharts-javascript/data.csv'
//   },

//   legend: { enabled: true }
// });

var serviceURL = "http://ameriduo.com/php/live/data.php";

var chart = Highcharts.chart('chart', {
  chart: {
    type: 'area',
    events: {
      load: pullData
    }
  },
  title: { text: 'Dashboard' },
  subtitle: { text: 'Usage' },
  xAxis: {
    labels: {
      enabled: false
    },
    tickInterval: 1
  },
  yAxis: {
    min: 0,
    max: 100,
    title: { text: 'Usage' },
    tickInterval: 10
  },
  series: [ {
    name: 'Memory Usage',
    data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }],
  legend: { enabled: true }
});

function pullData() {
setInterval(doPullData, 1000);
}

async function doPullData() {
var result = await fetch(serviceURL);
if (result.ok) {
  var data = await result.json();
  chart.series[0].addPoint(
    [data[0], data[1]],
    true,
    chart.series[0].data.length >= 10,
    true);
}
}
