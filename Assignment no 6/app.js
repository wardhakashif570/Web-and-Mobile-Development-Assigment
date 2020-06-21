//Assignment # 21-25 JAVASCRIPT

//1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

var firstName=prompt("Enter your first Name");
var lastName=prompt("Enter your last Name");

var fullName=firstName+" "+lastName;
alert(fullName);

//2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

var mobileModel=prompt("Enter the model of your favourite mobile phone");

alert("My favourite Mobile is "+mobileModel+" and length of string Length is "+mobileModel.length);

//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser

var string="PAKISTAN";
var index=string.indexOf("N");
document.write("Index of N in PAKISTAN is "+index);


//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

var string="Hello World";
var index=string.lastIndexOf("l");
document.write("<br> Index of l from last is "+index);

//5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
var string="Pakistani";
var char=string[3];
document.write("<br> The character which is present on third index of the word Pakistani is "+char);


//6. Repeat Q1 using string concat() method.
var firstName=prompt("Enter your first Name");
var lastName=prompt("Enter your last Name");
fullName=firstName.concat(lastName);
alert(fullName);


//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
var city="Hyderabad";
var replacement  = city.replace("Hyder", "Islam");
document.write("<br> City: "+city);
document.write("<br> After Replacement "+replacement);

//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
var message = "sana and Sara are best friends. They play cricket and football together.";
var replace=message.replace(/and/g,"&");
document.write("<br>After Replacement "+replace);


//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var string="472";
document.write("<br> String:"+string);
var typeOfString=typeof string;
document.write("<br>Type "+typeOfString);
var number=parseInt(string,10);
document.write("<br> Number: "+number);
var typeOfNumber=typeof number;
document.write("<br>Type "+typeOfNumber);
//10.Write a program that takes user input. Convert and show the input in capital letters.
var string=prompt("Enter the string");
var capital=string.toUpperCase();
document.write("The String in Capital letter is"+capital);

//11. Write a program that takes user input. Convert and show the input in title case.
var string=prompt("Enter the String");
function titleCase(str) { 
    str = str.toLowerCase().split(' '); 
    for (var i = 0; i < str.length; i++) { 
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);  
    } 
    return str.join(' '); 
  } 
  document.write("The String in Title Case is "+titleCase(string)); 

//12.Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.
var num=35.36;
var string=num.toString();
string[2]=" ";
document.write("<br> The String is now"+string);

//13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
var userInput= prompt("Enter the username");
for(i=0;i<userInput.length;i++)
{
    if(userInput.charCodeAt(i)===33||userInput.charCodeAt(i)===44||userInput.charCodeAt(i)===46||userInput.charCodeAt(i)===64)
    {
      alert("Please Enter a Valid user name");
    }
}


//14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
document.write("<h1>Search by User Input</h1><br>");
var userInput=prompt("Welcome to ABC backery!What do you want to order Sir/Ma'am");
var dishid,dish=false;
for(i=0;i<A.length;i++)
{
    if(userInput===A[i])
    {
        dishid=i;
        dish=true;
        break;
    }
}
if(dish===true)
{
document.write(userInput+" is available at "+"index "+dishid+"<br>");
}
else
{
document.write(userInput+" is not available in our backery <br>");
}


//15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

var password=prompt("Enter the Password");
var passwordValue;
if(password.length<6)
{
    alert("The Password must be atleast 6 characters long");
}
for(i=0;i<password.length;i++)
{
    if((password.charCodeAt(i)>=48 && password.charCodeAt(i)<=57)||(password.charCodeAt(i)>=65 && password.charCodeAt(i)<=90)||(password.charCodeAt(i)>=97 && password.charCodeAt(i)<=122))
    {
        passwordValue=true;
    }
    else
    {
        passwordValue=false;
    }
}
if(passwordValue===false)
{
    alert("Password should contain only numbers and letters.");

}
if(password.charCodeAt(0)>=48 && password.charCodeAt(0)<=57)
{
    alert("The first character should not be a number");
}

//16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.

var string="NED University of Karachi";
string=string.split('');
for(i=0;i<string.length;i++)
{
    document.write("<br>"+string[i]);
}
//17. Write a program to display the last character of a user input.
var userInput=prompt("Enter the string");
var string=userInput[userInput.length-1];
document.write("<br> The Last Character of Input is "+string);

//18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
var string="the quick brown fox jumps over the lazy dog";
count=string.match(/the/g).length;
document.write("<br> Count of occurence of the in the string is"+count);


//Assignment # 26-30 JAVASCRIPT

