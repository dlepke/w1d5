function maxProfit(stockPriceArray) { //brute force method
  var maxProfit = 0;
  for (var x = 0; x < stockPriceArray.length; x++) {
    for (var y = x + 1; y < stockPriceArray.length; y++) {
      var profit = stockPriceArray[y] - stockPriceArray[x]
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit || -1;
}

var stockPrices = [3, 2, 43, 18, 143, 18];

//console.log(maxProfit(stockPrices));

console.log(elegantMethod(stockPrices));


//no nested for loops in elegantMethod!!

function elegantMethod(stockPriceArray) {
  var highest = stockPriceArray[0];
  var lowest = stockPriceArray[0];
  for (var x = 0; x < stockPriceArray.length; x++) {
    if (stockPriceArray[x] > highest) {
      highest = stockPriceArray[x];
    }
    if (stockPriceArray[x] < lowest) {
      lowest = stockPriceArray[x];
    }
  }
  var maxProfit = highest - lowest;
  return maxProfit;
}