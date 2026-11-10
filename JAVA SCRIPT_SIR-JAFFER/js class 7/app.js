var isShopping = true;
var isChshbyCard = true;
var cashHand = true;

if(isShopping == true){
    if(isChshbyCard == true){
        console.log(" you Hahve to pay by card");
    }

    if(cashHand === true){
        console.log("you have to pasy buy cash on hands");
        
    }
    // else {
    //     console.log("you have to pay on cahse");
        
    // }
}
else {
    console.log("");
    
}




var marks = 85;
if (marks >= 50){
    if(marks >=80){
        console.log("Excellent");
        
    }
    else {
        console.log("good");
        
    }
}
else {
    console.log("invalid Makrs");
    
}


var stdgae = 19;
if (stdgae >= 18){
    if (stdgae >=25){
        console.log("Eligible for Job");
        
    }
    else{
        console.log("Eligible for Vote");
        
    }
}
else {
    console.log("Not Eligible");
    
}




var isRaining = false ;
if(isRaining !== true){
    console.log("go outside");
    
}else {
console.log("u cant go ");

}




var isloggedIn = false ;
if(isloggedIn !== true){
    console.log("Please Login Firs");
    
}
else {
    console.log("invalid");
    
}





var password = 12345;
if (password != 1234){
  console.log("Wrong Password");
  
}

else {
    console.log("you are correct");
    
}


// Q6. Not Equal To (!=)

// Ek variable city banayein aur value "" rakhein.

// Agar city "Lahore" ke equal nahi hai to "" print karein.



var city ="Karachi";
 if( city !== "Lahore"){
    console.log("You are not in Lahore");
    
 }
 else {
    console.log("you are in karachi");
    
 }



// 10
// Questions
 
// Beginner
// Level

// Q1. Create an Array

// 5 students ke names ka array banayein.

// Array ko console mein print karein.



document.writeln('<br>')

// Q2. Access Array Elements

// Fruits ka array banayein: Apple, Mango, Orange, Banana.

// First fruit print karein.

// Third fruit print karein.


var fruitsArray = ['apple', 'mango', "orange", 'banana'];
 document.writeln(`<h1>${fruitsArray[0], fruitsArray[3]}</h1>`);
 
document.writeln('<br>')

//  Q3. Index Number

// 5 cities ka array banayein.

// Index number 2 wali city print karein.

// Index number 4 wali city print karein.


var cities =['karachi ', 'khuzdar ', ' lahore ', 'multan ', ' quetta '];
document.writeln(`<h1>${cities[2], cities[4]}</h1>`);


document.writeln('<br>')

// Q4. Mixed Array

// Ek array banayein jismein ye values hon:

// "Ali"

// "Ahmed"

// 100

// 500

// "Karachi"

// Index number 3 ki value print karein.
var mixedArray = ['ali', 'ahmed', 100, 500, 'karachi'];
document.writeln(`<h1>${mixedArray[3]}</h1>`);

document.writeln('<br>')




// Q5. Empty Array

// Ek empty array banayein.

// Usmein 3 students ke names add karein using index numbers.

// Complete array print karein.

var empthyArry =[];
  empthyArry[0] ='muhammad saleem';
  empthyArry[1] = 'ali jan';
  empthyArry[2] ='mussavir';
  empthyArry[3] ='khand muhammad'
  document.writeln(`<h1>${empthyArry}</h1>`);
  
document.writeln('<br>')

//   Q6. Update Array Value

// Ek array banayein: "Apple", "Mango", "Orange".

// Mango ko Banana se replace karein.

// Updated array print karein.

var updatArray = ['apple', 'mango', 'orange'];
updatArray[1] = "banana";
document.writeln(`<h1>${updatArray}</h1>`);

document.writeln('<br>')


// Q7. Array Length

// 6 fruits ka array banayein.

// Array ki total length print karein.

var arraylength = ['apple', 'banana', 'pineApple', 'orange', 'mango', 'wattermalon'];
document.writeln(`<h1>${arraylength.length}</h1>`);
document.writeln('<br>')

// Q8. Add New Value

// Ek array banayein jismein 3 students ke names hon.

// Index number 3 par ek new student ka name add karein.

// Updated array print karein.

var addNew = ['muhammad ', 'alli', 'khand muhammad',]
addNew[3]= 'bilal';
document.writeln(`<h1>${addNew}</h1>`);
document.writeln('<br>')



// Q9. Array Index Practice

// 5 subjects ka array banayein:

// English

// Maths

// Urdu

// Science

// Computer

// First aur last subject print karein.

var subjects = ['english', 'math', 'urdu', 'science', 'computer'];
document.writeln(`<h1>${subjects[0], subjects[4]}</h1>`);


document.writeln('<br>')

// Q10. Find the Length

// 7 cities ka array banayein.

// Array ki length print karein.

// Index number 5 wali city print karein.

var newCites = ['karachi', 'khuzdar', 'lahore', 'multan', 'quetta', 'sindh', 'kharan' ,'lahore'];
document.writeln(`<h1>${newCites.length}</h1>`);
document.writeln('<br>')

document.writeln(`<h1>${newCites[5]}</h1>`);

document.writeln('<br>')
