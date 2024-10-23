// Round off a number to the next multiple of 5 using JavaScript
// Examples:

// Input : 46 
// Output : 50

// Input : 21
// Output : 25

// TODO: Using Math.ceil() method

	function round(x) { 
		return Math.ceil(x / 5) * 5; 
	} 
	
	var n = 34; 
	console.log(round(n));

// TODO: Using Math.floor() method

	function round(x) { 
		if (x % 5 == 0) { 
			return (Math.floor(x / 5)) * 5; 
		} else { 
			return ((Math.floor(x / 5)) * 5) + 5; 
		} 
	} 
	
	var n = 34; 
	console.log(round(n));
