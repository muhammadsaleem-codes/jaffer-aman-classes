// Q=1
// Ek array banao jisme 5 students ke names hon. push() use karke 2 new students add karo.

// var student = ['muhammad', "ahmed ", "bilal ahmed", "gul ahmed", "hussain ahmed"];
// student.push("hassan ahmed", "zubair ali");
// console.log(student);

// Q=2
// Ek fruits ka array banao. pop() use karke last fruit remove karo aur updated array print karo.
// var fruits = ["banana", "apple", "watermelon", "pine apple", "graps"];
// fruits.pop()
// fruits.pop()
// console.log(fruits);

// Q=3

// Ek cities ka array banao. shift() use karke first city remove karo.

// var cities = ["karachi", "khuzdar", "islamad", "multan", "lahore", "sukkher"];
// cities.shift();
// console.log(cities);

// Q=4

// Ek array mein 4 colors rakho. unshift() use karke starting mein 2 new colors add karo.
// var colors = ["red", "green", "lightgray", "lightgreen", "lightyellwo"];
// colors.unshift("black", "white")
// console.log(colors);


// Q=5


// Ek students array banao. Pehle push() se 3 students add karo aur phir pop() se last student remove karo.

// var student = ['muhammad', "ahmed ", "bilal ahmed", "gul ahmed",];
// student.pop();
// console.log(student);


// Topics: slice and splice

// Q=6

// slice() use karke index 1 se index 3 tak elements copy karo.

// var names = ["Ali", "Ahmed", "Jaffar", "Bilal", "Sufiyan"];
// var newNames= names.slice(1, 4);
// console.log(newNames);

// Q=7

// Ek array banao aur slice(0, 3) use karke first 3 elements ka new array banao.
// var student = ['muhammad', "ahmed ", "bilal ahmed", "gul ahmed",];
// var newStudent =student.slice(0, 3);
// console.log(newStudent);


// Q=8


// Ek array banao aur slice(-2) use karke last 2 elements copy karo.

// var cities = ["karachi", "khuzdar", "islamad", "multan", "lahore", "sukkher"];
// var newCities = cities.slice(-2);
// console.log(newCities);

// Q=9

// Ek array banao. splice() use karke index 2 se 2 elements delete karo.


// var fruits = ["banana", "apple", "watermelon", "pine apple", "graps"];
// fruits.splice(2,2);
// console.log(fruits);


// Q=10;


// Ek array banao. splice() use karke index 1 par 2 new names add karo without deleting any element.


// var names = ["Ali", "Ahmed", "Jaffar", "Bilal", "Sufiyan"];
// names.splice(1,0, "ali ahmed", "hasnain Arif");
// console.log(names);


// Q=11

// 11. For loop use karke 1 se 20 tak counting print karo.
// for(var i = 1; i<=20; i++){
//     console.log(i);
// }



// Q=12

// 12. For loop use karke 50 se 1 tak reverse counting print karo.
// for(var i =50; i>=1; i--){
//     console.log(i); 
// }



// Q=13;


// 13. 1 se 100 tak sirf even numbers print karo.
// for(var i =1; i<=100; i++){
//     if(i % 2 ==0){
//         console.log(i);
//     }
// }


// Q=14

// 14. 1 se 100 tak sirf odd numbers print karo.

// for(var i =1; i<=100; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }



// Q=15

// 15. Kisi bhi number ka table 1 se 10 tak print karo.
// for(var i= 1; i<=10; i++){
//     console.log(i + " x " + i + " = " + (i * i));
// }



// Q=16

// 16. 1 se 10 tak numbers ka sum calculate karo.

// var sum=0;
// for(var i =0; i<=10; i++){
//     sum += i
// }
// console.log(sum);



// Q= 17

// 17. 1 se 50 tak jitne numbers 5 se completely divide hote hain unko print karo.

// for(var i =0; i<=50; i++){
//     if(i % 5 ==0){
//         console.log(i);
//     }
// }

// Q =18  


// 18. Ek loop banao jo 10 se 100 tak counting kare aur har 10th number print kare.

// for(var i = 10; i<=100; i++){
//     if(i % 10 == 0){
//         console.log(i);
//     }
// }


