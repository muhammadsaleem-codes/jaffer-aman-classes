// Section A – Variables, String & Number (3 Questions)
// Q1. Create three variables:

// firstName

// lastName

// age

// Apna name, surname aur age store karein aur console mein print karein.




// var fristName = "muhammad"
// var lastName = "saleem";
// var age = 22;
// console.log("my name is",fristName, lastName, "and i am ", age , "years old");


// Q2. Do variables banayein. Ek mein String value aur doosre mein Number value store karein. Dono ko console mein display karein.


var str = "Saylani";
var num = 202;
console.log("its is str value", str);
console.log("its is number value", num);



// Q3. Ek variable city banayein aur usmein apne city ka naam store karein. Ek variable country banayein aur country ka naam store karein. Dono ko mila kar console mein display karein.


var city = "khuzdar"
var pakistan = "pakistan";
console.log("my city is :", city, "my country is :" , pakistan);



// Section B – Alert & Prompt (3 Questions)
// Q4. alert() use karke apna welcome message display karein.


// alert("Welcome to this store;")


// Q5. prompt() use karke user se uska name lein aur alert() mein welcome message show karein.


// var userName = prompt("enter you are name");
// alert("welcome : "+ userName)



// Q6. User se uski age prompt ke through lein aur alert mein uski age display karein.

// var userAge = +prompt("enter you are age ");
// alert("you are " + userAge + " years old")



//  Arithmetic Operators (4 Questions)
// Q7. Do numbers store karein aur unka addition calculate karein.


// var num1 = 30;
// var num2 = 20;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);


// Section D – DMAS / BODMAS (3 Questions)
// Q11. JavaScript mein calculate karein:

// 10 + 5 * 2

var dmassRule = 10 + 5 *2;
console.log(dmassRule);


// Q12. JavaScript mein calculate karein:

// (20 + 10) / 5



var dmassRule1 =  (20 + 10) / 5;
console.log(dmassRule1);




// Q13. JavaScript mein calculate karein:

// 50 - 10 + 5 * 2 / 5



var dmassRule2 = 50 - 10 + 5 * 2 / 5;
console.log(dmassRule2);


// Section E – Pre & Post Increment (3 Questions)
// Q14. Ek variable a = 5 banayein. Pre-increment use karein aur updated value print karein.

var increment = 100;
increment++ // post increment
++increment //preincrement
console.log(increment);



var decrement = 100;
decrement-- //post decrement
--decrement; // pre increment
console.log(decrement);


// Q15. Ek variable b = 10 banayein. Post-increment use karein aur output check karein.


var b = 10;
b++;
console.log(b);



// Q16. Ek variable num = 20 banayein. Pre-increment aur post-increment dono use karein aur outputs observe karein.


var num = 20;
++num 
num++
console.log(num);


// QSection F – If, If Else & Else If (4 Questions)
// Q17. User se age prompt ke through lein. Agar age 18 ya zyada ho to "Eligible" print karein.

// var inputAge = +prompt("enter you are Age");
// if(inputAge >= 18){
//     console.log("Eligible")
//}

// Q18. User se number lein. Check karein ke number positive hai ya negative.


// var numberchecker = +prompt("enter you are number");
// if(numberchecker > 0 ){
//     console.log("positive")
// }
// else {
//     console.log("negative");
//}


// 19. User se marks lein:

// 80 ya above: A Grade

// 60 ya above: B Grade

// 40 ya above: C Grade

// 40 se below: Fail

// var math =90
// var english = 80;
// var islameyat = 90;
// var urdu =70
// var phys =80;
// var obtMarks = math + english + islameyat +urdu+ phys
// console.log("obtained marks: =",obtMarks);
// var totalMarks = 500;
// var percenTage = (obtMarks /totalMarks)* 100
// console.log("percentage =", percenTage);

// if(percenTage >=80){
//     console.log("A grade");
// }
// else if (percenTage >=60){
//     console.log("B grade");
// }
// else if (percenTage >= 40){
//     console.log("C grade");
    
// }
// else if (percenTage < 40){
//     console.log("Fail");
    
// }


