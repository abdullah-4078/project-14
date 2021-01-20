//+++++++++++++++++++++++++++++++++++++++++++++++DATE METHODS++++++++++++++++++++++++++++++++++++++++++++++++++

//================================================Q1===========================================================

// var today = new Date();

// document.write(today)



//================================================Q2===========================================================

// var dayNames = ["jan", "feb", "mar", "april", "may", "jun", "jul","aug","sep","oct","nov","dec"];

// var a = new Date();

// var b = a.getDay();

// var c = dayNames[b];

// document.write("current  month: ",c);



//================================================Q3===========================================================

// var dayNames = ["monday", "tuesday", "wednesday", "thusday", "friday", "saturday", "sunday"];

// var a = new Date();

// var b = a.getDay();

// var c = dayNames[b];

// var firstChar = c.slice(0, 3);

// document.write("today is: ",firstChar);



//================================================Q4===========================================================

// var day = prompt('enter day','your day is: ');

// switch(day){

//     case 'monday':

//         alert("working day")

//         break

//         case 'tuesday':

//             alert("working day")

//             break

//             case 'wednesday':

//                 alert("working day")

//                 break

//                 case 'thursday':

//                     alert("working day")

//                     break

//                     case 'friday':

//                         alert("working day")

//                         break

//                         case 'saturday':

//                             alert("it's funday")

//                             break

//                             case 'sunday':

//                                 alert("it's funday")

//                                 break

//                 default:

//                     alert("not defined")



// }



//================================================Q5===========================================================

// var days = prompt('enter day of month','your day is');

// if (days <= 15){

//     alert('first 15 days of month')

// }

// else if (days >31){

//     alert('wrong day')

// }

// else{

//     alert('last days of month')

// }



//================================================Q6===========================================================

// var today = new Date();

// document.write('current date: ',today)

// var date = new Date("January 01, 1970")

// var a = new Date()

// var current = a.getTime()

// var date = date.getTime()

// var total = (current-date)

// document.write('<br>','elapsed milliseconds since 1 jan 1970: ',total)



// var date = new Date("January 01, 1970")

// var a = new Date()

// var current = a.getTime()

// var date = date.getTime()

// var total = (current-date)/(1000*60)

// document.write('<br>','elapsed minutes since 1 jan 1970: ',total)



//================================================Q7===========================================================

// var time = prompt('enter time','current time');

// if (time >= 12){

//     alert('its pm')

// }

// else{

//     alert('its am')

// }

//================================================Q8===========================================================

// var today = new Date("December 31, 2020");

// document.write('current date: ',today)



//================================================Q9===========================================================

// var current = new Date()

// var ramazan = new Date("June 18, 2015");

// var total = (current-ramazan)/(1000*60*60*24)

// document.write(total,' days have past since june 18 2015')



//================================================Q10===========================================================

// var current = new Date()

// var ramazan = new Date("June 18, 2015");

// var total = (current-ramazan)/(1000*60)

// document.write('On referance day ',current,',')

// document.write('<br>',total,' seconds have passed since begining of 2015')



//================================================Q11===========================================================

// var current = new Date()

// current.setHours( current.getHours() - 1 );

// document.write('time one hour ago was ',current)



//================================================Q12===========================================================

// var current = new Date()

// current.setFullYear( current.getFullYear() - 100 );

// document.write('100 years ago it was ',current)



//================================================Q13===========================================================

// var birthday = new Date(prompt('enter your birth year','your birth year is: '));

// var a = new Date()

// var current = a.getTime()

// var birth = birthday.getTime()

// var total = (current-birth)/(1000*60*60*24*30*12)

// document.write(Math.floor(total))



//================================================Q14===========================================================

// document.write("KE ELECTRIC BILL");

// document.write("<br>");

// var names = "Muhammad Abdullah Kashif"

// document.write("<br>COSTUMER NAME: "+names);

// var month = "JANUARY"

// document.write("<br>MONTH: "+month);

// var NOU = 16859

// document.write("<br>NUMBERS OF UNITS: "+NOU);

// var up = 16.29

// var latepay = 500

// document.write("<br>UNIT PRICE: "+up);

// document.write("<br>");

// document.write("<br>");

// var bill = (NOU*up)