/*
1. Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number*/
var userInput=+prompt("Enter the number");
document.write("<br>The number is "+userInput);
var roundedValue=Math.round(userInput);
document.write("<br>The rounded  number is "+roundedValue);
var floorValue=Math.floor(userInput);
document.write("<br>The floor number is "+floorValue);
var ceilValue=Math.ceil(userInput);
document.write("<br>The Ceil of the number is "+ceilValue);

/*2. Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number
*/
var userInput=+prompt("Enter the number");
document.write("<br>The number is "+userInput);
var roundedValue=Math.round(userInput);
document.write("<br>The rounded  number is "+roundedValue);
var floorValue=Math.floor(userInput);
document.write("<br>The floor number is "+floorValue);
var ceilValue=Math.ceil(userInput);
document.write("<br>The Ceil of the number is "+ceilValue);

/*3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5
*/
var userInput=+prompt("Enter the number");
var absValue=Math.abs(userInput);
document.write("<br>The value after doing the absolute is"+absValue);

/*
4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:
*/
var randValue=Math.floor(Math.random() * 6) + 1;
document.write("<br>The value of the dice is"+randValue);



/*5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
*/
var randomValue=Math.floor(Math.random()*2)+1;
if(randomValue===1)
{
    document.write("<br>"+randomValue+"<br>"+"Random Coin Value :Tails");

}
else if(randomValue===2)
{
    document.write("<br>"+randomValue+"<br>"+"Random Coin Value :Heads");

}

//6. Write a program that shows a random number between 1 and 100 in your browser
var randValue=Math.floor(Math.random() * 100) + 1;
document.write("<br>The random value between 1 and 100 is "+randValue);


/*
7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms
*/
var userInput=prompt("Enter your weight!");
var parsedValue=parseInt(userInput);
document.write("<br>The weight of the user is "+parsedValue+" Kilograms");

/*
8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
*/
var userInput=+prompt("Enter the secret number");
var random=Math.floor(Math.random() * 10) + 1;
if(userInput===random)
{
    alert("Congratulations!You are Right");
}
else{
    alert("Try Again!");
}

//Assignment # 31-34 JAVASCRIPT


// 1.
var currentdate = new Date();
document.write(currentdate);
// 2.
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentmonth = currentdate.getMonth();
document.write(months[currentmonth]);
// 3,
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var currentday = currentdate.getDay();
document.write("Today is " + days[currentday]);
// 4.
if( currentday == 0 || currentday == 6){
document.write("Today is a funday")
}
// 5.
if(currentdate.getDate() <=15){
    document.write("first fifteen days of the month");
}else if(currentdate.getDate() <=16){
    document.write("16th day of the month");
}else{
    document.write("last 16 days of the month");
}
// 6.
document.write("milliseconds: " + currentdate.getTime())
var minutes = currentdate.getTime()/(1000*60);
document.write("minutes" + minutes);
// 7.
var hour = currentdate.getHours();
if(hour < 12){
    document.write("its AM");
}else{
    document.write("its PM");
}
// 8.
var laterDate = new Date("2020/12/31");
document.write(laterDate);
// 9.
var startingdate = new Date("2020/6/18");
var daysgone = parseInt((currentdate.getTime() - startingdate.getTime())/(1000*60*60*24));
document.write(daysgone + " days have passed since ramazan 1st")
// 10.
var startingdate = new Date("2015/1/1");
var daysgone = parseInt((currentdate.getTime() - startingdate.getTime())/(1000*60));
document.write(daysgone + " seconds have passed since 2015")
// 11.
document.write("current date" + currentdate)
var hourago = new Date( currentdate.getTime() - (1000* 60 *60));
document.write("an hour ago it was " + hourago)
// 12.
document.write("current date" + currentdate)
var centuryago = new Date( currentdate.getTime() - (1000* 60 * 60 *24 * 365.25 *100));
document.write("100 years ago it was " + centuryago)
// 13.
var age =prompt ("enter your age")
var birthyear = new Date( currentdate.getTime() - (1000* 60 * 60 *24 * 365.25 *age));
document.write(birthyear.getFullYear());
// 14.
document.write("customer name : Wardha Kashif");
document.write("Month : Feburary" );
document.write("Number of units : 416");
document.write("Charges per unit : 16");
document.write("net amount payable with in due date : " + 416*16);
document.write("late payment surcharge : 350");
document.write("payment after due date : " + ((416*16)+350) );



//Assignment # 35-38
//JAVASCRIPT

//FUNCTIONS

//1. Write a function that displays current date & time in your browser.

function CurrentDate()
{

    var d=new Date();
    return d;
}

document.write("<br><h1>"+CurrentDate()+"</h1>");


