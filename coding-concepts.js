// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain: The .push(value) built-in method for arrays adds a value to the end of an array but the output itself will only log the length of the updated array. In this case, since colors originally had 4 items in it (tangerine, magenta, lilac, daffodil) and we pushed "indigo" into the existing array, there are now 5 items total in the array which is the expected output. If one wanted to see the updated array with "indigo", they would have to write the code console.log(colors) which will output the full array.


// --------------------1) What will this log?

const cohort = "Alpha 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: The .length built-in method counts the amount of CHARACTERS within a string or an array. In this example, our variable cohort is a string. The reason that the code doesn't output 9 is because the space between "Alpha" and "2022" is actually considered a character as well, hence the output of 10.


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: This would output the letter "o" since the console.log code line is outputting the 4th index of the variable greeting which has been assigned to the string "Hello World!". It's important to note here that indexes always start at the value ZERO (0) and not ONE (1) which is how humans conventially start counting. Therefore, the 4th index of "Hello World!" would not be "l".


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Similar to the coding situation above, indexes always start counting at ZERO and not ONE. In the last scenario, the variable was assigned to a string but in this case, the variable is assigned to an array. When counting the elements within an array, it follows the same principle of startingn from zero so the 0th index of the variable languages would be JavaScript and the 1st index would be Ruby, so on and so forth. Since the variable index is assigned to the value of one, writing out console.log(languages[index]) would replace 'index' with '1' and log the 1st index of languages which would be Ruby.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: ["SATURDAY", "SUNDAY"]
// b) Verify and explain: So after running this code on the terminal, I actually received a TypeError and I think that's because .toUpperCase() is a built-in method that applies only to strings. Since weekendDays is actually an array, the code wasn't able to run.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: After doing some research on the typeOf operator, I was able to correctly answer what this specific code would log. The reason why 'number' is logged onto the terminal is because the typeOf operator essentially returns a string that indicates what data type the unevaluated variable is. In the example above, dataTypes is assigned to an array with the values "number", "string", and "Boolean". The next line of code is logging the typeof dataTypes.length. The dataTypes.length part is essentially counting how many elements that are inside of the array. Since there are three elements within the variable dataTypes, dataTypes.length would convert into the value 3 which is then read by the typeof operator that precedes it. Since 3 is considered a number, the terminal logs 'number.'
