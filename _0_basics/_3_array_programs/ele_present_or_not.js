// TODO: Using For Loop

let fruits_array = [ 
    "mango", 
    "banana", 
    "apple", 
    "pineapple", 
    "pomegranate", 
    "orange", 
  ]; 
    
  let valueChecker = (value) => { 
    for (let i = 0; i < fruits_array.length; i++) { 
      let current_value = fruits_array[i]; 
      if (value === current_value) { 
        return value + " is present at index: " + i; 
      } 
    } 
    return value + " is not included in this array.."; 
  }; 
    
  console.log(valueChecker("apple")); 
  console.log(valueChecker("app")); 
  console.log(valueChecker("banana")); 

// TODO: Using includes() method

let fruits_array1 = [ 
    "mango", 
    "banana", 
    "apple", 
    "pineapple", 
    "pomegranate", 
    "orange", 
  ]; 
    
  let value_1 = "apple"; 
  let value_2 = "app"; 
  console.log(fruits_array1.includes(value_1)); 
  console.log(fruits_array1.includes(value_2)); 

// TODO: Using indexOf() method  

let fruits_array2 = [ 
    "mango", 
    "banana", 
    "apple", 
    "pineapple", 
    "pomegranate", 
    "orange", 
  ]; 
    
  let checkValue = (value) => { 
    if (fruits_array2.indexOf(value) >= 0) 
      return value + " is present at index : " 
        + fruits_array2.indexOf(value); 
    else  
      return value + " is not present in this array"; 
  }; 
    
  console.log(checkValue("apple")); 
  console.log(checkValue("app")); 
  console.log(checkValue("mango")); 