// Q=19

// 19. For loop use karke 1 se 10 tak numbers ke squares print karo.

// for(var i = 1; i <=10 ; i++){
//     console.log(i * i);
// }



// 20. Ek loop banao jo 1 se 20 tak chale. Agar number 10 ho jaye to break use karke loop stop kar do.

// for(var i = 1 ; i <= 20;   i++){
//     if(i >= 10){
//         break;
//     }
//     console.log(i);

// }

// Q=21;


// Ek cities ka array banao aur loop use karke tamam cities console mein print karo.

//  var cities = ["karachi", "khuzdar", "islamad", "multan", "lahore", "sukkher"];
// for(var i=0; i<cities.length; i++){
//     console.log(cities[i]);

// }


// Q=21; 


// Ek students ka array banao aur har student ke naam ke sath Welcome print karo.


// var student = ['muhammad', "ahmed ", "bilal ahmed", "gul ahmed",];
// for(var i = 0; i<student.length; i++){
//     console.log("welcome:", student[i]);

// }



// Q=22

// Ek numbers ka array banao. Loop use karke tamam numbers ka sum calculate karo.


// var number = [10, 20, 40, 50, 60, 70];
// var count =0;
// for(var i = 0; i < number.length; i++){
//     count +=number[i]
// }
// console.log(count);


//  Q=23

// Ek numbers ka array banao. Sirf even numbers print karo.

// var number = [10, 20, 40, 50, 60, 70, 21, 23, 45, 56, 11, 9];
// for(var i =0; i<number.length; i++){
//     if(number[i] % 2 == 0){
//      console.log(number[i]);
//     }
// }


// Q = 24;

// Ek numbers ka array banao. Sirf odd numbers print karo.


// var number = [10, 20, 40, 50, 60, 70, 21, 23, 45, 56, 11, 9];
// for(var i =0; i<number.length; i++){
//     if(number[i] % 2 !== 0){
//      console.log(number[i]);
//     }
// }


// Q = 25;

// Ek array mein 10 numbers rakho. Loop use karke check karo ke kaun se numbers 5 se divisible hain.

// var number = [10, 20, 40, 50, 60, 70, 21, 23, 45, 56, 11, 9];

// for(var i = 0; i <number.length; i++){
//     if(number[i] % 5 == 0){
//         console.log(number[i]);
//     }
// }

// Q =26

// Loop use karke Karachi aur Multan ko skip karo using continue.


//  var cities = ["Karachi", "Lahore", "Multan", "Islamabad", "Quetta"];
// for(var  i = 0; i<cities.length; i++){
//     if(cities[i] == "Karachi"){
//         continue;
//     }
//     if(cities[i] == "Multan"){
//         continue;
//     }
//     console.log(cities[i]);
// };

// Q=27

// Ek array banao jisme 8 students ke names hon. Loop use karke index 4 par loop stop karo using break.
// var student = ['muhammad', "ahmed ", "bilal ahmed", "gul ahmed", "muzzaiml Ahmed", "muhammad ahmed", "Zubair Ali", "hasnain Arif", "shoaib ali"];

// for(var i = 0; i<student.length; i++){
//     if(student[i] == "muzzaiml Ahmed"){
//         break
//     }
//         console.log(student[i]);
// }


// Q=28

// Ek numbers ka array banao. Loop use karke har number ko 2 se multiply karke print karo.
// var number = [10, 20, 40, 50, 60, 70, 21, 23, 45, 56, 11, 9];
// for(var i = 0; i<number.length; i++){
//     console.log(number[i] * 2);
// }


// Q=29

// Ek array banao. Loop use karke array ke tamam elements ko reverse order mein print karo. reverse() method use nahi karna.

// var elements =['dog', 'cat', 'monkey', 'cheap', 'bedBug', 'think', 'thin'];
// for(var i =elements.length-1; i>=0; --i){
//     console.log(elements[i]);
// }


// Q=31


// 31. Ek function banao jiska naam greet() ho. Function call karne par Hello Students print ho.

// function greet() {
//     alert("welcome to my store buddy")
// }
// greet()

// Q=32;

// 32. Ek function banao jo user ka name prompt se le aur Welcome + Name print kare.

