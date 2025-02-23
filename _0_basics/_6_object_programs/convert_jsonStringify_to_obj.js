// TODO: Using JSON.parse()
{
  const jsonString = `{"bookname" : "geekforgeeks", 
	"author" : "bharat", 
	"releaseYear" : "2001"}`;
  const jsonObject = JSON.parse(jsonString);

  console.log(jsonObject);
}

// TODO: Using String.prototype.replace() with a regex pattern
{
  const jsonString = `{"bookname" : "geekforgeeks", 
	"author" : "bharat", 
	"releaseYear" : "2001"}`;
  const jsonObject = JSON.parse(jsonString.replace(/"(\w+)"\s*:/g, '"$1":'));

  console.log(jsonObject);
}

// TODO: Using Function() constructor
{
  const jsonString =
    '{"bookname": "geekforgeeks", "author": "bharat", "releaseYear": "2001"}';
  const jsonObject = new Function("return " + jsonString)();

  console.log(jsonObject);
}

// TODO: Using JSON.parse() with a try-catch block
{
  const jsonString = `{"bookname" : "geekforgeeks", 
	"author" : "bharat", 
	"releaseYear" : "2001"}`;

  try {
    const jsonObject = JSON.parse(jsonString);
    console.log(jsonObject);
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
}
