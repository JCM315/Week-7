

// The selected code is a snippet of JavaScript that is used to calculate the difference between the oldest and youngest person in an array of ages.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

let difference = ages[ages.length - 1] - ages[0];
console.log(difference); 

//The code is using the array method push() to add a new element to the end of the array, which in this case is the number 17.
ages.push(17); 
difference = ages[ages.length - 1] - ages[0];
console.log(difference); 

//It is doing this by iterating over each age in the array and adding it to a running total, which it then divides by the number of ages in the array to get the average.
let total = 0;
for (let age of ages) {
  total += age;
}
let average = total / ages.length;
console.log(average); 


//In this code, the variable names represents an array of names, and the variable totalLetters represents the total length of all the names. 
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let totalLetters = 0;
for (let name of names) {
  totalLetters += name.length;
}

//The code block calculates the average length of all the names in the array and stores it in the variable averageLetters.
let averageLetters = totalLetters / names.length;
console.log(averageLetters); // 4.5


// It then iterates over each name in the array and adds the name to the allNames variable, separated by a space.
let allNames = '';
for (let i = 0; i < names.length; i++) {
  allNames += names[i];
  if (i < names.length - 1) {
    allNames += ' '; 
  }
}
console.log(allNames); 

//the variable names represents an array of names, and the variable totalLetters represents the total length of all the names. 
let Names = ["Kelly","Sam","Kate"];


//The code block creates an empty array called nameLengths and iterates over each name in the array names. For each name, it calculates the length of the name and adds it to the nameLengths array.
let nameLengths = [];

for (let name of names) {
  nameLengths.push(name.length);
}

console.log(nameLengths); 

//The selected code is a for loop that iterates over an array of numbers and adds them together. 
let NameLengths = [3, 5, 3, 5, 4, 3];

let sum = 0;
for (let length of nameLengths) {
  sum += length;
}

console.log(sum); 


//The selected code is a function definition for a repeatWord() function that takes two arguments: a word and a number n.
function repeatWord(word, n) {
  
  return word.repeat(n);
}
// This prints out the word "Promineo" repeated 3 times.
console.log(repeatWord("Promineo", 3)); 
console.log(repeatWord("Tech", 2)); 
console.log(repeatWord("Week 7", 5)); 

// The selected code is a function definition for a fullName() function that takes three arguments: a first name
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
// This prints out the full name "Ray Lewis #52" of my favorite NFL team. 
console.log(fullName("Ray", "Lewis", "#52")); 
console.log(fullName("Ed", "Reed", "#20"));  
console.log(fullName("Terrell", "Suggs", "#55"));  

// This function can be used to check if a list of numbers adds up to more than 100.
function isSumGreaterThan100(array) {
  
  let sum = array.reduce((a, b) => a + b, 0);
  
  return sum > 100;
}
console.log(isSumGreaterThan100([100, 1, 0])); 
console.log(isSumGreaterThan100([10, 30, 20])); 
console.log(isSumGreaterThan100([50, 30, 40])); 

// The selected code is a function definition for a isAverageGreater() function that takes two arrays of numbers
function isAverageGreater(array1, array2) {
  let sum1 = array1.reduce((a, b) => a + b, 0);
  let sum2 = array2.reduce((a, b) => a + b, 0);
  return (sum1 / array1.length) > (sum2 / array2.length);
}

console.log(isAverageGreater([1, 2, 3, 4, 5], [-6, -7, 8, 9, 10])); 
console.log(isAverageGreater([10, 20, 30], [5, 10, 161])); 
console.log(isAverageGreater([100, 200, 300, 400], [-50, 100, 150, 200])); 

//This function can be used to determine if a person will buy a drink based on the weather conditions and the amount of money they have in their pocket.
function willBuyDrink(isHotOutside, moneyInPocket) {
  return isHotOutside && moneyInPocket > 10.50;
}
console.log(willBuyDrink(30));
console.log(willBuyDrink( 150)); 
console.log(willBuyDrink(9)); 

function totalSpent(expenses) {
  let sum = expenses.reduce((a, b) => a + b, 0);
  return sum;
}

console.log(totalSpent([619, 284, 56])); 
console.log(totalSpent([36, 175, 100, 15])); 
console.log(totalSpent([80, 900, 520])); 
