// This is a single comment and is ignored by the browser

/*
This is a 
multi-line comment and is also ignored by the browser
*/

// console.log('Hello, World!'); // Same as the print() function in Python. It prints to the console, which is useful for debugging.
// console.warn('be careful')
// console.error('this is an error')

// console.log('Tin Thai, I am 16 years old')
// console.warn('Tin Thai has to leave school at 2:30 pm on september 18, 2026')
// console.error('Tin Thai has to get a vaccine shot')

//strings
// console.log("10")
// console.log("portland High school")

// Numbers
// console.log(10)
// console.log(3.14)

// Booleans
// console.log(true)
// console.log(false)

// checking data types using "typeof" operator
// console.log(typeof 10)
// console.log(typeof "hello")
// console.log(typeof true)

// Variables are used to store values for later use
// must choose "let"(the val may change) or 
// "const"(the val will not change)

// const schoolName="portland High School"
// let middleSchool="King Middle School"

// console.log(schoolName)
// console.log(middleSchool)

// schoolName="Deering High School"
// middleSchool="Lincoln Middle School"

// console.log(schoolName)
// console.log(middleSchool)

// Interactive User Input

// alert(message)

// Arithmetic Operators
// Basic Operators: +, -, *, /
//Modulus Operator: % (Remainder after dividing A by B)
//Exponents: a ** b (a raised to the power of b)
//Increment: (++) & Decrement (--): Quick +1 or -1 operations.
//Concatenation and Template Literals:
    // Concatenation: a method for combining strings by adding them
const userName='Sam';
const userAge=16;
const favSubject='Math';

//Method 1: Concatenation
const message= "Hello, my name is " +userName+ " and I am " +userAge+ " years old. My favorite subject is " +favSubject+ ".";
console.log(message);

//Method 2: Template Literals
const message2=`Hello, my name is ${userName} and I am ${userAge} years old. My favorite subject is ${favSubject}.`;
console.log(message2);

// multi line string without \n
const bio=`
=== USER PROFILE ===
    name: ${userName}
    age: ${userAge}`
console.log(bio);

//Prompt
//Bill and Tip Calculator
// const bill=Number(prompt("Enter the bill amount: "));
// const tip=Number(prompt("Enter the tip percentage: "));
// tipAmount=(bill*tip)/100;
// totalAmount=bill+tipAmount
// console.log(totalAmount)