var Person = {
  firstName : "Tony",
  lastName : "Lee",
  age : 50,
  eyeColor : "Blue"
};

// Function to format object properties as a readable string
function getPropertiesString(obj) {
    let result = "{\n";
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            // Add quotes if the value is a string
            let value = typeof obj[key] === 'string' ? `"${obj[key]}"` : obj[key];
            result += `  ${key}: ${value},\n`;
        }
    }
    result += "}";
    return result;
}

// 1. List all properties of the object and display on the webpage
const initialPropsDisplay = document.getElementById('initial-props');
initialPropsDisplay.textContent = getPropertiesString(Person);

// Also print to console as requested
console.log("Initial Object properties:");
for (let prop in Person) {
    console.log(prop + ": " + Person[prop]);
}


// 2. Delete the age property from the object
delete Person.age;


// 3. Print the object after deleting the property and display on the webpage
const finalPropsDisplay = document.getElementById('final-props');
finalPropsDisplay.textContent = getPropertiesString(Person);

// Also print to console as requested
console.log("\nObject after deleting 'age' property:");
for (let prop in Person) {
    console.log(prop + ": " + Person[prop]);
}
