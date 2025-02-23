// TODO: Using JavaScript delete operator
{
  function deleteObjects() {
    let arr = new Object();

    arr["key"] = "Value";
    arr["geeks"] = "GeeksforGeeks";
    arr["name"] = "Rajnish";

    console.log(arr["name"]);

    delete arr["name"];

    console.log(arr["name"]);
  }

  deleteObjects();
}
// TODO: Using JavaScript Array.filter() method
{
  function deleteObjects() {
    let arr = new Object();

    arr["key"] = "Value";
    arr["geeks"] = "GeeksforGeeks";
    arr["name"] = "JavaScript";

    console.log(arr["name"]);

    const updatedArray = Object.fromEntries(
      Object.entries(arr).filter(([key]) => key !== "name")
    );

    return updatedArray;
  }
  console.log(deleteObjects());
}
// TODO: Using Lodash _.omit method
{
  function deleteObjects() {
    const _ = require("lodash");

    let arr = new Object();

    arr["key"] = "Value";
    arr["geeks"] = "GeeksforGeeks";
    arr["name"] = "JavaScript";

    console.log(arr["key"]);

    const updatedArray = _.omit(arr, "key");

    return updatedArray;
  }
  console.log(deleteObjects());
}
// TODO: Using Object.assign() and Spread Operator
{
  function deleteObjects() {
    let arr = new Object();

    arr["key"] = "Value";
    arr["geeks"] = "GeeksforGeeks";
    arr["name"] = "Rajnish";

    console.log(arr["name"]);

    const removedKey = "name";
    let { [removedKey]: omitted, ...rest } = arr;
    arr = rest;

    console.log(arr["name"]);
  }

  deleteObjects();
}
// TODO: Using Object.keys() and reduce() Method
{
  function removeKey(obj, keyToRemove) {
    return Object.keys(obj).reduce((acc, key) => {
      if (key !== keyToRemove) {
        acc[key] = obj[key];
      }
      return acc;
    }, {});
  }

  const associativeArray = {
    id: 1,
    name: "John",
    age: 30,
  };

  const keyToRemove = "age";
  const newObject = removeKey(associativeArray, keyToRemove);

  console.log(newObject); // Output: { id: 1, name: 'John' }
}