// function welcome() {
//     var userName= prompt("enter you are Name")
//     console.log("welcome:",userName)
// }
// welcome()


// Q=33

// 33. Ek function banao jo 2 numbers ko add kare.

// function addtion() {
//     var num1= 10;
//     var num2= 20;
//     console.log(num1+num2);

// }
// addtion()

// Q=34

// 34. Ek function banao jo 2 numbers ko subtract kare.



// function subtract() {
//     var num1= 10;
//     var num2= 20;
//     console.log(num1-num2);

// }
// subtract()


// Q=35
// 35. Ek function banao jo 3 numbers ka multiplication calculate kare.



// function multiplication() {
//      var num1= 10;
//     var num2= 20;
//        var num3= 30;
//     console.log(num1 *num2 *num3);

// }
//  multiplication()

// Q=36


// 36. Ek function banao jo kisi number ka table print kare.

// function table() {
//     for(var i = 1; i<=10; i++){
//         console.log(i+ " X " + i + " = " + (i * 2)); 
//     }
// }

// table()

// Q=37


// 37. Ek function banao jo check kare ke given number even hai ya odd.


// function evenNumber() {
//     for (let i = 1; i<=20; i++) {
//         if(i % 2 == 0){
//             console.log("Even Number :", i);
//         }
//     }

// }

// evenNumber()


// Q=38


// 38. Ek function banao jo 1 se 100 tak counting print kare.

// function counting() {
//     for(var i = 1; i<=100; i++){
//         console.log(i);
//     }
// }

// counting()

// Q=39


// 39. Ek function banao jo 2 numbers input le aur unmein se greater number print kare.

// function greaterChecker() {
//     var num1=+prompt("enter you are number")
//     var num2=+prompt("enter you are number")
//     if(num1 > num2){
//         console.log("num1 is greater then num2");
//     }
//     else if(num1 < num2){
//         console.log("num2 is greater then num1");
//     }
//     else{
//         console.log("both arte equal");

//     }
// }
// greaterChecker()



// Q=40;


// 40. Ek function banao jo kisi student ka name aur age receive kare aur dono console mein print kare.

// function informations() {
//     var userName = prompt("enter you are name")
//     var userAge = prompt("enter you are name")
//     console.log("you are name is :", userName, " you are ", userAge, " old");

// }

// informations()


// Part 5: Mixed Challenges (10 Questions)
// Logic Building – Challenging
// Is section mein students ko multiple concepts ek sath use karne honge.

// Q=41

// 41. Ek array banao jisme 10 numbers hon. Loop use karke sirf even numbers ka sum calculate karo.



// var number = [10, 20, 40, 50, 60, 70, 21, 23, 45, 56, 11, 9];
// var sum = 0;
// for(var i = 0; i< number.length; i++){
//     if(number[i] % 2 ==0){
//         sum += number[i]
//     }
// }
// console.log(sum);


// Q=42

// 42. Ek students ka array banao. push() se 2 new students add karo, pop() se last student remove karo aur loop use karke remaining students print karo.


// var student = ['muhammad', "bilal ahmed", "muzzaiml Ahmed", "Zubair Ali", "hasnain Arif", "shoaib ali"];
// student.push("muhammad ahmed", "ahmed ");
// student.pop()
// for(var i = 0; i < student.length; i++){
//     console.log(student[i]);

// }

// Q=43

// 43. Ek numbers ka array banao. Loop use karke check karo ke array mein 25 present hai ya nahi. Agar mil jaye to break use karo.


// var number = [10, 20, 40, 50, 60, 70, 25, 23, 45, 56, 11, 9 ];
// for(var i = 0; i <number.length; i++){
//     if(number[i] === 25){
//         break;
//     }
//    console.log(number[i]);
// }


// Q=44


// 44. Ek fruits ka array banao. splice() use karke 2 fruits remove karo aur 2 new fruits add karo. Updated array loop se print karo.

// var fruits = ["banana", "apple", "watermelon", "pine apple", "graps"];
// fruits.splice(3,2, "lemone", "mango")
// for(var i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }



// Q=45

// 45. Ek function banao jo array receive kare aur loop use karke tamam elements print kare.


