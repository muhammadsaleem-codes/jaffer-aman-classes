// Q1. Ek array banao jismein 6 fruits ke names hon. Console mein sirf 2nd aur 5th fruit print karo.


var fruits = ['apple', "banana", "watermelon", "pineapple", "mango", "orange"];
console.log(fruits[2]);
console.log(fruits[5]);


// Q2. Ek array banao jismein 5 Pakistani cities hon. 3rd city ko replace karke "Peshawar" kar do.

var cities = ["karachi", "khuzdar", "sindh", "multan", "sakkher", "nall"];
cities.splice(2, 1, "peshawer");
console.log(cities);



// Q3. Ek array banao jismein 7 student names hon. Array ki total length print karo.

var students = ["muhammad", "saleem", "haleem", "bilal", "hassan", "ahmed khan", "khan muhammad"];
console.log(students.length);


// Q4. Ek empty array banao aur usmein 5 different car brands manually add karo. Complete array print karo.
var emptyCars=[];
emptyCars[0]= "lumborgani"
emptyCars[1]= "bugati"
emptyCars[2]= "Gli my fav"
emptyCars[3]= "M4"
emptyCars[4]= "alto"
emptyCars[5]= "brand alto"
console.log(emptyCars);


// Q5. Ek array banao jismein 4 subjects hon. Usmein 5th index par "Computer" add karo. Array aur uski length print karo.
var subjects = ["math", "islameyat", "phys", "english", "advanced English", "since"];
console.log(subjects[5].length);



// Part 2 – Push, Pop, Shift, Unshift (6–10)
// Q6.

// javascript
// Is array ke end mein "Banana" aur "Grapes" add karo.


var myFruits = ["Apple", "Mango", "Orange"];
myFruits.push("banana", "Grapes" )
console.log(myFruits);
// Q7.


// javascript
// var students = ["Ali", "Ahmed", "Sara", "Aman"];
// Array ki last 2 values remove karo.




var englishStudent = ["Ali", "Ahmed", "Sara", "Aman"];
englishStudent.splice(1,2)
console.log(englishStudent);


// Q8.


// javascript
// var cities = ["Karachi", "Lahore", "Multan"];
// First city remove karo aur console mein updated array print karo.
var pakCities =["Karachi", "Lahore", "Multan"];
pakCities.shift();
console.log(pakCities);


// Q9.


// javascript
// var names = ["Ahmed", "Sara", "Bilal"];
// Array ke start mein "Ali" aur "Aman" add karo.

var userNames = ["Ahmed", "Sara", "Bilal"];
userNames.unshift("Ali", "Aman")
console.log(userNames);


// Q10.


// javascript
// var countries =["Pakistan", "India", "China", "Turkey"] ;
// Start se 1 value remove karo.

// End se 1 value remove karo.

// Start mein "Japan" add karo.

// End mein "Canada" add karo.



var countries =["Pakistan", "India", "China", "Turkey"]
countries.shift()
countries.pop()
countries.unshift("Japan")
countries.push("Canada")
console.log(countries);


//Part 3 – Slice Method (11–15)
// Q11.


// javascript
// var cities = [
//   "Karachi",
//   "Lahore",
//   "Multan",
//   "Islamabad",
//   "Quetta",
//   "Peshawar"
// ];
// Slice use karke sirf first 3 cities ka new array banao.4

var myNewCites = ["Karachi", "Lahore", "Multan", "Islamabad", "Quetta", "Peshawar"];
var mynewCitiesFSlise = myNewCites.slice(1, 4);
console.log(mynewCitiesFSlise);

// Q12.
// javascript
// var students = ;
// Slice use karke index 2 se index 5 tak values copy karo.
var mathSudents =["Ali", "Ahmed", "Sara", "Bilal", "Aman", "Saad"];
var mathyStd = mathSudents.slice(2, 5)
console.log(mathyStd);


// Q13.
// javascript
// var fruits =;
// Slice use karke last 2 fruits ka new array banao.


var theFruits =  ["Apple", "Mango", "Orange", "Banana", "Grapes"];
var myNewFruits = theFruits.slice(1, 3);
console.log(myNewFruits);



// Q14.


// javascript
// var names = ;
// Slice use karke first value ko exclude karte hue baqi tamam values copy karo.


var empoleyNames =["Ali", "Ahmed", "Sara", "Bilal", "Aman"];
var empoleynames= empoleyNames.slice(1);
console.log(empoleynames);



// Q15.
// javascript
// var cars = ;
// Slice use karke:

// First 4 cars copy karo.

// Last 3 cars copy karo.

// Original array ko bhi print karo.

// Part 4 – Splice Method (16–20)

var capmanyCars =["BMW", "Audi", "Toyota", "Honda", "Suzuki", "Kia"];
var fristCar = capmanyCars.slice(0, 4);
console.log(fristCar);
var lastCars = capmanyCars.slice(2, 5);
console.log(lastCars);

console.log(capmanyCars);



// Q16.


// javascript
// var students =;
// Splice use karke index 1 se 1 value remove karo.

var schoolStudents  = ["Ali", "Ahmed", "Sara", "Bilal"];
schoolStudents.splice(1 ,1)
console.log(schoolStudents);


// Q17.


// javascript
// var cities = ["Karachi", "Lahore", "Multan", "Quetta"];
// Splice use karke index 2 par "Islamabad" add karo, bina kisi value ko remove kiye.
var citiesSplice = ["Karachi", "Lahore", "Multan", "Quetta"];
citiesSplice.splice(2, 0, "Islamabad");
console.log(citiesSplice);


// Q18.


// javascript
// var fruits = ;
// Splice use karke index 1 se 2 values remove karo aur unki jagah "Watermelon" add karo.

var spliceFruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];
spliceFruits.splice(1, 2);
console.log(spliceFruits);

// Q19.


// javascript
// var names = ;
// Splice use karke:

// Index 0 se 2 values remove karo.

// Index 2 par "Mohsin" aur "Usman" add karo.


var newEmpoleys = ["Ali", "Ahmed", "Sara", "Bilal", "Aman", "Saad"];
newEmpoleys.splice(0,2, "Mohsin", "Usman");
console.log(newEmpoleys);


// Q20. – Grand Challenge


// javascript
// var cities = 
// Is array par ye tamam tasks perform karo:

// End mein "Peshawar" add karo.

// Start mein "Quetta" add karo.

// Last value remove karo.

// First value remove karo.

// Index 2 se 1 value remove karo.

// Index 1 par "Sukkur" add karo.

// Slice use karke first 3 values ka new array banao.

// Original aur new array dono print karo.

var grandChalenges= [  "Karachi",  "Lahore",  "Multan",  "Islamabad",  "Hyderabad"];;
grandChalenges.push("Peshawar");
grandChalenges.unshift("Quetta");
grandChalenges.pop();
grandChalenges.shift();
grandChalenges.splice(2,1)
grandChalenges.splice(1, 0, "Sukkur");
var frisrtChlenges= grandChalenges.slice(0, 3);
console.log(frisrtChlenges);
console.log(grandChalenges);
console.log(typeof grandChalenges);


//loops are here//
var inices = 10;
if(inices >=10){
    for(var i = 1; i<=10; ++i){
        console.log("hello there im learning Js Loops" , i);
    }
}
