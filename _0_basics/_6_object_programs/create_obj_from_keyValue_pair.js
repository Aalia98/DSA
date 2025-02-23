// TODO: Approach 1: Using Numerical Keys and Values in JavaScript
{
  let object = {};
  let firstKey = 0;
  let firstKeyValue = "GeeksforGeeks";
  let secondKey = 1;
  let secondKeyValue = "Hello JavaScript";
  let thirdKey = 2;
  let thirdKeyValue = "Hello React";

  object[firstKey] = firstKeyValue;
  object[secondKey] = secondKeyValue;
  object[thirdKey] = thirdKeyValue;
  console.log(object);
}

// TODO: Approach 2: Using Object.assign()
{
  let object = {};
  let firstKey = 0;
  let firstKeyValue = "GeeksforGeeks";
  let secondKey = 1;
  let secondKeyValue = "Hello JavaScript";
  let thirdKey = 2;
  let thirdKeyValue = "Hello React";

  Object.assign(object, { [firstKey]: firstKeyValue });
  Object.assign(object, { [secondKey]: secondKeyValue });
  Object.assign(object, { [thirdKey]: thirdKeyValue });

  console.log(object);
}

// TODO: Approach 3: Using for loop
{
  let object = {};
  let keys = [0, 1, 2];
  let values = ["GeeksforGeeks", "Hello JavaScript", "Hello React"];
  for (let i = 0; i < keys.length; i++) {
    object[keys[i]] = values[i];
  }
  console.log(object);
}

// TODO: Approach 4: Using a custom function
{
  function createObject(keys, values) {
    const object = {};

    for (let i = 0; i < keys.length; i++) {
      object[keys[i]] = values[i];
    }

    return object;
  }

  const keys = [0, 1, 2];
  const values = ["GeeksforGeeks", "Hello JavaScript", "Hello React"];

  const object = createObject(keys, values);

  console.log(object);
}

// TODO: Approach 5: Using the Map object
{
  const keys = [0, 1, 2];
  const values = ["GeeksforGeeks", "Hello JavaScript", "Hello React"];

  const keyValuePairs = keys.map((key, index) => [key, values[index]]);
  const object = Object.fromEntries(keyValuePairs);

  console.log(object);
}

// TODO: Approach 6: Using Array.prototype.reduce()
{
  const keys = [0, 1, 2];
  const values = ["GeeksforGeeks", "Hello JavaScript", "Hello React"];

  const object = keys.reduce((acc, key, index) => {
    acc[key] = values[index];
    return acc;
  }, {});

  console.log(object);
}

// TODO: Approach 7: Using Object.fromEntries with zip Method
{
  function zip(arr1, arr2) {
    return arr1.map((key, index) => [key, arr2[index]]);
  }

  const keys = [0, 1, 2];
  const values = ["GeeksforGeeks", "Hello JavaScript", "Hello React"];

  const object = Object.fromEntries(zip(keys, values));

  console.log(object);
}