// function arrayRiciver(){
//     var arra= []
//     var giveArra= prompt("enter you are value one");
//     var giveArra1= prompt("enter you are value tow");
//     var giveArra2= prompt("enter you are value three");
//     var giveArra3= prompt("enter you are value four");
//     arra.push(giveArra, giveArra1, giveArra2, giveArra3)
//     console.log(arra);
//     for(var i = 0; i<arra.length; i++){
//         console.log(arra[i]); 
//     }   
// }

// arrayRiciver()


// Q=46

// 46. Ek function banao jo numbers ka array receive kare aur tamam numbers ka sum return kare.

// function returnSumFnc() {
//      var number = [10, 20, 40, 50, 60, 70, 25, 23, 45, 56, 11, 9 ];
//      var sum = 0
//     for(var i = 0; i <number.length; i++){
//         sum +=number[i]
//     }
//     return sum
// }

// console.log(returnSumFnc())



// Q=47

// 47. Ek function banao jo array receive kare aur usmein se sirf odd numbers ka new array create kare.

// function createNewArray() {
// var number = [10, 20, 40, 50, 60, 70, 25, 23, 45, 56, 11, 9 ];
//  var newArray = []
//     for(var i = 0; i<number.length; i++){
//         if(number[i] % 2 !== 0){
//             newArray.push(number[i])
//         }
//     }
//     console.log(newArray);

// }

// createNewArray()

// Q=48

// 48. Ek function banao jo students ka array receive kare. Loop use karke har student ko welcome message de.

// function students() {
//  var student = ['muhammad', "bilal ahmed", "muzzaiml Ahmed", "Zubair Ali", "hasnain Arif", "shoaib ali"];
//   for(var i = 0;  i<student.length; i++){
//     console.log("welcome", student[i]);

//   }

// }
// students()


// Q=49

// 49. Ek function banao jo table number aur table length receive kare aur us number ka complete table print kare.
// console.log(i + " x " + i + " = " + (i * i));

// function tableMaker() {
//     var userTable = +prompt("enter your number to make a table")
//     var tablelength = +prompt("enter your number to make a table")
//     for(var i = 1; i <=tablelength; i++){
//         console.log(userTable + " X " + i + " = " + (userTable * i));
//     }

// }
// tableMaker()


// Q=50

// 50. Student Management System (Mini Project)
// Ek students ka array banao aur following operations perform karo:
// 5 students ke names array mein add karo.
// push() use karke 2 new students add karo.
//  pop() use karke last student remove karo.
// unshift() use karke ek new student starting mein add karo.
// splice() use karke kisi student ko remove karo.
// slice() use karke students ki copy banao.
// Loop use karke tamam students display karo.
// Ek function banao jo student ka naam receive kare aur welcome message show kare.


// function studentManagement() {
//  var student = ['muhammad', "bilal ahmed", "muzzaiml Ahmed", "Zubair Ali", "hasnain Arif", "shoaib ali"];
//     student.push("Abdul Kabeer", "Abdul Hannan")
//     student.pop()
//     student.unshift("Abdul Allah")
//     student.splice(0, 1)
//     var newStd=student.slice(student.length-1)
//     console.log(newStd);
//     for(var i = 0; i<student.length; i++){
//         console.log("welcome",student[i]);
//     }
// }
// studentManagement()


// Part 6: DOM – Input Get & Set (10 Questions)
// Practical DOM Challenges


// Q=51


// Question 51: Get User Name
// HTML mein ek input field banao.
// Ek button banao.
// Button click hone par input ki value console mein print karo.

// function saveName() {
//     var userNames = document.getElementById("name").value
//   console.log(userNames); 
// }


// Q=52

// Question 52: Set Input Value
// HTML mein ek input field banao.
// Ek button banao.
// Button click hone par input field mein Welcome to JavaScript set karo.

// function welcomeJavaScript() {
//     var getInputValue =document.getElementById('JavaScript').value = "Welcome to JavaScript"
//     console.log(getInputValue);

// }

// Q=53


// Question 53: Addition Calculator
// 2 input fields banao.
// Ek button banao.
// Dono inputs ki values get karo.
// Unka sum calculate karke console mein print karo.


