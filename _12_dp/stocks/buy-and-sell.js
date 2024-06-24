// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function(prices) {
    let maxi = 0, mini = prices[0];

    for(let i = 1; i < prices.length; i++) {
        let profit = prices[i] - mini;
        if(profit > maxi) maxi = profit;
        if(prices[i] < mini) mini = prices[i];
    }
    return maxi;
};