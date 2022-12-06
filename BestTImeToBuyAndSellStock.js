var maxProfit = function (prices) {
    let buyDay = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (buyDay > prices[i]) {
            buyDay = prices[i];
        }

        const currentProfit = prices[i] - buyDay;

        if (currentProfit > profit) {
            profit = currentProfit;
        }
    }

    return profit;
};


const test = maxProfit([1,2]);

console.log(test)