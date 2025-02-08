async function fetchPrices() {
    try {
        let response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd');
        let data = await response.json();
        document.getElementById('btc-price').innerText = data.bitcoin.usd;
        document.getElementById('eth-price').innerText = data.ethereum.usd;
        document.getElementById('doge-price').innerText = data.dogecoin.usd;
    } catch (error) {
        console.error("Error fetching prices:", error);
    }
}

// Si sax ah ugu yeer function-ka
fetchPrices();
setInterval(fetchPrices, 60000); // Update every 60 seconds