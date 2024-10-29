// TODO: Approach 1: Using Array.isArray() Method

function checkObject() {
    const countries = ["India", "USA", "Canada"];
    const checkArrayObj = Array.isArray(countries);

    console.log(checkArrayObj);
}

checkObject();

// TODO: Approach 2: Using typeof Operator

console.log(
    typeof "Geeks" + "\n" +
    typeof [1, 2, 3, 4] + "\n" +
    typeof {name:'Kartik', age:20} + "\n" +
    typeof new Date() + "\n" +
    typeof function () {} + "\n" +
    typeof job + "\n" +
    typeof null
);

// TODO: Approach 3: Using instanceof Operator

const array1 = [1, 2, 3];
const notArray = { name: 'example' };
console.log(array1 instanceof Array);
console.log(notArray instanceof Array); 
