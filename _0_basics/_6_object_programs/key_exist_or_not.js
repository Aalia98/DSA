// TODO: Using in Operator
{
  let exampleObj = {
    id: 1,
    remarks: "Good",
  };

  let output1 = "name" in exampleObj;
  let output2 = "remarks" in exampleObj;

  console.log(output1);
  console.log(output2);
}

// TODO: Using hasOwnProperty() Method
{
  let exampleObj = {
    id: 1,
    remarks: "Good",
  };

  let output1 = exampleObj.hasOwnProperty("name");
  let output2 = exampleObj.hasOwnProperty("remarks");
  console.log(output1);
  console.log(output2);
}

// TODO: Using the Object.keys() Method
{
  const obj = {
    name: "Sandeep",
    age: "32",
  };

  if (Object.keys(obj).includes("age")) {
    console.log("true");
  } else {
    console.log("false");
  }
}
