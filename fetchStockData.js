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

async function fetchStockDetails() {
    try {
        const response = await fetch('https://stocksapi-uhe1.onrender.com/api/stocks/getstocksprofiledata');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
        } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to load stock data');
    }
}
async function fetchStockStats() {
    try {
        const response = await fetch('https://stocksapi-uhe1.onrender.com/api/stocks/getstockstatsdata');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
        } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to load stock data');
    }
}
export {fetchStockData, fetchStockDetails, fetchStockStats};