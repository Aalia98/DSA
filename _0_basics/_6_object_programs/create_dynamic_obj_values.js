// TODO: Using object literals with computed property names
{
  const dynamicKey1 = "age";
  const dynamicValue1 = 25;

  const dynamicKey2 = "city";
  const dynamicValue2 = "Noida";

  const dynamicObject = {
    name: "Aman",
    [dynamicKey1]: dynamicValue1,
    [dynamicKey2]: dynamicValue2,
  };

  console.log(dynamicObject);
}
// TODO: Using the bracket notation for object property assignment
{
  const dynamicKey = "age";
  const dynamicValue = 30;

  const dynamicObject = {
    name: "Aman",
  };

  dynamicObject[dynamicKey] = dynamicValue;
  dynamicObject["city"] = "Noida";

  console.log(dynamicObject);
}
// TODO: Using the spread operator
{
  const obj1 = { name: "Ankit" };
  const obj2 = { age: 30 };
  const obj3 = { city: "Noida" };

  const mergedObject = { ...obj1, ...obj2, ...obj3 };

  console.log(mergedObject);
}
// TODO: Using Object.assign() Method
{
  const dynamicKey1 = "age";
  const dynamicValue1 = 28;

  const dynamicKey2 = "city";
  const dynamicValue2 = "Noida";

  const targetObject = {
    name: "Aman",
  };

  Object.assign(targetObject, {
    [dynamicKey1]: dynamicValue1,
    [dynamicKey2]: dynamicValue2,
  });

  console.log(targetObject);
}
