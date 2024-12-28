import      { fetchStockStats } from './fetchStockData.js';
async function viewStats(){
    const data = await fetchStockStats();
    const stockStats = data.stocksStatsData;
    // Display the stock details

    const stockDetails = document.getElementById('info');
    stockDetails.innerHTML = '';
    stockStats.forEach(data => {
        for (const stock in data) {
            if (stock === "_id") continue;
            const stockName = stock;
            const stockPrice = data[stock].bookValue;
            const stockProfit = data[stock].profit;
            const stockElement = document.createElement('div');
            stockElement.classList.add('stock-info');
            stockElement.innerHTML = `
            <button class = 'stockName'>${stockName}</button>
            <span class = 'stockPrice'>$${stockPrice.toFixed(2)}</span>
            <span class = 'stockProfit'>${stockProfit.toFixed(2)}%</span>
            `;
            stockDetails.appendChild(stockElement);
        }
    });
}

export { viewStats };