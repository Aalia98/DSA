const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
const visited = {};
const ans = [];

for(let i = 0; i < array.length; i++) {
    if(!visited[array[i]]) {
        visited[array[i]] = true;
        ans.push(array[i]);
    }
}
console.log(ans);
