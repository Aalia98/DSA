function nonRepeating(str) {
    const counts = {};
    for(let i = 0; i < str.length; i++) {
        counts[str.charAt(i)] = (counts[str.charAt(i)] || 0) + 1;
    }
    for (const count in counts) {
        if(counts[count] === 1) return count;
    }
    return '$';
}

const str = "geeksffororgeeks";
console.log(nonRepeating(str));
