/*
    Mansoor Ali Ibrahim
    JavaScript Crash Course
    JS-124461
*/

/*
    Question # 1. Write a JavaScript program that accepts two numbers in two prompts and
    displays the larger one in the console.
*/

let userNum1 = +prompt("Enter Number 1");
let userNum2 = +prompt("Enter Number 2");

console.log("Question # 1");
if(userNum1 > userNum2){
    console.log("First Number = " + userNum1 + " is larger");
}
else if(userNum1 === userNum2){
    console.log("Both numbers are equal");
}
else{
    console.log("Second Number = " + userNum2 + " is larger");
}



/* ----------------------------------------------------- */


/*
    Question # 2. Write a JavaScript conditional statement to find the sign of a number. Display
    an alert box with the specified sign.
    Sample: 3
    Output : The sign is +
    Sample: -5
    Output : The sign is -
*/

// function checkSign(signNumber) {
//     if(signNumber >= 0){
//         alert("The sign is +");
//     }
//     else{
//         alert("The sign is -");
//     }
// }
// checkSign(-3);



/* ----------------------------------------------------- */



/*
    Question # 3. Write a JavaScript program that accepts five numbers in five prompts and
    displays the larger one in the console.

    Searched for a function and found Math.max() function on the following URL
    https://www.w3schools.com/jsref/jsref_max.asp
*/

// console.log("Question # 3")

// let num1 = +prompt("Enter the first number:");
// let num2 = +prompt("Enter the second number:");
// let num3 = +prompt("Enter the third number:");
// let num4 = +prompt("Enter the fourth number:");
// let num5 = +prompt("Enter the fifth number:");

// let maxNumber = Math.max(num1, num2, num3, num4, num5);
// console.log("Largest Number is : " + maxNumber);


/* ----------------------------------------------------- */



/*
    Question # 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
    will check if the current number is odd or even, and display a message to the
    screen.
    Sample Output :
    "0 is even"
    "1 is odd"
    "2 is even"
    ----------
    ----------
*/

// document.write("<h3>Question # 4</h3>")

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         document.write(i + " is even<br>");
//     } 
//     else {
//         document.write(i + " is odd<br>");
//     }
//   }



/* ----------------------------------------------------- */


/*
    Question # 5. Write a JavaScript program which computes the average marks of the
    following students Then, this average is used to determine the corresponding
    grade.
    The grades are computed as follows :
    Range Grade
    <60    F
    <70    D
    <80    C
    <90    B
    <100   A
*/

// console.log("Question # 5")

// let userMarks = +prompt("Please enter your marks out of 100");

// if(userMarks >= 90){ console.log("Your grade is A");}
// else if(userMarks >= 80 && userMarks < 90){ console.log("Your grade is B");}
// else if(userMarks >= 70 && userMarks < 80){ console.log("Your grade is C");}
// else if(userMarks >= 60 && userMarks < 70){ console.log("Your grade is D");}
// else{ console.log("Your grade is F");}



/* ----------------------------------------------------- */

/*
    Question # 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
    multiples of three print "Fizz" instead of the number and for the multiples of five
    print "Buzz". For numbers which are multiples of both three and five print
    "FizzBuzz".
*/


// document.write("<h3>Question # 6</h3>")

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 !== 0) {
//         document.write("Fizz<br>");
//     } 
//     else if (i % 5 === 0 && i % 3 !== 0) {
//         document.write("Buzz<br>");
//     }
//     else if (i % 3 === 0 && i % 5 === 0) {
//         document.write("FizzBuzz<br>");
//     }
//     else{
//         document.write(i + "<br>");
//     }
//   }



/* ----------------------------------------------------- */



/*
    Question # 7. Write a JavaScript program to construct the following pattern, using a nested
for loop.
**
*
* * *
* * * *
* * * * *
*/


// console.log("Question # 7")
// for (let i = 1; i <= 5; i++) {
//     let starVal = "";
    
//     for (let x = 1; x <= i; x++) {
//       starVal = starVal + "* ";
//     }

//     console.log(starVal);
//   }