// document.write('AMOUNT PAYABLR WITHIN DUE DATE: RS ',+bill);

// document.write("<br>LATE PAYMENT SURCHARGE: "+latepay);

// document.write("<br>AMOUNT PAYABLR WITHIN DUE DATE: RS "+(bill+latepay));




//+++++++++++++++++++++++++++++++++++++++++++++FUNCTION++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//================================================Q1============================================================

// function Abdullah(){

//     var today = new Date();

//     document.write(today)

// }

// Abdullah();

 

//================================================Q2============================================================

// function Abdullah(){

//        var a = prompt('enter your first name: ','your first name is: ')

//        var b = prompt('enter your last name: ','your last name is: ')

//        alert('good morning: '+ a + ' ' + b)

// }

// Abdullah();

 

// ================================================Q3============================================================

// function add(a,b){

//     a=parseInt(prompt("Enter Your First Number: "));

//     b=parseInt(prompt("Enter Your Last Number: "));

//     var sum = a + b;

//     document.write("The Sum of "+a+" and "+b+" is "+sum);

//   }

//   add();




// ================================================Q4============================================================

// function Abdullah(){

//     var a = 25;

//     var b = 25;

//     var d = 25;

//     var e = 25;

//     var f = 25;

//     var c = a*b*d/e*f;

//     return c;

// }

// var z = Abdullah();

// document.write("the answer is: "+ (z));

 

// ================================================Q5============================================================

// function Abdullah(){

// var x1 = prompt('enter number which you want to make square','your number is: ');

// var a = x1 * x1

// document.write('square of your desired number is: ',+ a)

 

// }

// Abdullah();

 

// ================================================Q6============================================================

// function factorial(n){

 

//     if(n == 0 || n == 1){

//         return 1;}

 

//     else{

//         return n * factorial(n-1);

//     }

// }

// let n = prompt("enter any number",'your number is');

// answer = factorial(n)

// document.write("The factorial of " + n + " is " + answer);

 

// ================================================Q7============================================================

// function counts(num1,num2){

//     for (i= num1 ; i <=num2; i++ ){

//     document.write(i)

//     }

// }

// var num1 = prompt('Énter start number')

// var num2 = prompt('Énter End number')

// ans = counts (num1,num2)

// counts();

 

// ================================================Q8============================================================






// ================================================Q9============================================================

// function Abdullah(){

// var width = prompt('enter width');

// var height = prompt("enter height");

// var a = width * height;

// document.write('the area of rectangle is: '+a)

// }

// Abdullah();

 

// ================================================Q11============================================================

// function FirstLetterUpper(str){

//      var text = str.split(' ');

//      var temp = [];

//    for(var i=0; i<text.length; i++){

//      temp.push(text[i].charAt(0).toUpperCase() + text[i].slice(1));

//    }

//    return (temp.join(' '));

//  }

//  document.write(FirstLetterUpper("the quick brown fox"));

 

// ================================================Q12============================================================

// function longestWord(str) {

//    var string = str.split(" ");

//    var longest = 0;

//   var word = null;

//   for (var i = 0; i <= string.length - 1; i++) {

//       if (longest < string[i].length) {

//           longest = string[i].length;

//           word = string[i];

//       }

//   }

//   return word;

// }

// longestWord();

 

// ================================================Q13============================================================

// function CheckLetter(str,letter){

//   var count=0;

//   var string = str.split('');

//   for(var i=0; i < string.length; i++){

//     if(string[i] === letter){

//       count++;

//     }

//   }

// return (count);

// }

// var str = 'JSResourceS.com';

// var letter = 'o';

// document.write("This "+letter+" is present "+CheckLetter(str,letter)+" times");

 

// ================================================Q14============================================================

// function calcCircumference(radius){

//         var circumF = (2 * Math.PI * radius); 

        

//         return (circumF);

//       }

//       function calcArea(rad){

//         var area = (2 * Math.PI * rad) ;

//         return (area);

//       }

//       var radius = 9;

//       var rad = 12;

//     document.write("The Circumference of the Circle is: "+calcCircumference(radius)+"<br>The area of Circle is: "+calcArea(rad));

     
                                // FUNCTIONS, SWITCH  // STATEMENTS, WHILE… DOWHILE LOOPS


// ==========================================Q1===============================================================


