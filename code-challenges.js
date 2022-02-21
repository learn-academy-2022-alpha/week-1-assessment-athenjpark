// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212

// Input of boilingPoint should be a temperature value (temp)
// Output of boilingPoint should be a string that says "x is below the boiling point" or "x is at the boiling point" or "x is above the boiling point" or "x is at the boiling point".
// Create a funciton called boilingPoint
// boilingPoint will take in one parameter (temp)
// Write an if statement stating whether or not the inputted temperature is strictly equal to 212.
// Write an else if statement stating whether or not the inputted temperature is less than 212.
// Write an else statment stating that any other inputted temperature has to be greather than 212.
// Return a string for each condition that is appropriate.
// Outside of the function, write a console.log to output the expected results on the terminal.

const boilingPoint = (temp) => {
  if(temp === 212){
    return `${temp} is at boiling point.`
  } else if(temp < 212) {
    return `${temp} is below the boiling point.`
  } else{
    return `${temp} is above the boiling point.`
  }
}
console.log(boilingPoint(temp3))

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

// Goal is to add the two arrays (myNumbers1 and myNumbers2) together into one single array and returning the length of the combined array.
// Create a new variable 'combinedArray' which will be the new array after combining myNumbers1 and myNumbers2.
// Within the new variable, combinedArray, use the .concat() built-in method to add myNumbers1 and myNumbers2 together.
// Write a console.log of combinedArray with the extention of .length since our goal is to return the length of the new array.

var combinedArray = myNumbers1.concat(myNumbers2)
console.log(combinedArray.length)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"

const currentCohort = "Alpha 2022"

// Goal is to reverse the letters of the given string and print it to the terminal.
// Since there is no built-in string method that allows us to reverse the letters of a string, the next best approach in tackling this problem would be to convert currentCohort into an array since there built-in array methods that will allows us to reverse the letters.
// Create a variable called splitArray which will essentially take currentCohort and convert it into an array with each letter having its own index.
// Create another variable called reverseArray which will reverse the order of the array
// Create one last variable called joinedArray which will make use of the .join("") built in method. The .join("") method will join/combine the elements of an array back into a string which is our goal.
// Write a console.log for the last variable joinedArray which should print out "2202 aphlA".
var splitArray = currentCohort.split("")
var reverseArray = splitArray.reverse()
var joinedArray = reverseArray.join("")
console.log(joinedArray)

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]

// Goal is to see whehter or not each number within myArray is even or odd.
// Create a for loop with a starting point, ending condition, and a how to respond
// For this case, the starting index of any array will always be 0 and since we are going to be checking all of the elements within myArray, the starting point should i=0.
// The ending condition should be i < myArray.length because we only want the loop to end once it has checked all of the indexes in myArray.
// The last statement in the for loop should be i++ since we want to increment to the next index and checking to see whether or not the number at that specific index is even or odd.
// Now that the for loop has been established, the next step would be to implement an if else statment within the for loop to determine whehter or not the values in myArray are even or odd.
// The if statement should look to evaluate whether or not the numbers at each index of myArray is odd or even.
// Mathematically speaking, a number would be considered even if the said number is divisible by 2 (no remainder after division) and a number would be considered odd if the number is NOT divisible by 2 (any remainder after division)
// Taking this idea into account, we can make use of the modulo operator and implement that into our if statement to check whether or not each number in myArray is odd or even.
// Within the parentheses after if, the code should be myArray[i] % 2 === 0 which is essentially saying IF the number at that certain index of myArray is divisible by 2, THEN print out the string "even".
// The last part of the code is just an else statement which is saying that if the number at a certain index is NOT divisible by 2, then the number must be odd and should print out the string "odd".
for(i=0; i<myArray.length; i++){
  if(myArray[i] % 2 === 0){
    console.log("even")
  } else{
    console.log("odd")
  }
}

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

// Goal is to create a function that takes a set of any two numbers and outputs the difference with the smaller number being subtracted from the larger number.
// Create a function called bigMinusSmall
// bigMinusSmall will take in two parameters: num1, num2
// Set up a conditional statement for if a num1 is greater than num2, log the output of num1 - num2.
// Set up an else if statement underneath the aforementioned if statement stating that if num1 < num2, then log the put of num2 - num1.
// Set up an else statment that will log the string "Please enter different numerical values" because if the parameters did not meet the conditions of the 1st if statement and the 2nd else if statment, that means that num1 is equal to num2.
// Outside of the function, log the output of bigMinusSmall(number1, number2) and bigMinusSmall(number3, number4) to confirm that the smaller number has been subtracted from the larger number.
// So I actually ran this code, and it outputs the expected result for Set One and Set Two but it also outputs an 'undefined' after subtracing the smaller num from the bigger num, and I'm not really sure why. 

const bigMinusSmall = (num1, num2) => {
  if(num1 > num2){
    console.log(num1 - num2)
  }
  else if(num1 < num2){
    console.log(num2 - num1)
  } else{
    console.log("Please enter different numerical values")
  }
}
console.log(bigMinusSmall(number1, number2))
