
const options = {
    // set grid lines to improve the readability of the chart, learn more here: https://apexcharts.com/docs/grid/
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -26
      },
    },
    series: [
      {
        name: "$GCOAT",
        data: [100000, 200000, 500000, 700000, 900000],
        color: "rgb(247, 212, 93);",
      },
    ],
    chart: {
      height: "100%",
      maxWidth: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    legend: {
      show: true
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "rgb(247, 212, 93);",
        gradientToColors: ["rgb(247, 212, 93);"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    xaxis: {
      categories: ['04. February', '05. February', '06. February', '07. February', '08. February', '10. February'],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        formatter: function (value) {
          return '$' + value;
        }
      }
    },
    }
    
    if (document.getElementById("grid-chart") && typeof ApexCharts !== 'undefined') {
    const chart = new ApexCharts(document.getElementById("grid-chart"), options);
    chart.render();
    }
    