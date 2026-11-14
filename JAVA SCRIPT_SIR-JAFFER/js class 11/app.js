// for(var i = 1; i <=30; i++){
//     if(i % 2 !== 0){
//         console.log(i); 
//     }
//     if(i == 20){
//         break;
//     }
//      if (i == 5){
//         continue;
//     }
    
//  };

// var stdNames = ["muhamamd", "saleem", "khan muhammad", "bilal" , "ahmed jan", "muhamamd jan"];
// for (let i = 0; i < stdNames.length; i++) {
//     if (stdNames[i] === "khan muhammad"){
//         continue;
//     }

//     if(stdNames[i] == "ahmed jan"){
//         break;
//     }
//     console.log(stdNames[i]);
    
// }


// var userStr = prompt("enter you are string to count vowels")
// var count = 0;
// for (let i = 0; i < userStr.length; i++) {
//       if(
//         userStr[i] ==="a" || userStr[i] === "e" || userStr[i] === "i" || userStr[i] === "o" ||userStr[i] === "u"){
//            count++
//         }
//     }
//     console.log(count);




        // var addSub = 0;

        // function addition() {
        //     addSub++;
        //     document.getElementById("result").innerHTML = addSub;
        //     console.log(addSub);
        // }

        // function minus() {
        //     addSub--;
        //     document.getElementById("result").innerHTML = addSub;
        //     console.log(addSub);
        // }





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