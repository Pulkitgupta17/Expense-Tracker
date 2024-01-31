$(function ($) {

  /* ChartJS
   * -------
   * Data and config for chartjs
   */

  // Global configs for graphs
  var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }

  };

  var doughnutPieOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

// End global configs for graphs
  

// Bar chart showing monthly spending (past 30 days)
$.ajax({
  url: "http://127.0.0.1:8000/app/visuals/get_monthly_spending_visuals/all",
  method: "GET",
  success: function(data){
    var bar_chart_labels = [];
    var bar_chart_data = [];
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
          bar_chart_labels.push(key);
          bar_chart_data.push(data[key])
      }
  }

  'use strict';

    if ($("#barChart").length) {
      var barChartCanvas = $("#barChart").get(0).getContext("2d");
      // This will get the first returned node in the jQuery collection.

      var barChartData = {
        labels: bar_chart_labels,
        datasets: [{
          label: 'Amount',
          data: bar_chart_data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
          fill: false
        }]
      };

      var barChart = new Chart(barChartCanvas, {
        type: 'bar',
        data: barChartData,
        options: options
      });
    
    }
  }});


// Doughnut chart showing weekly spending (past 7 days)
$.ajax({
  url: "http://127.0.0.1:8000/app/visuals/get_weekly_spending_visuals/all",
  method: "GET",
  success: function(data){
    var doughnut_chart_labels = [];
    var doughnut_chart_data = [];
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
          // console.log(key + " -> " + data[key]);
          doughnut_chart_labels.push(key);
          doughnut_chart_data.push(data[key])
      }
  }

  'use strict';
  if ($("#doughnutChart").length) {
    var doughnutChartCanvas = $("#doughnutChart").get(0).getContext("2d");
      // This will get the first returned node in the jQuery collection.
      var doughnutPieData = {
        datasets: [{
          data: doughnut_chart_data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
        }],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: doughnut_chart_labels,
      };
      var doughnutChart = new Chart(doughnutChartCanvas, {
        type: 'doughnut',
        data: doughnutPieData,
        options: doughnutPieOptions
      });
    
    }
  
  }});

  // Pie chart showing overall spending by category
$.ajax({
  url: "http://127.0.0.1:8000/app/visuals/get_spending_by_category_visuals/all",
  method: "GET",
  success: function(data){
    var pie_chart_labels = [];
    var pie_chart_data = [];
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
          // console.log(key + " -> " + data[key]);
          pie_chart_labels.push(key);
          pie_chart_data.push(data[key])
      }
  }

  'use strict';
  if ($("#pieChart").length) {
    var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
      // This will get the first returned node in the jQuery collection.
      var pieChartData = {
        datasets: [{
          data: pie_chart_data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
        }],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: pie_chart_labels,
      };
      var pieChart = new Chart(pieChartCanvas, {
        type: 'pie',
        data: pieChartData,
        options: doughnutPieOptions
      });
    }
  
  }});

});