// function addtionCalculator() {
//     var inputNum1 = document.getElementById('num1')
//     var inputNum2 = document.getElementById('num2') 
//     var toNumber1 = Number(inputNum1.value)
//     var toNumber2 = Number(inputNum2.value)
//     console.log(toNumber1 + toNumber2);
// }


// Q=54


// Question 54: Welcome Message
// Ek input field banao jahan user apna name enter kare.
// Button click hone par screen par show karo:
// Welcome Ali


// function getWelcome() {
//     var userName = document.getElementById('welcomeUser').value;
//     console.log("welcome to my website", userName);
// }



// Q=55


// Question 55: Even or Odd
// Ek input field banao.
// User se number lo.
// Button click par check karo ke number even hai ya odd.
// Result HTML mein show karo.

// function checkEvenOdd() {
//     var evenOrOddNumber =document.getElementById('EvenOddChecker');
//     var toNumber =Number(evenOrOddNumber.value)
//     if(toNumber % 2 === 0){
//    document.writeln("<h1> " +"it is a Even Number :" + toNumber + "</h1> ");
//     }
//     else{
//         document.writeln("<h1> " +"it is a Odd Number :" + toNumber + "</h1> "); 
//     }
// }


// Q=56


// Question 56: Multiplication Table
// Ek input field banao.
// User se table number lo.
// Button click hone par uska table 1 se 10 tak HTML mein show karo.
// Is question mein loop use karna zaroori hai.

// function multiplicationTable() {
//     var getNumber = document.getElementById("multiplicationTable").value;
//     for(var i = 1; i<=10; i++){
//         document.writeln("<h1> " + i + " X " + i + " = " +(i * getNumber) + "</h1> ");
//     }
// }



// Q=57

// Question 57: Simple Student Registration
// Student name ke liye input field banao.
// Button banao.
// Button click hone par student ka name ek array mein add karo using push().
// Loop use karke tamam students ke names HTML mein show karo.


// function studentRegistration() {
//     var  registrationArray =[]
//     var userName = document.getElementById('userName').value;
//     var userEmail = document.getElementById('userEmail').value;
//     var userpassword = document.getElementById('userPassword').value;
//     registrationArray.push(userName, userEmail, userpassword)
//     console.log(registrationArray);
//    for(var i = 0; i<registrationArray.length; i++){
//     document.writeln("<h1> "+ registrationArray[i] +"</h1> ");
//    } 
// }


// Q = 58
// Question 58: Student Removal
// Ek students ka array banao.
// Ek button banao.
// Button click hone par pop() use karke last student remove karo.
// Updated students list HTML mein show karo.


// function studentremoval() {
//     var student = ['muhammad', "ahmed ", "bilal ahmed", "gul ahmed", "hussain ahmed"];
//     student.pop()
//     for (var i = 0; i < student.length; i++) {
//         document.writeln("<h1>" + student[i] + "</h1>")
//     }
// }


// Q=59


// Question 59: Input Value Update
// Ek input field banao.
// Ek button banao.
// Button click hone par input ki existing value change karke Saylani Mass IT Training set karo.


// function welcometSMIT() {
//     var getInputValue =document.getElementById('Saylani').value = "Saylani Mass IT Training"
//     document.writeln("<h1>"+getInputValue + "</h1>");

// }



 // Q=60
// Question 60: Mini Calculator
// 2 input fields banao.
// 4 buttons banao: Addition, Subtraction, Multiplication, Division.
// Har button ka apna function hona chahiye.
// User ke enter kiye hue numbers par calculation perform karo.
// Result HTML mein show karo.




function calculater(){
    var num1 = document.getElementById("num1")
    var num2 = document.getElementById("num2")
    var operator= document.getElementById("operator")
      if(operator.value === "+"){
        console.log(+num1.value + +num2.value)
      }
      else if(operator.value === "-"){
        console.log(+num1.value - +num2.value)

      }
      else if (operator.value === "*"){
        console.log(+num1.value * +num2.value)

      }

      else if(operator.value === "/"){
        console.log(+num1.value / +num2.value)
      }
      else{
        console.log("invalid");
        
      }
}