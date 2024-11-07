// TODO: Method 1: Using the reduce() method

function mostFrequentUsingReduce(arr) {
    const counts = arr.reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1;
      return acc;
    }, {});
  
    return Object.keys(counts).reduce((a, b) => 
        (counts[a] > counts[b] ? a : b));
  }
  
  const array = 
      ['Cat', 'Dog', 'Cat', 'Goat', 'Cow', 'Cat', ];
  console.log(mostFrequentUsingReduce(array));
  
// TODO: Method 2: Using the JavaScript Map()

function mostFrequentUsingMap(arr) {
    const counts = new Map();
  
    for (let num of arr) {
      counts.set(num, (counts.get(num) || 0) + 1);
    }
  
    let mostFrequent;
    let maxCount = 0;
  
    counts.forEach((count, num) => {
      if (count > maxCount) {
        maxCount = count;
        mostFrequent = num;
      }
    });
  
    return mostFrequent;
  }
  
  const array1 = [1, 2, 2, 3, 2, 3, 4];
  console.log(mostFrequentUsingMap(array1)); 
  
// TODO: Method 3: Using the Math.max method

function mostFrequentUsingMathMax(arr) {
    const counts = {};
  
    for (let num of arr) {
      counts[num] = (counts[num] || 0) + 1;
    }
  
    const maxCount = 
        Math.max(...Object.values(counts));
    const mostFrequent = 
        Object.keys(counts).find(key => 
          counts[key] === maxCount);
  
    return mostFrequent;
  }
  
  const array2 = [1, 5, 2, 3, 5, 6, 4];
  console.log(mostFrequentUsingMathMax(array2)); 
  
// TODO: Method 4: Using sorting

function mostFrequentUsingSorting(arr) {
    arr.sort(); 
    let maxCount = 0;
    let mostFrequent;
    let currentCount = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentCount++;
        } else {
            if (currentCount > maxCount) {
                maxCount = currentCount;
                mostFrequent = arr[i - 1];
            }
            currentCount = 1; // Reset current count
        }
    }

    if (currentCount > maxCount) {
        maxCount = currentCount;
        mostFrequent = arr[arr.length - 1];
    }

    return mostFrequent;
}

const array3 = ['Cat', 'Dog', 'Cat', 'Goat', 'Cow', 'Cat'];
console.log(mostFrequentUsingSorting(array3)); // Output: Cat




