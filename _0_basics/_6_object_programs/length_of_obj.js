// TODO: Counting the Number of Keys using Object.keys
{
  const user = {
    name: "Aman",
    age: 30,
    email: "Aman@example.com",
    address: {
      street: "Sector 15 A-block",
      city: "Noida",
      state: "UP",
    },
  };

  const keysArray = Object.keys(user);

  const count = keysArray.length;

  console.log("Number of keys: " + count);
}
// TODO: Counting the Number of Keys using for-in loop
{
  const user = {
    name: "Aman",
    age: 30,
    email: "Aman@example.com",
    address: {
      street: "Sector-15 A-Block",
      city: "Noida",
      state: "Up",
    },
  };

  let count = 0;
  for (let key in user) {
    if (user.hasOwnProperty(key)) {
      count++;
    }
  }

  console.log("Number of keys: " + count);
}
// TODO: Counting the Number of Keys using Object.getOwnPropertyNames
{
  const user = {
    name: "Aman",
    age: 30,
    email: "Aman@example.com",
    address: {
      street: " Sector-15 A-Block",
      city: "Noida",
      state: "UP",
    },
  };

  const propertiesArray = Object.getOwnPropertyNames(user);

  const count = propertiesArray.length;

  console.log("Number of keys: " + count);
}
// TODO: Counting the Number of Keys using Object.entries
{
  const obj = {
    name: "Aman",
    age: 30,
    city: "Noida",
  };

  const count = Object.entries(obj).length;
  console.log("Number of keys :" + count);
}
// TODO: Counting the Number of Keys using JSON.stringify
{
  const user = {
    name: "Aman",
    age: 30,
    city: "Noida",
  };

  const count = JSON.stringify(user).match(/[^\\]":/g).length;
  console.log("Number of keys :" + count);
}
