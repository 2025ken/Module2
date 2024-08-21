var fName = prompt("Please write your first name")
//prompting the user to write their first name to store it into variable fName

var piValue = 3.1415926;
//piValue variable asigned with Pi 

var myFavNum = prompt("What is your favorite number?");
//asking the user their favorite number and storing it in myFavNum

var myArea = piValue * myFavNum * myFavNum;
//calculating the Pi value with the chosen number squared

document.write("Hi " + fName + ", you entered your favorite number as: " + myFavNum + ". ");
document.write(`If that was the radius of a circle, the circle's area would be ${myArea}.`);