var arry =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "muhammad", "saleem", "ali ahmed"]; // it is an array 
// arry.pop() // it removes from last 
// arry.push("muhammad saleem", "saleem ahmed"); // it adds from last and u can add multipul elements
// arry.shift("1"); 
// arry.unshift("islamaad")
// console.log(arry);
// var myNewArray = arry.slice(2,10);
// console.log(myNewArray);

var thearry = arry.slice("1");
// var themyArry = arry.slice(7, -1);
console.log(thearry);

console.log(arry[arry.length -1]);


let arra= [1, 2, 3, 4, 5, 6, 7, 8,  9,];
let myneyArray =[(arra.slice(0, 1)).concat(arra.slice(-1))
]
console.log(myneyArray);
