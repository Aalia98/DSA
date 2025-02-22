// TODO: Using localeCompare() Method
{
  const a = [
    { s: "banana", price: 8 },
    { s: "apple", price: 10 },
    { s: "orange", price: 12 },
  ];

  a.sort((x, y) => x.s.localeCompare(y.s));
  console.log(a);
}

// TODO: Using < and > Operators for Direct Comparison
{
  const a = [
    { s: "banana", price: 8 },
    { s: "apple", price: 10 },
    { s: "orange", price: 12 },
  ];

  a.sort((x, y) => {
    if (x.s < y.s) return -1;
    if (x.s > y.s) return 1;
    return 0;
  });
  console.log(a);
}

// TODO: Using Chained Comparison for Sorting by Multiple Properties
{
  const a = [
    { s: "apple", price: 10 },
    { s: "banana", price: 12 },
    { s: "apple", price: 8 },
  ];

  a.sort((x, y) => x.s.localeCompare(y.s) || x.price - y.price);
  console.log(a);
}

// TODO: Using Intl.Collator for Enhanced Locale-Aware Sorting
{
  const a = [
    { s: "banana", price: 8 },
    { s: "apple", price: 10 },
    { s: "orange", price: 12 },
  ];

  const collator = new Intl.Collator("en", { sensitivity: "base" });
  a.sort((x, y) => collator.compare(x.s, y.s));
  console.log(a);
}
