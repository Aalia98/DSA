// TODO: Brute Force approach using JavaScript loops

let array1 = ['a', 'b', 'c', 'd'];
let array2 = ['k', 'x', 'z'];

function findCommonElement(array1, array2) {

    for (let i = 0; i < array1.length; i++) {

        for (let j = 0; j < array2.length; j++) {

            if (array1[i] === array2[j]) {
                return true;
            }
        }
    }
    return false;
}
console.log(findCommonElement(array1, array2))

// TODO: Creating a new JavaScript Object

let arr1 = ['a', 'd', 'm', 'x'];
let arr2 = ['p', 'y', 'k'];

function findCommonElements2(arr1, arr2) {

    let obj = {};
    for (let i = 0; i < arr1.length; i++) {

        if (!obj[arr1[i]]) {
            let element = arr1[i];
            obj[element] = true;
        }
    }
    for (let j = 0; j < arr2.length; j++) {

        if (obj[arr2[j]]) {
            return true;
        }
    }
    return false;
}
console.log(findCommonElements2(arr1, arr2))

// TODO: Using filter method

function haveCommonItems(arr1, arr2) {
    const set1 = new Set(arr1);
    const commonItems = arr2.filter(item => set1.has(item));
    return commonItems.length > 0;
  }
  
  const a = [1, 2, 3, 4, 5];
  const b = [5, 6, 7, 8, 9];
  const result = haveCommonItems(a, b);
  console.log(result); // Output: true
  
// TODO: Using JavaScript Array.some() method

function haveCommonItems(arr1, arr2) {
    return arr1.some(item => arr2.includes(item));
  }
   
  const c = ['a', 'b', 'c', 'd', 'e'];
  const d = ['f', 'g', 'c'];
  const ans = haveCommonItems(c, d);
  console.log(ans); // Output: true
  
// TODO: Using Set and Array.prototype.some with has method (reverse check)

const e = [1, 2, 3, 4, 5];
const f = [6, 7, 8, 4, 10];

const set1 = new Set(e);
const set2 = new Set(f);

const hasCommonItem = [...set1].some(item => set2.has(item));

console.log(hasCommonItem); 

// TODO: Using Map for Tracking

const hasCommon = (arr1, arr2) => {
    const map = new Map();
    arr1.forEach(item => map.set(item, true));
    return arr2.some(item => map.has(item));
};

const g = [1, 2, 3];
const h = [4, 5, 3];
console.log(hasCommon(g, h)); // true

// TODO: Using JavaScript Set Intersection

function haveCommonElements(array1, array2) {
    const set1 = new Set(array1);
    const set2 = new Set(array2);

    for (let elem of set1) {
        if (set2.has(elem)) {
            return true;
        }
    }
    return false;
}
const x = ['a', 'b', 'c', 'd', 'e'];
const y = ['f', 'g', 'c'];

console.log(haveCommonElements(x, y)); 

const array3 = ['x', 'y', 'w', 'z'];
const array4 = ['m', 'n', 'k'];

console.log(haveCommonElements(array3, array4));

// TODO: Using JavaScript Array.every() with includes() Method

function haveCommonElements(arr1, arr2) {
    return arr1.every(item => arr2.includes(item));
}
const p = ['a', 'b', 'c', 'd', 'e'];
const q = ['f', 'g', 'c'];

console.log(haveCommonElements(p, q));

const r = ['x', 'y', 'w', 'z'];
const s = ['m', 'n', 'k'];

console.log(haveCommonElements(r, s)); 
