// TODO: Using Object.assign() Method
{
  const sourceObject = { a: 1, b: 2, c: 3 };
  let Clone_object = {};
  Clone_object = Object.assign({}, sourceObject);
  console.log(Clone_object);
}

// TODO: Using Spread Operator
{
  const sourceObject = { a: 1, b: 2, c: 3 };
  let Clone_object = {};
  Clone_object = { ...sourceObject };
  console.log(Clone_object);
}

// TODO: Using hasOwnProperty() Method
{
  const sourceObject = { a: 1, b: 2, c: 3 };
  let Cloned_Object = {};
  for (let prop in sourceObject) {
    if (sourceObject.hasOwnProperty(prop)) {
      Cloned_Object[prop] = sourceObject[prop];
    }
  }

  console.log(Cloned_Object);
}

// TODO: Using JSON.stringify() Method
{
  const sourceObject = { a: 1, b: 2, c: 3 };
  let Cloned_object = {};
  Cloned_object = JSON.parse(JSON.stringify(sourceObject));
  console.log(Cloned_object);
}
