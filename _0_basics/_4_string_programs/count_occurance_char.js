// TODO: Using Js Obj
{
    const count = (s) => {
        const obj = {};
        for (const char of s) {
            obj[char] = (obj[char] || 0) + 1;
        }
        return obj;
    };
    
    const s = "hello world";
    console.log(count(s));
}
// TODO: Using map
{
    const count = (s) => {
        const map = new Map();
        for (const char of s) {
            map.set(char, (map.get(char) || 0) + 1);
        }
        return map;
    };
    
    const s = "hello world";
    console.log(count(s));
}
// TODO: Using foreach with an obj
{
    const count = (s) => {
        const obj = {};
        [...s].forEach((char) => {
            obj[char] = (obj[char] || 0) + 1;
        });
        return obj;
    };
    
    const s = "hello world";
    console.log(count(s));
}
// TODO: Using reduce()
{
    const count = (s) => {
        return [...s].reduce((obj, char) => {
            obj[char] = (obj[char] || 0) + 1;
            return obj;
        }, {});
    };
    
    const s = "hello world";
    console.log(count(s));
}
// TODO: Using Arrays and ASCII mapping
{
    const count = (s) => {
        const a = Array(256).fill(0);
        for (const char of s) {
            a[char.charCodeAt(0)]++;
        }
        return a;
    };
    
    const s = "hello";
    console.log(count(s)['h'.charCodeAt(0)]);
}
// TODO: Using Regular Expression
{
    const count = (s) => {
        const obj = {};
        for (const char of new Set(s)) {
            obj[char] = (s.match(new RegExp(char, "g")) || []).length;
        }
        return obj;
    };
    
    const s = "hello world";
    console.log(count(s));
}