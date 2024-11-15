// TODO: Naive approach:

function maxProfit(price, n) { 

	let profit = new Array(n); 
	for (let i = 0; i < n; i++) 
		profit[i] = 0; 

	let max_price = price[n - 1]; 
	for (let i = n - 2; i >= 0; i--) { 

		if (price[i] > max_price) 
			max_price = price[i]; 

		profit[i] = Math.max(profit[i + 1], 
			max_price - price[i]); 
	} 

	let min_price = price[0]; 
	for (let i = 1; i < n; i++) { 

		if (price[i] < min_price) 
			min_price = price[i]; 

		profit[i] = Math.max(profit[i - 1], 
			profit[i] + (price[i] - min_price)); 
	} 
	let result = profit[n - 1]; 

	return result; 
} 

let price = [2, 30, 15, 10, 8, 25, 80]; 
let n = price.length; 

console.log("Maximum Profit = " + 
	maxProfit(price, n));

// TODO: Recursive Approach:

function f(idx, buy, prices, cap, n) { 

	if (cap == 0) { 
		return 0; 
	} 

	if (idx == n) { 
		return 0; 
	} 

	let profit = 0; 

	if (buy == 0) { 
		profit = Math.max( 
			-prices[idx] + f(idx + 1, 1, prices, cap, n), 
			f(idx + 1, 0, prices, cap, n) 
		); 
	} 
	else { 
		profit = Math.max( 
			prices[idx] + f(idx + 1, 0, prices, cap - 1, n), 
			f(idx + 1, 1, prices, cap, n) 
		); 
	} 

	return profit; 
} 

function maxTwoBuySell(prices, n) { 
	return f(0, 0, prices, 2, n); 
} 

const arr = [2, 30, 15, 10, 8, 25, 80]; 
const size = arr.length; 
console.log(maxTwoBuySell(arr, size));

