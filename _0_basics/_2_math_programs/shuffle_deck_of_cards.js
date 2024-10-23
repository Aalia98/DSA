// TODO: Using Fisher–Yates shuffle Algorithm method

let cards = ["Hearts", "Diamonds", "Clubs", "Spades"];
let values = [
    "Ace","King","Queen","Jack",
    "2", "3", "4", "5", "6",
    "7", "8", "9", "10",
];

let res = [];

for (let card in cards) {
    for (let value in values) {
        res.push(values[value] + " of " + cards[card]);
    }
}

for (let i = res.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [res[i], res[j]] = [res[j], res[i]];
}

console.log(res);

// TODO: Using sorting and random number generator

let cards1 = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
let values1 = ['Ace','King','Queen','Jack', '2', '3', '4', '5', '6', '7', '8', '9', '10' ];

let res1 = [];

for (let card in cards1) {
  for (let value in values1) {
    res.push(values1[value] + ' of ' + cards1[card]);
  }
}

res1.sort(() => Math.random() - 0.5);

console.log(res1);
