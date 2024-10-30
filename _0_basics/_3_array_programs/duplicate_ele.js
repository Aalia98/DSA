// TODO: Using Nested For In Loop

let check_duplicate_in_array = (input_array) => {
    let duplicate_elements = []
    for (num in input_array) {
        for (num2 in input_array) {
            if (num === num2) {
                continue;
            }
            else {
                if (input_array[num] === input_array[num2]) {
                    duplicate_elements.push(input_array[num]);
                }
            }
        }
    }
    return [...new Set(duplicate_elements)];
}
let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
console.log(check_duplicate_in_array(arr));

// TODO: Using Sort() Method

let check_duplicate = (input_array) => {
    input_array = input_array.sort((a, b) => a - b);
    let duplicate_elements = []
    for (index in input_array) {
        if (input_array[index] ===
            input_array[index - 1]) {
            duplicate_elements.push(
                input_array[index]);
        }
    }
    return [...new Set(duplicate_elements)];
}
let arr1 = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
console.log(check_duplicate(arr1));

// TODO: Using filter() Method

const check_duplicate1=(input_array)=>{
    const duplicates =input_array.filter((item, index) =>input_array.indexOf(item) !== index);
    return Array.from(new Set(duplicates));
}
const arr2=[1,1,2,2,3,3,4,5,6,1];
console.log(check_duplicate1(arr2));

// TODO: Using a Single Loop

let check_duplicate2 = (input_array) => {
    let duplicate_elements = [];
    for (element of input_array) {
        if (input_array.indexOf(element)
            !== input_array.lastIndexOf(element)) {
            duplicate_elements.push(element);
        }
    }
    return [...new Set(duplicate_elements)];
};
let arr3 = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
console.log(check_duplicate2(arr3));

// TODO: Using a Set

let check_duplicate3 = (input_array) => {
    let unique = new Set();
    let duplicated_element = [];
    for (let i = 0; i < input_array.length; i++) {
        if (unique.has(input_array[i])) {
            duplicated_element.push(input_array[i]);
        }
        unique.add(input_array[i]);
    }
    return Array.from(new Set(duplicated_element));
};
let arr4 = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
console.log(check_duplicate3(arr4));

// TODO: Using Reduce Method

let check_duplicate4 = (input_array) => {
    input_array = input_array.sort((a, b) => a - b);
    return input_array.reduce(
        (duplicated_elements, current_element, current_index) => {
            if (input_array[current_index] ===
                input_array[current_index - 1]) {
                duplicated_elements.push(current_element);
            }
            return Array.from(new Set(duplicated_elements));
        },
        []
    );
};
let arr5 = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
console.log(check_duplicate4(arr5));

// TODO: Using Map to Track Frequencies

const findDuplicates = (arr) => {
    const elementMap = new Map();
    const duplicates = [];
    arr.forEach((element) => {
        if (elementMap.has(element)) {
            elementMap.set(element, elementMap.get(element) + 1);
        } else {
            elementMap.set(element, 1);
        }
    });
    elementMap.forEach((count, element) => {
        if (count > 1) {
            duplicates.push(element);
        }
    });

    return duplicates;
};

const array = [1, 3, 4, 3, 4, 1, 3, 3, 3, 4];
const duplicateElements = findDuplicates(array);

console.log(duplicateElements); 

