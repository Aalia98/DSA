// TODO: Using Math.random() function

let arr = ["GFG_1", "GeeksForGeeks",
    "Geeks", "Computer Science Portal"];

function GFG_Fun() {
    console.log(arr[(Math.floor(Math.random() * arr.length))]);
}
GFG_Fun()

// TODO: Using custom function

let arr1 = ["GFG_1", "GeeksForGeeks",
    "Geeks", "Computer Science Portal"];

function random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
}

function GFG_Fun() {
    console.log(arr1[(Math.floor(random(1, 5))) - 1]);
}
GFG_Fun()

// TODO: Using Fisher-Yates Shuffle Algorithm

function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
function getRandomElement(array) {
    const shuffledArray = shuffleArray(array.slice());
    return shuffledArray[0];
}
const array = [1, 2, 3, 4, 5];
const randomElement = getRandomElement(array);

console.log('Original Array:', array); 
console.log('Random Element:', randomElement); 
