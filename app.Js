// Question No 1:
var correctPassword = "Mypassword152";
var userPassword = prompt("Enter your password:");

if (!userPassword) {
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Correct Password!");
} else {
    alert("Incorrect password");
}

// Question No 2:
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good night";
}

// Question No 3:
// a.
var futureStudentNamesLiteral = [];
// b.
var futureStudentNamesObject = new Array();
// c.
var stringsArray = ["apple", "banana", "orange"];
// d.
var numbersArray = [1, 2, 3, 4, 5];
// e.
var booleanArray = [true, false, true];
// f.
var mixedArray = ["apple", 1, true];
// g.
var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "BBA", "MS", "M. Phil.", "PhD"];


// Question No 4:
var colorNames = ["red", "green", "blue"];

// a.
var colorToAddAtBeginning = prompt("Enter color to add at the beginning:");
colorNames.unshift(colorToAddAtBeginning);
// b.
var colorToAddAtEnd = prompt("Enter color to add at the end:");
colorNames.push(colorToAddAtEnd);
// c.
colorNames.unshift("purple", "yellow");
// d.
colorNames.shift();
// e.
colorNames.pop();
// f.
var indexToAddColor = prompt("Enter index to add color:");
var colorToAdd = prompt("Enter color to add:");
colorNames.splice(indexToAddColor, 0, colorToAdd);
// g.
var indexToDeleteColor = prompt("Enter index to delete color(s):");
var numberOfColorsToDelete = prompt("Enter number of colors to delete:");
colorNames.splice(indexToDeleteColor, numberOfColorsToDelete);
// Function to display the scores
function displayScores(scores) {
    console.log("Student ID\tScore");
    for (let i = 0; i < scores.length; i++) {
        console.log(${i+1}\t\t{scores[i]});
    }
}


// Question 5:
function sortScores(scores) {
    scores.sort((a, b) => a - b);
    return scores;
}

// Function to handle the main program logic
function main() {
    // Initialize the scores array
    let scores = [85, 90, 78, 92, 88];

    // Display the original scores
    console.log("Original Scores:");
    displayScores(scores);

    // Sort the scores
    let sortedScores = sortScores(scores);

    // Display the sorted scores
    console.log("\nSorted Scores:");
    displayScores(sortedScores);
}



// Question No 6:
function displayDropdown() {
    // Initialize the array of phone manufacturers
    let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

    // Display the dropdown menu
    console.log("<select>");
    for (let i = 0; i < phoneManufacturers.length; i++) {
        conwole.log(<option>${phoneManufacturers[i]}</option>);
    }
    console.log("</select>");
}



//  Question 7. 
var tableNumber = prompt("Enter the table number:");
var tableLength = prompt("Enter the table length:");
for (var i = 1; i <= tableLength; i++) {
    document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}

// Question No 8:
// a. Counting
document.write("Counting: ");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("<br>");

// b. Reverse counting
document.write("Reverse counting: ");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("<br>");

// c. Even
document.write("Even: ");
for (var i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}
document.write("<br>");

// d. Odd
document.write("Odd: ");
for (var i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}
document.write("<br>");

// e. Series
document.write("Series: ");
for (var i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}
document.write("<br>");

// Function to search for an item in the array
function searchArray(arr, searchTerm) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() === searchTerm.toLowerCase()) {
            return true;
        }
    }
    return false;
}

// Question no 9:
// Initialize the array of food items
let foodItems = ["cake", "apple pie", "cookie", "chips", "patties"];

// Prompt the user to enter a search term
let searchTerm = prompt("Enter a search term:");

// Check if the search term is in the array
if (searchArray(foodItems, searchTerm)) {
    alert("The search term was found in the array.");
} else {
    alert("The search term was not found in the array.");
}

// Question No: 10
var name = prompt("Enter your Name")

function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

var nameResult = toTitleCase(name);
console.log(nameResult);

// Question No: 11
var yourname = prompt("Enter your Name");
var tocapital = yourname.toUpperCase();
alert("Name in Capital case" + tocapital)

// Question No: 12
var instring = "165"
var innumber = parseInt(instring)
console.log("original string:", instring, typeof instring)
console.log("converted Number", innumber, typeof innumber)