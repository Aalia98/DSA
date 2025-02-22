// TODO: Using Spread Operator
{
  let A = {
    name: "geeksforgeeks",
  };

  let B = {
    domain: "https://geeksforgeeks.org",
  };

  let Sites = { ...A, ...B };

  console.log(Sites);
}

// TODO: Using Object.assign() Method
{
  let A = {
    name: "geeksforgeeks",
  };

  let B = {
    domain: "https://geeksforgeeks.org",
  };

  let Sites = Object.assign(A, B);

  console.log(Sites);
}
