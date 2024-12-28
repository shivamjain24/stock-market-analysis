import      { fetchStockDetails, fetchStockStats} from './fetchStockData.js';
async function viewDetails(stock){
    const data = await fetchStockDetails();
    const data1 = await fetchStockStats();
    console.log(data1.stocksStatsData[0][stock]);
    const stockPrice = data1.stocksStatsData[0][stock].bookValue;
    const stockProfit = data1.stocksStatsData[0][stock].profit;
    const stockDetails = data.stocksProfileData;
    console.log(stockDetails[0][stock]);
    if(stockDetails[0][stock]){
        const stockDetailsContainer = document.querySelector('.stock-details');
        stockDetailsContainer.innerHTML = '';
        const stockInfo = 
        `<section class="stock-title">
            <span class="stockName">${stock}</span>
            <span class="stockProfit">${stockProfit}%</span>
            <span class="stockPrice">$${stockPrice}</span>
        </section>
        <section class="stock-details">
            <p>${stockDetails[0][stock].summary}</p>
        </section>`
        stockDetailsContainer.innerHTML = stockInfo;
    }
}

export { viewDetails };