// TODO: Approach 1: Using sort() with a custom compare function

const GFG_object = [
    { name: "Rahul", age: 30 },
    { name: "Aman", age: 25 },
    { name: "Deepak", age: 35 }
];

let result = GFG_object.sort((a, b) =>
    a.name.localeCompare(b.name));

console.log(result);

// TODO: Approach 2: sorting by a user-defined function.

let GFG_Object = [
    { f_name: 'Geeks', l_name: '_2' },
    { f_name: 'for', l_name: '_1' },
    { f_name: 'GFG', l_name: '_3' }
];

GFG_Object.sort(compare);

function compare(a, b) {
    if (a.l_name < b.l_name)
        return -1;
    if (a.l_name > b.l_name)
        return 1;
    return 0;
}

console.log(GFG_Object);

// TODO: Approach 3: Using sort() with a comparison function and the toLowerCase() method

let GFG_Obj = [
    { f_name: 'Geeks', l_name: '_2' },
    { f_name: 'for', l_name: '_1' },
    { f_name: 'GFG', l_name: '_3' }
];

GFG_Obj.sort((a, b) =>
    a.f_name.toLowerCase().localeCompare(b.f_name.toLowerCase()));

console.log(GFG_Obj);

// TODO: Approach 4: Using Intl.Collator for Locale-Aware String Comparison

const GFG_obj = [
    { name: "Nikunj", age: 30 },
    { name: "Dhruv", age: 25 },
    { name: "Yash", age: 35 }
];

const collator = new Intl.Collator('en', { sensitivity: 'base' });

let result1 = GFG_obj.sort((a, b) =>
    collator.compare(a.name, b.name));
 
console.log(result1);

// TODO: Approach 5: Using the map() and sort() Methods for More Complex Sorting

let GFG_Object2 = [
    { f_name: 'geeks', l_name: '_2' },
    { f_name: 'For', l_name: '_1' },
    { f_name: 'GFG', l_name: '_3' }
];

let mapped = GFG_Object2.map((el, i) => {
    return { index: i, value: el.f_name.toLowerCase() };
});

mapped.sort((a, b) => {
    if (a.value < b.value) {
        return -1;
    }
    if (a.value > b.value) {
        return 1;
    }
    return 0;
});

let result2 = mapped.map(el => GFG_Object[el.index]);
console.log(result2);