// Q20. User se ek number lein aur check karein ke number even hai ya odd.

// var evenNumber = +prompt("enter you are number here");
// if(evenNumber % 2 ==0){
//     console.log("Even number"); 
// }
// else {
//     console.log("Odd number");
    
// }



// var num1 = +prompt("enter number 1")
// var num2 = +prompt("enter number 2")
//   if (num1 > num2 ){
//   console.log("Num 1 is greater then num 2");
//   }
//   else if (num2 > num1){
//     console.log("Num 2 is greater then num 1");
    
//   }

//   else {
//     console.log("both are equal ");
    
//   }

// Q23. Ek variable age = 18 banayein aur >= aur <= operators use karke conditions check karein.
//   var stdAge = 19;
//   if(stdAge >= 19){
//     console.log("you are teenger");
    
//   }
//   else if(stdAge <= 13){
//     console.log("you are kid");
    
//   }

// Q24. ==, === aur ! operators ka use karke different conditions check karein aur unka output console mein display karein.
// var myNumer = 29;
// if (myNumer == 29){
//     console.log("it is equal 29");
// } else if( myNumer !== 29){
//     console.log("is is not equal to 29");
// }


// Section H – Nested Conditions (3 Questions)
// Q25. User se marks lein:

// Agar marks 50 ya above hain to check karein:

// 80 ya above hon to Excellent.

// Warna Good.

// Agar marks 50 se below hon to Fail.


// var marks = +prompt("enter youa re marks here");
// if (marks >= 50){
//     if(marks >=80){
//         console.log("Excellent");
        
//     }
//     else {
//         console.log("good");
        
//     }
// }
// else if (marks < 50){
//     console.log("Fail");
// }
// else {
//     console.log("invalid Makrs");
    
// }


// Q26. User se age lein:

// Agar age 18 ya above hai to check karein:

// Agar age 25 ya above hai to "Adult".

// Warna "Young Adult".

// Agar age 18 se below hai to "Minor".




// let age = Number(prompt("enter you are age"));
// if (age >= 18) {
//     if (age >= 25) {
//         console.log("Adult");
//     } else {
//         console.log("Young Adult");
//     }
// } else {
//     console.log("Minor");
// }




// Q27. User se username aur password lein.

// Agar username correct hai to password check karein.

// Dono correct hon to "Login Successful".

// Username ya password incorrect ho to appropriate message show karein.


// var username = prompt("enteryou are name");
// var passward= prompt("enter you are password ");
// if(username==="muhammad"){
//     if(passward == 1234){
//         console.log("Login Successful");
//     }
//     else{
//         console.log("password is incorrect");
    
//     }
// }
// else {
//     console.log("email or password is  icorrect");
    
// }




// Section I – AND & OR Gates (3 Questions)
// Q28. User se age lein. Check karein ke age 18 ya above aur 60 ya below honi chahiye. AND operator use karein.

// var studentAge= +prompt("enter you are student age");
// if (studentAge >= 18 && studentAge <=60){
//     console.log("you are allow"); 
// }
// else{
//     console.log("you are not allow"); 

// }
// Q29. User se marks lein. Agar marks 80 se above ya attendance 90 se above ho to "Eligible for Award" print karein. OR operator use karein.


// var studentMarks = +prompt("enter you are marks here ");
// var stdAttendance  = +prompt("enter you are attendese here");
// if(studentMarks >=80 || stdAttendance >=90){
//     console.log("Eligible for Award");
// }
// else {
//     console.log("Not Eligible ");
    
// }
    
// Q30. Ek login condition banayein jismein username aur password dono correct hone chahiye. AND operator use karein.

// var loginUser = "muhamamd"
// var loginPassword = 1234;
// if(loginUser === "muhammad" && loginPassword ==1234){
//     console.log("login correctly");
// }
// else{
//     console.log("invalid daitails");
// }

// Section J – Arrays (5 Questions)
// Q31. 5 students ke names ka array banayein aur complete array console mein print karein.


var students = ['muhammad saleem',  'haleem', 'bilal', 'khan muhammad', 'ayan ahmed',];
console.log(students);

