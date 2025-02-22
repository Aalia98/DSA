// TODO: Using a for-in Loop
{
  function getKeyByValue(object, value) {
    for (let prop in object) {
      if (object.hasOwnProperty(prop)) {
        if (object[prop] === value) return prop;
      }
    }
  }

  const exampleObject = {
    key1: "Geeks",
    key2: 100,
    key3: "Javascript",
  };

  ans = getKeyByValue(exampleObject, 100);

  console.log(ans);
}
// TODO: Using the find() Method
{
  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  const exampleObject = {
    key1: "Geeks",
    key2: 100,
    key3: "Javascript",
  };

  ans = getKeyByValue(exampleObject, "Geeks");
  console.log(ans);
}
// TODO: Using Object.entries() and reduce() Method
{
  function getKeyByValue(obj, value) {
    return Object.entries(obj).reduce((acc, [key, val]) => {
      if (val === value) {
        acc.push(key);
      }
      return acc;
    }, []);
  }

  const exampleObject = {
    key1: "Geeks",
    key2: 100,
    key3: "Javascript",
  };

  ans = getKeyByValue(exampleObject, "Geeks");
  console.log(ans);
}
// TODO: Using Lodash _.findKey() Method
{
  const _ = require("lodash");

  let users = {
    meetu: { salary: 36000, active: true },
    teetu: { salary: 40000, active: false },
    seetu: { salary: 10000, active: true },
  };

  let found_elem = _.findKey(users, {
    salary: 10000,
    active: true,
  });

  console.log(found_elem);
}
// TODO: Using Object.values() and indexOf() Method
{
  function getKeyByValue(object, value) {
    const values = Object.values(object);

    const index = values.indexOf(value);

    if (index !== -1) {
      const keys = Object.keys(object);
      return keys[index];
    }
    return null;
  }

  let obj = {
    name: "Alice",
    age: 25,
    city: "London",
  };

  console.log(getKeyByValue(obj, "London"));
}
