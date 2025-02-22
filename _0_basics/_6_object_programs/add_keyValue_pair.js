// TODO: Using Dot Notation
{
  const obj = { Organisation: "GFG" };
  obj.field = "CS";

  console.log(obj);
}
// TODO: Using Bracket Notation
{
  const obj = { Organisation: "GFG" };
  const Field = "field";
  const Year = "year";
  const lang = "lang";
  obj[Field] = "CS";
  obj[Year] = "2023";
  obj[lang] = "English";

  console.log(obj);
}
// TODO: Using Spread Operator
{
  const obj = { Organisation: "GFG" };
  const newObj = { ...obj, field: "CS" };
  console.log(newObj);
}
// TODO: Using Object.assign() Method
{
  const obj = { Organisation: "GFG" };
  Object.assign(obj, { field: "CS" });
  console.log(obj);
}
// TODO: Using Object.defineProperty() Method
{
  const obj = { Organisation: "GFG" };
  Object.defineProperty(obj, "field", {
    value: "CS",
    writable: false,
    enumerable: true,
    configurable: true,
  });
  console.log(obj);
  obj.afield = "Civil";
  console.log(obj);
}
// TODO: Using Object.entries() and Object.fromEntries
{
  const obj = { Organization: "GFG" };
  const entries = Object.entries(obj);
  entries.push(["field", "CS"]);
  const newObj = Object.fromEntries(entries);

  console.log(newObj);
}
