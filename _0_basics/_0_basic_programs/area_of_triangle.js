// JavaScript Program to Find the Area of Triangle

// When height is known

function triangleArea(base, height) {
    return 0.5 * base * height;
  }
  
  // Example usage
  let baseLength = 10;
  let heightLength = 5;
  let areaTri = triangleArea(baseLength, heightLength);
  console.log(`The area of the triangle is: ${areaTri}`);

// When all sides are known

function triangleArea(side1, side2, side3) {
    // Calculate the semi-perimeter
    let s = (side1 + side2 + side3) / 2;
  
    // Use Heron's Formula to find the area
    return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
  }
  
  // Example usage
  let side1Length = 3;
  let side2Length = 4;
  let side3Length = 5;
  let area = triangleArea(side1Length, side2Length, side3Length);
  console.log(`The area of the triangle is: ${area}`);
  