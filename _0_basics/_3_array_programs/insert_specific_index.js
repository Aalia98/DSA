// TODO:  Using array.splice() Method

function insertElement() {
    let arr = [1, 2, 3, 4, 5];
    let index = 2;
    let element = -99;

    arr.splice(index, 0, element);
    
    console.log(arr);
}

insertElement();

// TODO:  Using JavaScript for Loop

function insertElement() {
    let arr = [1, 2, 3, 4, 5];
    let index = 2;
    let element = -99;

    for (let i = arr.length; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = element;

    console.log(arr);
}

insertElement();

// TODO:  Using the concat() Method

function insertItemAtIndex(arr, index, item) {
    if (index < 0 || index > arr.length) {
      return arr;
    }
  
    return arr.slice(0, index)
      .concat(item, arr.slice(index));
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const newArray = insertItemAtIndex(originalArray, 2, -99);
  console.log(newArray); 
  
// TODO:  Using Spread Syntax and Array Slicing

let arr = [1, 2, 3, 5];
const index = 3;
const newItem = 4;

arr = [...arr.slice(0, index), newItem, ...arr.slice(index)];

console.log(arr);

// TODO:  Using Array.from() Method

function insertElement(arr, index, element) {
    return Array.from({ length: arr.length + 1 }, (_, i) => 
        i === index ? element : i < index ? arr[i] : arr[i - 1]
    );
}

let arr1 = [1, 2, 3, 4, 5];

let element = -99;

let index1 = 2;

let newArr = insertElement(arr1, index1, element);

console.log(newArr);

// TODO:  Using Array.prototype.reduce() Method

function insertElement(array, index, element) {
    return array.reduce((acc, curr, i) => {
        if (i === index) acc.push(element);
        acc.push(curr);
        return acc;
    }, []);
}
const originalArray2 = [1, 2, 3, 4, 5];
const index2 = 2;
const element2 = -99;
const newArray2 = insertElement(originalArray2, index2, element2);

console.log(newArray2); 

// TODO:  Using Array.prototype.map() Method

function insertElement(arr, index, element) {
    return arr.map((item, i) => 
        i === index ? [element, item] : item
    ).flat();
}

let arr3 = [1, 2, 3, 4, 5];

let element3 = -99;

let index3 = 2;

let newArr3 = insertElement(arr3, index3, element3);

console.log(newArr3);