//2. Write a function that takes first & last name and then it greets the user using his full name.

function FullName(firstName,lastName)
{
    var fullName=firstName+" "+lastName;
    return fullName;
}

alert("Good Morning"+FullName("Wardha","Kashif"));

//3. Write a function that adds two numbers (input by user)and returns the sum of two numbers.
function AddNumbers(num1,num2)
{

var result=num1+num2;
return result;

}
document.write("<br>The sum of the numbers is"+AddNumbers(5,4));

//4. Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and  show the desired result in your browser.

function Calculator(num1,num2,operator)
{
    var result;
    if(operator==='+')
    {
        result=num1+num2;
    
    }
    else if(operator==='-')
    {
        result=num1-num2;
    
    }
    else if(operator==='/')
    {
        result=num1/num2;
    
    }
    else if(operator==='*')
    {
        result=num1*num2;
    
    }
    return result;
}

document.write("<br>The Result made by the Calculator is "+Calculator(5,4,"+"));

//5. Write a function that squares its argument.

function Square(num)
{
var result=num*num;
return result;

}
document.write("<br> The Square of the number is "+Square(4));

//6. Write a function that computes factorial of a number.
var sum=0;
function Factorial(number)
{
var fact;
for(i=1;i<number;i++)
{
    
fact=number*i;
sum=sum+fact;
}

return sum;
}
document.write("<br> The Factorial of the number is "+Factorial(4));


//7. Write a function that take start and end number as inputs & display counting in your browser.

function Counting(firstNumber,lastNumber)
{
    for(i=firstNumber;i<=lastNumber;i++)
    {
        document.write("<br>"+i);
    }
}
document.write("<br><h1>Counting</h1>");
Counting(12,19);

/*8. Write a nested function that computes hypotenuse of a
right angle triangle.
Hypotenuse2 = Base2 + Perpendicular2
function | JAVASCRIPT
Page 2 of 4
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare()*/

function calculateHypotenuse(base,perpendicular)
{
    function Square(x)
    {
     
     return x*x;
    }
    Result=Square(base)+Square(perpendicular)
    return Result;
}
document.write("<br>The hypoteneous of the right angle triangle is"+calculateHypotenuse(4,3));


/*9. Write a function that calculates the area of a rectangle.
A = width * height
Pass width and height in following manner:
i. Arguments as value
ii.Arguments as variables*/
function calculateArea(width,height)
{
    var Area=width*height;
    return Area;
}
var Height=15;
var Width=3;

document.write("<br>"+"The Area of The Triangle by Passing Arguement as value  is "+calculateArea(Height,Width));
document.write("<br>"+"The Area of The Triangle by Passing Arguement as variable  is "+calculateArea(7,4));


//10. Write a JavaScript function that checks whether a passed string is palindrome or not?
//A palindrome is word, phrase, or sequence that reads the same backward as
//forward, e.g., madam.

function Palindrome(string)
{
    var newString="";
   for(i=string.length-1;i>=0;i--)
   {
     newString+=string[i];
   }
   if(string===newString)
   {
       document.write("<br>Its a Palindrome");
   }
   else
   {
       document.write("<br>Its not a Palindrome");
   }
}
Palindrome("madam");

/*11. Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox'*/

function titleCase(str) { 
    str = str.toLowerCase().split(' '); 
    for (var i = 0; i < str.length; i++) { 
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);  
    } 
    return str.join(' '); 
  } 
  document.write("<br> The String in Title Case is "+titleCase('the quick brown fox')); 

/*12. Write a JavaScript function that accepts a string as a
parameter and find the longest word within the string.
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development'*/
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write("<br>"+find_longest_word('Web Development Tutorial'));

/*13. Write a JavaScript function that accepts two arguments, a
string and a letter and the function will count the number of
function | JAVASCRIPT
Page 3 of 4
occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'*/

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
document.write("<br>The occurence of the letter in the string is "+char_count('Wardha','a'));


/*14. The Geometrizer
Create 2 functions that calculate properties of a circle, using
the definitions here.
Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output
"The circumference is NN".
Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area
is NN".
Circumference of circle = 2πr
Area of circle = πr2
*/
document.write("<h1>Geometrizer</h1>");
function calcCircumference(radius)
{
    var pi=3.142;
    var circumference;
    circumference=2*pi*radius;
    return circumference;
}
document.write("<br>The Circumference of the Circle is "+calcCircumference(5));

function calcArea(radius)
{
    var pi=3.142;
    var Area;
    Area=pi*radius*radius;
    return Area;
}
document.write("<br>The Area  of the Circle is "+calcArea(5));