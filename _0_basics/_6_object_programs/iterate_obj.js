// TODO: Using for…in Loop
{
    function iterateObject() {
        let exampleObj = {
            book: "Sherlock Holmes",
            author: "Arthur Conan Doyle",
            genre: "Mystery"
        };
    
        for (let key in exampleObj) {
            if (exampleObj.hasOwnProperty(key)) {
                value = exampleObj[key];
                console.log(key, value);
            }
        }
    }
    iterateObject();    
}
// TODO: Using Object.entries() and map() Method
{
    function iterateObject() {
        let exampleObj = {
            book: "Sherlock Holmes",
            author: "Arthur Conan Doyle",
            genre: "Mystery"
        };
    
        Object.entries(exampleObj).map(entry => {
            let key = entry[0];
            let value = entry[1];
            console.log(key, value);
        });
    }
    iterateObject();
    
}
// TODO: Using forEach() and object.keys() Method
{
    function iterateObject() {
        let exampleObj = {
            book: "Sherlock Holmes",
            author: "Arthur Conan Doyle",
            genre: "Mystery"
        };
    
        Object.keys(exampleObj).forEach(key => {
            const value = exampleObj[key];
            console.log(`${key}: ${value}`);
        });
    
    }
    iterateObject();    
}
