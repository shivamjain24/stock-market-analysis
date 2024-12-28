// Declare a global variable for the chart
let stockChart;

// Function to fetch stock data from the API
async function fetchStockData() {
  try {
    const response = await fetch('https://stocksapi-uhe1.onrender.com/api/stocks/getstocksdata');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    alert('Failed to load stock data');
  }
}

// Function to convert Unix timestamps to human-readable dates
function convertToDate(timestamps) {
  return timestamps.map(timestamp => {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    return date.toLocaleDateString(); // Use default locale for date formatting
  });
}

// Function to update the chart based on the selected timeframe
async function updateChart(timeframe) {
  const data = await fetchStockData();
  console.log(data.stocksData[0].AAPL[timeframe]);
  const timeframeData = data.stocksData[0].AAPL[timeframe]; // Select the correct data based on timeframe
  
  // Convert timestamps to readable dates
  const labels = convertToDate(timeframeData.timeStamp);
  const prices = timeframeData.value;

  // If the chart exists, destroy it before creating a new one
  if (stockChart) {
    stockChart.destroy();
  }

  // Get the canvas element
  const ctx = document.getElementById('stockChart').getContext('2d');

  // Create a new chart
  stockChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: `Stock Price (${timeframe})`,
        data: prices,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Date'
          },
          ticks: {
            autoSkip: true,
            maxTicksLimit: 20 // Limit the number of ticks to avoid overcrowding
          }
        },
        y: {
          title: {
            display: true,
            text: 'Price (USD)'
          }
        }
      } 
    }
  });
}

// Load the initial data (e.g., 5 years) when the page is loaded
window.onload = function() {
  updateChart('5y');
};