// Q32. 5 fruits ka array banayein. Index number 0, 2 aur 4 ki values print karein.

var fruits = ['apple', 'mango', 'banana', 'orange', 'grapes'];

console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[4]);


// Q33. 5 cities ka array banayein. Index number 2 wali city ko change karein aur updated array print karein.

var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];

cities[2] = 'Multan';

console.log(cities);


// Q34. Ek empty array banayein aur index numbers use karke 5 students ke names add karein.

var students = [];

students[0] = 'Muhammad';
students[1] = 'Saleem';
students[2] = 'Bilal';
students[3] = 'Ayan';
students[4] = 'Haleem';

console.log(students);


// Q35. 6 subjects ka array banayein aur:
// Array ki length print karein.
// First subject print karein.
// Last subject print karein.

var subjects = ['English', 'Urdu', 'Math', 'Science', 'Computer', 'Physics'];

console.log(subjects.length);
console.log(subjects[0]);
console.log(subjects[5]);




// Q36. Student Marks Calculator
// Prompt ke through 3 subjects ke marks lein.
// Total marks calculate karein aur alert mein result display karein.

var subject1 = +prompt('Enter English marks');
var subject2 = +prompt('Enter Urdu marks');
var subject3 = +prompt('Enter Math marks');

var total = subject1 + subject2 + subject3;

alert('Total Marks: ' + total);


// Q37. Age Calculator
// User se birth year lein. Current year 2026 use karke age calculate karein.

var birthYear = +prompt('Enter your birth year');

var currentYear = 2026;

var age = currentYear - birthYear;

alert('Your age is: ' + age);


// Q38. Shopping Calculator
// User se 3 products ki prices lein.
// Total bill calculate karein aur alert mein display karein.

var product1 = +prompt('Enter first product price');
var product2 = +prompt('Enter second product price');
var product3 = +prompt('Enter third product price');

var totalBill = product1 + product2 + product3;

alert('Total Bill: Rs. ' + totalBill);


// Q39. Discount System
// User se shopping amount lein:
// Agar amount 5000 ya above ho to 20% discount.
// Agar amount 3000 ya above ho to 10% discount.
// Warna no discount.
// Final bill display karein.

var amount = +prompt('Enter your shopping amount');

var discount;

if (amount >= 5000) {
    discount = amount * 20 / 100;
}
else if (amount >= 3000) {
    discount = amount * 10 / 100;
}
else {
    discount = 0;
}

var finalBill = amount - discount;

alert('Discount: Rs. ' + discount + '\nFinal Bill: Rs. ' + finalBill);


// Q40. Even & Odd Checker
// User se number prompt ke through lein.
// Check karein number even hai ya odd.

var number = +prompt('Enter a number');

if (number % 2 === 0) {
    console.log('Even Number');
}
else {
    console.log('Odd Number');
}


// Q41. Login System
// User se username aur password lein.
// Dono correct hon to "Welcome" show karein.
// Warna "Invalid Login" show karein.

var username = prompt('Enter username');
var password = +prompt('Enter password');

if (username === 'muhammad' && password === 1234) {
    console.log('Welcome');
}
else {
    console.log('Invalid Login');
}


// Q42. Simple Calculator
// User se 2 numbers aur ek operator (+, -, *, /) lein.
// If else conditions use karke calculation perform karein.

var num1 = +prompt('Enter first number');
var num2 = +prompt('Enter second number');
var operator = prompt('Enter operator (+, -, *, /)');

if (operator === '+') {
    console.log(num1 + num2);
}
else if (operator === '-') {
    console.log(num1 - num2);
}
else if (operator === '*') {
    console.log(num1 * num2);
}
else if (operator === '/') {
    if (num2 !== 0) {
        console.log(num1 / num2);
    }
    else {
        console.log('Cannot divide by zero');
    }
}
else {
    console.log('Invalid Operator');
}


// Q43. Largest Number
// User se 3 numbers lein aur nested conditions use karke largest number find karein.

var num1 = +prompt('Enter first number');
var num2 = +prompt('Enter second number');
var num3 = +prompt('Enter third number');

