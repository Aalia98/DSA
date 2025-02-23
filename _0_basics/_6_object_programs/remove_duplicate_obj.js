// TODO: Using filter() and findIndex() Methods – Most Used
{
  const a = [
    { a: "1", b: "2" },
    { c: "2", d: "4" },
    { c: "2", d: "4" },
    { a: "1", b: "2" },
  ];

  const ans = a.filter(
    (o, index, a) =>
      a.findIndex((item) => JSON.stringify(item) === JSON.stringify(o)) ===
      index
  );
  console.log(ans);
}

// TODO: Using Set and JSON.stringify() Method for Complete Duplicates
{
  const a = [
    { a: "1", b: "2" },
    { c: "2", d: "4" },
    { c: "2", d: "4" },
    { a: "1", b: "2" },
  ];

  const uniqueArray = Array.from(new Set(a.map((o) => JSON.stringify(o)))).map(
    (str) => JSON.parse(str)
  );
  console.log(uniqueArray);
}

// TODO: Using filter() and includes() Methods with Unique Key Extraction
{
  const a = [
    { a: "1", b: "2" },
    { c: "2", d: "4" },
    { c: "2", d: "4" },
    { a: "1", b: "2" },
  ];

  const uniqueStrings = [];
  const uniqueArray = a.filter((o) => {
    const s = JSON.stringify(o);
    if (!uniqueStrings.includes(s)) {
      uniqueStrings.push(s);
      return true;
    }
    return false;
  });

  console.log(uniqueArray);
}

// TODO: Using Lodash’s _.uniqBy() Method
{
  const _ = require("lodash");

  const a = [
    { a: "1", b: "2" },
    { c: "2", d: "4" },
    { c: "2", d: "4" },
    { a: "1", b: "2" },
  ];

  const uniqueArray = _.uniqWith(a, _.isEqual);
  console.log(uniqueArray);
}
