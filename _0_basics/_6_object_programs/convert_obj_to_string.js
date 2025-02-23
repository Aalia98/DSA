// TODO: Using String() Constructor
{
  let bool_to_s1 = Boolean(0);
  let bool_to_s2 = Boolean(1);
  let num_to_s = 1234;

  console.log(typeof bool_to_s1);
  console.log(typeof String(bool_to_s1));
  console.log(typeof bool_to_s2);
  console.log(typeof String(bool_to_s2));
  console.log(typeof num_to_s);
  console.log(typeof String(num_to_s));
}

// TODO: Using JSON.stringify() Method
{
  let obj_to_str = {
    name: "GeeksForGeeks",
    city: "Noida",
    contact: 2488,
  };

  let myJSON = JSON.stringify(obj_to_str);
  console.log(myJSON);
}

// TODO: Using plus (+) Operator with string
{
  let obj1 = new Object();
  let obj2 = { ww: 99, ss: 22 };

  console.log(typeof obj1);
  console.log(typeof ("" + obj1));
  console.log(typeof obj2);
  console.log(typeof ("" + obj2));
}

// TODO: Using toString() method
{
  let obj = {
    name: "GeeksForGeeks",
    city: "Noida",
    contact: 2488,
  };

  let objStr = obj.toString();
  console.log(objStr);
}

// TODO: Using Template Literals
{
  const obj = { name: "Alice", age: 25, job: "Developer" };
  const objToString = `Name: ${obj.name}, Age: ${obj.age}, Job: ${obj.job}`;
  console.log(objToString); // Output: "Name: Alice, Age: 25, Job: Developer"
}
