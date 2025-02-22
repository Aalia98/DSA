// TODO: Using JavaScript Array push() Method
{
  let obj = { name: "GFG", age: 30 };
  let arr = ["Emma", "Sophia"];
  arr.push(obj);
  console.log(arr);
}

// TODO: Using JavaScript Array unshift() Method
{
  let list = ["GFG", "Contribute", "Explore"];
  let obj = { name: "GFG User", age: 30 };
  list.unshift(obj);
  console.log(list);
}

// TODO: Using Array Concatenation (concat)
{
  let list = ["Python", "C#", "GO"];
  let obj = { name: "Java", usedBy: "3000000+" };
  const newArray = list.concat(obj);
  console.log(newArray);
}

// TODO: Using Spread Operator
{
  let obj = { name: "GFG User", age: 30 };
  let arr = ["Emma", "Sophia"];
  arr = [...arr, obj];
  console.log(arr);
}
