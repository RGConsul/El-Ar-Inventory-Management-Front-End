const charts = document.querySelectorAll(".chart");

charts.forEach(function (chart, index) {
  var ctx = chart.getContext("2d");

  // Use different chart types based on the index
  var chartType = index === 0 ? "bar" : "line";

  var myChart = new Chart(ctx, {
    type: chartType,
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: index === 0 ? "# of Votes (Bar)" : "# of Votes (Line)",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: index === 0 ? "rgba(255, 99, 132, 0.2)" : "transparent",
          borderColor: index === 0 ? "rgba(255, 99, 132, 1)" : "rgba(54, 162, 235, 1)",
          borderWidth: 1,
          pointBackgroundColor: index === 0 ? "rgba(255, 99, 132, 1)" : "rgba(54, 162, 235, 1)",
          pointRadius: 5,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    $(table).DataTable();
  });
});
