// TODO: Removing Blank Attributes from a JavaScript Object
{
  function removeBlankAttributes(obj) {
    const result = {};
    for (const key in obj) {
      if (obj[key] !== null && obj[key] !== undefined) {
        result[key] = obj[key];
      }
    }
    return result;
  }

  const originalObject = {
    name: "John",
    age: null,
    city: "New York",
    occupation: undefined,
  };

  const objectWithoutBlankAttributes = removeBlankAttributes(originalObject);
  console.log(objectWithoutBlankAttributes);
}

// TODO: Removing Null Values from an Object
{
  function removeNullUndefined(obj) {
    for (const key in obj) {
      if (obj[key] === null || obj[key] === undefined) {
        delete obj[key];
      }
    }
  }

  const sampleObject = {
    a: 1,
    b: null,
    c: 3,
    d: undefined,
  };

  removeNullUndefined(sampleObject);
  console.log(sampleObject);
}

// TODO: Removing Null and Undefined Values from a Nested Object
{
  function removeNestedNullUndefined(obj) {
    for (const key in obj) {
      if (obj[key] === null || obj[key] === undefined) {
        delete obj[key];
      } else if (typeof obj[key] === "object") {
        removeNestedNullUndefined(obj[key]);
      }
    }
  }

  const nestedObject = {
    a: 1,
    b: null,
    c: {
      d: 4,
      e: undefined,
      f: {
        g: null,
        h: "hello",
      },
    },
  };

  removeNestedNullUndefined(nestedObject);
  console.log(nestedObject);
}

// TODO: Removing Null Values from an Object Using reduce()
{
  function removeNullUndefinedWithReduce(obj) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (value !== null && value !== undefined) {
        acc[key] =
          typeof value === "object"
            ? removeNullUndefinedWithReduce(value)
            : value;
      }
      return acc;
    }, {});
  }

  const objectWithNullUndefined = {
    a: 1,
    b: null,
    c: 3,
    d: undefined,
    e: {
      f: null,
      g: "hello",
      h: undefined,
    },
  };

  const cleanedObject = removeNullUndefinedWithReduce(objectWithNullUndefined);
  console.log(cleanedObject);
}
