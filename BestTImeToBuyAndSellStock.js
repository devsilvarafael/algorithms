var maxProfit = function(prices) {
    let buyDay = prices[0];
    let profit = 0;
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] < buyDay) {
            buyDay = prices[i];
        }

        let currentProfit = prices[i] - buyDay;

        if(currentProfit > profit) {
            profit = currentProfit;
        }
    }
    return profit;
}

const test = maxProfit([7,1,5,3,6,4]);

console.log(test);