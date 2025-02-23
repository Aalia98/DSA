{
  const arr = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (j === 0) {
        obj[arr[i][j]] = arr[i][j + 1];
      } else {
        obj[arr[i][j - 1]] = arr[i][j];
      }
    }
  }
  console.log(obj);
}

// TODO: Using a for Loop
{
  const a = [
    ["name", "Abhay"],
    ["age", 30],
    ["city", "New Delhi"],
  ];

  const obj = {};
  for (let i = 0; i < a.length; i++) {
    const [key, val] = a[i];
    obj[key] = val;
  }
  console.log(obj);
}

// TODO: Using reduce() Method
{
  const a = [
    ["name", "Jaya"],
    ["age", 30],
    ["city", "New Delhi"],
  ];

  const obj = a.reduce((acc, [key, val]) => {
    acc[key] = val;
    return acc;
  }, {});

  console.log(obj);
}

// TODO: Using Object.fromEntries()
{
  const a = [
    ["name", "Joy"],
    ["age", 30],
    ["city", "New Delhi"],
  ];
  const obj = Object.fromEntries(a);
  console.log(obj);
}