// function Raise(a , b){
//     a = +prompt("Enter Number");
//     b = +prompt("Enter Power");
//     var c = Math.pow(a , b);
//     return c;
// }
// alert(Raise());

 // ==========================================Q2===============================================================


// function Leap_Year(Year){
//     Year = prompt("Enter Year to check wheather the year is a leap year or not");
//     if(Year % 4 === 0){
//         alert("This is a leap Year");
//     }
//     else{
//         alert("This is not a leap year");
//     }
// }
// Leap_Year();

// // ==========================================Q3===============================================================

//     var a = 5;
//     var b = 4;
//     var c = 3;
// function Perimeter(){
//     var S_primeter = (a + b + c)/2;
//     return S_primeter;
// }
// function AreaOfTriangle(){
//     var S = Perimeter();
//     var Area = S * (S - a) * (S - b) * (S - c);
//     return "Area of the triangle is: " + Area;
// }
// alert(AreaOfTriangle());

 // ==========================================Q4===============================================================


// function Marks(){
    // var sub1 = +prompt("Enter marks in first Subject");
    // var sub1 = +prompt("Enter marks in second Subject");
    // var sub1 = +prompt("Enter marks in third Subject");
//     var avg = (sub1 + sub2 + sub3)/3;
//     return avg.toFixed(3);
// }
// function Percentage(){
//     var avg = Marks();
//     var per = avg/100*100;
//     return per.toFixed(3);
// }
// function Main_function(){
//     var marks = Marks();
//     var per = Percentage();
//     var Result = "Your Average Marks is: " + marks + "\n" + "Your Percentage is: " + per
//     return Result;
// }

// alert(Main_function());

 // ==========================================Q6===============================================================


// function removeVowels( input ){
//     var input = prompt("Enter Some text");
//     return input.replace(/[aeiouAEIOU]/g, "");
// }
// alert(removeVowels());

 // ==========================================Q7===============================================================

//  function findVowel(){

    //     var str = "Pleases read this application and give me gratuity";
    
    //     var count = 0;
    
     
    
    //     for(var i = 0; i<=str.length; i++)
    
    //     {
    
    //         if((str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'u' )&&(str[i+1] === 'a' || str[i+1] === 'e' || str[i+1] === 'i' || str[i+1] === 'u')){
    
    //             count++;
    
    //         }
    
     
    
    //     }
    
    //     document.write("There are "+count+" occurences of two vowels in succession")
    
    // }
    
    // findVowel();

 // ==========================================Q8===============================================================


// var distance = +prompt("Enter distance b/w two cities in Km")
// function distance_meter(){
//     var dist_meter = distance*1000;
//     return dist_meter;
// }
// function distance_feet(){
//     var dist_feet = distance*3280.84;
//     return dist_feet;
// }
// function distance_inches(){
//     var dist_inches = distance*39370.1;
//     return dist_inches;
// }
// function distance_centimeters(){
//     var dist_centimeter = distance*100000;
//     return dist_centimeter;
// }
// document.write(`<h3>Distance in Meters is: ${distance_meter()} <br>Distance in feets is: ${distance_feet()} <br>Distance in Inches is: ${distance_inches()} <br>Distance in Centimeters is: ${distance_centimeters()}</h3>`);

 // ==========================================Q9===============================================================

//  function overTime(){
//     var OTP_PerHour = 12;
//     var Total_hours = Math.ceil(+prompt("Enter No of Hours the Emploee worked"));
//     var overTimeHours = Total_hours - 40;
//     if(Total_hours>40){
//         var OTP = overTimeHours*OTP_PerHour
//         return OTP;
//     }
//     else{
//         return "Sorry! over time pay can be have by working greater tha 40 Hours "
//     }
// }
// alert(overTime());

 // ==========================================Q10===============================================================

//  var amount = parseFloat(prompt("How many Amount you are going to withdraw:"));

// function withdraw(amount){

//     var hundred = (amount / 100);

//     var fifty = (amount % 100) /50;

//     var ten = ((amount % 100) %50)/10;

//     var remain = (((amount % 100) % 50) % 10);

//     document.write("<br>You will have "+Math.floor(hundred)+" hundred notes "+Math.floor(fifty)+" Fifty notes "+Math.floor(ten)+" ten notes");

// }

// withdraw(amount);