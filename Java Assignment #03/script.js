// problem  #01

let myVar = 5;
console.log(myVar);

// problem #02

let mystring = "Hello, World!";
alert(mystring);

//  problem  #03

let num1 = 5;
let num2 = 10;
let userNum = Number(prompt("Enter a number"));
let sum = Number(userNum) + num1 + num2;
console.log("The sum of " + num1 + "," + num2 + " and  " + userNum + " is " + sum);


// problem 04

let myBoolean = true;
if (myBoolean) {
    console.log("Its true!");
}
else {
    console.log("Its False");
}

// Problem 05

let number = 2;
if (number % 2 === 0) {
    console.log("even");
}
else {
    console.log("odd");
}


// problem06

let string1 = "Hello ";
let string2 = "World!"
let totall = string1 + string2;
console.log(totall);

// problem 07


let fir = 5;
let sec = 4;
console.log(fir * sec);

// problem 07

let user = String(prompt("Enter your Password"));
if (user === "Hassan") {
    alert("Access Granted");

}

else {
    alert("Access Denied")
}

// problem 08

let first = Number(prompt("Enter your first number"));
let second = Number(prompt("Enter your second number"));
let third = Number(prompt("Enter your third number"));
let large;
if (first >= second && first >= third) {
    first = large;
}
else if (
    second >= first && second >= third

) { second = large }
else {
    large = third;
}

console.log("The largest number is:" +large );


// problem 10
let stri = String(prompt("Enter first value"));
let stri2 = String(prompt("Enter second value"));

if(stri===stri2){
    alert("The strings are equal")
}
else{alert("The strings are not equal")}







