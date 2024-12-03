// TODO: brute force approach
const str = "My email address is info@geeksforgeeks.org";

const arrStr = str.split(" ");

for (let i = 0; i < arrStr.length; i++) {
  if (arrStr[i].split("").includes("@") && arrStr[i].split("").includes(".")) {
    console.log(arrStr[i]);
  }
}

// TODO: Using Regular Expressions
{
  function extract(str) {
    const email = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    return str.match(email);
  }

  const str = "My email address is info@geeksforgeeks.org";
  console.log(extract(str));
}
// TODO: Splitting and Filtering
{
  function extract(str) {
    const words = str.split(" ");
    const valid = words.filter((word) => {
      return /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(str);
    });
    return valid;
  }

  const str = "My email address is info@geeksforgeeks.org";
  console.log(extract(str));
}
// TODO: Using String Matching and Validation
{
  function isValid(str) {
    return /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(str);
  }

  function extract(str) {
    const words = str.split(" ");
    const email = [];
    for (const word of words) {
      if (isValid(word)) {
        email.push(word);
      }
    }
    return email;
  }

  const str = "My email address is info@geeksforgeeks.org";
  console.log(extract(str));
}
// TODO: Using a Custom Parser
{
  function extractEmails(text) {
    const emails = [];
    const words = text.split(/\s+/);

    for (let word of words) {
      if (word.includes("@") && word.includes(".")) {
        const parts = word.split("@");
        if (parts.length === 2 && parts[1].includes(".")) {
          emails.push(word);
        }
      }
    }

    return emails;
  }

  console.log(
    extractEmails("Contact us at info@GeeksforGeeks.com and support@domain.org")
  );
}
// TODO: Using the match Method with Regular Expressions
{
  function extractEmailsUsingMatch(input) {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

    const matches = input.match(emailRegex);

    return matches || [];
  }

  let inputString =
    "Contact us at support@example.com, sales@example.co.uk, or admin@example.org for more information.";
  let emailAddresses = extractEmailsUsingMatch(inputString);
  console.log(emailAddresses); // Output: ["support@example.com", "sales@example.co.uk", "admin@example.org"]
}