if (num1 >= num2) {
    if (num1 >= num3) {
        console.log('First number is largest: ' + num1);
    }
    else {
        console.log('Third number is largest: ' + num3);
    }
}
else {
    if (num2 >= num3) {
        console.log('Second number is largest: ' + num2);
    }
    else {
        console.log('Third number is largest: ' + num3);
    }
}


// Q44. Student Result System
// User se 5 subjects ke marks lein.
// Total aur percentage calculate karein aur percentage ke according grade display karein.

var subject1 = +prompt('Enter English marks');
var subject2 = +prompt('Enter Urdu marks');
var subject3 = +prompt('Enter Math marks');
var subject4 = +prompt('Enter Science marks');
var subject5 = +prompt('Enter Computer marks');

var total = subject1 + subject2 + subject3 + subject4 + subject5;

var percentage = total / 500 * 100;


if (percentage >= 90) {
console.log("A");

}
else if (percentage >= 80) {
   console.log('B');
   
}
else if (percentage >= 70) {
    console.log('C');
    
}
else if (percentage >= 60) {
    console.log('D');
    
}
else if (percentage >= 40) {
    console.log('E');
    
}
else {
    console.log('Fail');
    
}



// Q45. Array Update System
// 5 students ke names ka array banayein.
// Kisi ek student ka name update karein aur complete updated array display karein.

var students = ['Muhammad', 'Bilal', 'Ayan', 'Haleem', 'Khan'];

students[2] = 'Ahmed';

console.log(students);




// Q46. ATM Withdrawal System
// User se balance aur withdrawal amount lein:
// Agar withdrawal amount balance se kam ya equal ho to remaining balance calculate karein.
// Agar amount balance se zyada ho to "Insufficient Balance" show karein.

var balance = +prompt('Enter your current balance');
var withdrawal = +prompt('Enter withdrawal amount');

if (withdrawal > 0 && withdrawal <= balance) {
    balance = balance - withdrawal;

    console.log('Remaining Balance: Rs. ' + balance);
}
else if (withdrawal > balance) {
    console.log('Insufficient Balance');
}
else {
    console.log('Invalid Withdrawal Amount');
}


// Q47. Electricity Bill Calculator
// User se electricity units lein:
// 100 units tak: Rs. 10 per unit.
// 101 se 200 units: Rs. 15 per unit.
// 200 se above: Rs. 20 per unit.
// Total bill calculate karein.

var units = +prompt('Enter electricity units');

var bill;

if (units <= 100) {
    bill = units * 10;
}
else if (units <= 200) {
    bill = units * 15;
}
else {
    bill = units * 20;
}

console.log('Total Electricity Bill: Rs. ' + bill);


// Q48. Number Comparison
// User se 2 numbers lein:
// Dono equal hon to "Both are Equal".
// Pehla number greater ho to "First is Greater".
// Warna "Second is Greater".

var num1 = +prompt('Enter first number');
var num2 = +prompt('Enter second number');

if (num1 === num2) {
    console.log('Both are Equal');
}
else if (num1 > num2) {
    console.log('First is Greater');
}
else {
    console.log('Second is Greater');
}


// Q49. Shopping Eligibility
// User se age aur shopping amount lein:
// Age 18 ya above aur amount 5000 ya above ho to "Special Discount".
// Age 18 se below ho ya amount 5000 se below ho to "Normal Shopping".
// AND aur OR operators ka use karein.

var age = +prompt('Enter your age');
var amount = +prompt('Enter shopping amount');

if (age >= 18 && amount >= 5000) {
    console.log('Special Discount');
}
else if (age < 18 || amount < 5000) {
    console.log('Normal Shopping');
}


// Q50. Student Management Array
// 5 students ke names ka array banayein:
// Complete array display karein.
// Third student ka name display karein.
// First student ka name update karein.
// Array ki total length display karein.
// Updated array display karein.

var students = ['Muhammad', 'Saleem', 'Bilal', 'Ayan', 'Haleem'];

console.log(students);

console.log(students[2]);

students[0] = 'Ahmed';

console.log(students.length);

console.log(students);