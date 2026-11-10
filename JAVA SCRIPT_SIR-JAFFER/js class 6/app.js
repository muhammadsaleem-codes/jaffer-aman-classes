// alert("this is me ")


// var age = Number(prompt("enter you age "));
// var userGender = prompt("enter you are gender")
// if ((age >=18 && age <= 50) && (userGender ==="male" || userGender=== "female")){
//     document.write("<div><h1 class='welcome'>Welcome to the class</h1></div>>")
// }

// else{
//     document.write("<div class='not-welcome'>Sorry you are not allowed to enter the class</div>")
// }


// var islameyat = +prompt("enter your islameyat marks");
// var urdu = +prompt("enter your urdu marks");
// var english = +prompt("enter your english marks");
// var math = +prompt("enter you are math marks ")
// var phys = +prompt("enter you are math phys ")
// var obttained = islameyat + urdu +english + math + phys;
// document.writeln(" <h1> " +"Obtained Marks: " , obttained + "</h1>");
// var total = 500;
// var persentage = (obttained / total) * 100;
// // var persentage = 50;

// document.writeln("<h1> " + "percentage if here: " , persentage + "</h1>");



// if(persentage >=80 && persentage <= 100){
//     document.writeln("<h1>A+ Grade </h1>");
// }
// else if(persentage >= 70 && persentage >=79){
//     document.writeln("<h1>A Grade </h1>");
// }
// else if(persentage >= 60 && persentage <=69){
//     document.writeln("<h1>B Grade </h1>");
    
// } else if (persentage >= 50 && persentage <= 59 ){
//     document.writeln("<h1>C Grade </h1>");
// }
// else if ( persentage >= 0 && persentage< 50){
//     document.writeln("<h1>beta to fail ha</h1>");

// }
// else {
//     document.writeln("<h1>invalid try Again</h1>");
    
// }



var islameyat = +prompt("Enter your Islameyat marks");
var urdu = +prompt("Enter your Urdu marks");
var english = +prompt("Enter your English marks");
var math = +prompt("Enter your Math marks");
var phys = +prompt("Enter your Physics marks");

var obtained = islameyat + urdu + english + math + phys;

var total = 500;
var percentage = (obtained / total) * 100;

var grade;

if (percentage >= 80 && percentage <= 100) {
    grade = "A+ Grade";
}
else if (percentage >= 70 && percentage < 80) {
    grade = "A Grade";
}
else if (percentage >= 60 && percentage < 70) {
    grade = "B Grade";
}
else if (percentage >= 50 && percentage < 60) {
    grade = "C Grade";
}
else if (percentage >= 0 && percentage < 50) {
    grade = "Fail";
}
else {
    grade = "Invalid Marks";
}

document.writeln(`
    <table border="1" cellpadding="12" cellspacing="0">
        <tr>
            <th colspan="2">Student Result</th>
        </tr>
        <tr>
            <th>Subject</th>
            <th>Marks</th>
        </tr>
        <tr>
            <td>Islameyat</td>
            <td>${islameyat}</td>
        </tr>
        <tr>
            <td>Urdu</td>
            <td>${urdu}</td>
        </tr>
        <tr>
            <td>English</td>
            <td>${english}</td>
        </tr>
        <tr>
            <td>Math</td>
            <td>${math}</td>
        </tr>
        <tr>
            <td>Physics</td>
            <td>${phys}</td>
        </tr>
        <tr>
            <th>Total Marks</th>
            <td>${total}</td>
        </tr>
        <tr>
            <th>Obtained Marks</th>
            <td>${obtained}</td>
        </tr>
        <tr>
            <th>Percentage</th>
            <td>${percentage.toFixed(2)}%</td>
        </tr>
        <tr>
            <th>Grade</th>
            <td>${grade}</td>
        </tr>
    </table>
`);



