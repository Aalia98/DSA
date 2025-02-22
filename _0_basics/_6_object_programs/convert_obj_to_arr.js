{
  let obj = { 1: 5, 2: 7, 3: 0, 4: 0, 5: 0 };
  const arr = [[], [], [], [], []];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (j === 0) {
        arr[i].push(Object.keys(obj)[i]);
      } else if (j === 1) {
        arr[i].push(Object.values(obj)[i]);
      }
    }
  }
  console.log(arr);
}

// TODO: Using Object.keys() and JavaScript map() Method
{
  let obj = { 1: 5, 2: 7, 3: 0, 4: 0, 5: 0 };

  let result = Object.keys(obj).map(function (key) {
    return [Number(key), obj[key]];
  });
  console.log(result);
}

// TODO: Using JavaScript Object.entries() Method
{
  let obj = { 1: 5, 2: 7, 3: 0, 4: 0, 5: 0 };

  let result = Object.entries(obj);
  console.log(result);
}

// TODO: Using for…in loop
{
  let obj = { 1: 5, 2: 7, 3: 0, 4: 0, 5: 0 };
  let result = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push([Number(key), obj[key]]);
    }
  }
  console.log(result);
}

// TODO: Using Object.getOwnPropertyNames() Method
{
  const obj = { a: 1, b: 2, c: 3 };
  const keys = Object.getOwnPropertyNames(obj);
  const arr = keys.map((key) => [key, obj[key]]);
  console.log(arr);
}

// TODO: Using Object.values() and Object.keys()
{
  const obj = { a: 1, b: 2, c: 3 };
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const res = keys.map((key, index) => [key, values[index]]);
  console.log(res);
}
