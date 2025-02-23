// TODO: Using the delete Operator
{
  const details = {
    name: "Alex",
    age: 30,
    country: "Canada",
  };

  console.log("Original Object:", details);
  delete details.age;
  console.log("Object after deleting age key:", details);
}

// TODO: Using Destructuring with the Rest Operator
{
  const details = {
    name: "Alex",
    age: 30,
    country: "Canada",
  };

  console.log("original object", details);

  const { age, ...rest } = details;
  console.log(rest);
}

// TODO: Using Object.fromEntries() and Object.entries() Methods
{
  const obj = {
    name: "John",
    age: 30,
    city: "New York",
  };

  const updatedObj = Object.fromEntries(
    Object.entries(obj).filter(([key]) => key !== "age")
  );

  console.log(updatedObj);
}

// TODO: Using Underscore.js _.omit() to Remove a Key from Object
{
  const obj = {
    name: "John",
    age: 30,
    city: "New York",
  };

  const updatedObj = Object.fromEntries(
    Object.entries(obj).filter(([key]) => key !== "age")
  );

  console.log(updatedObj);
}
