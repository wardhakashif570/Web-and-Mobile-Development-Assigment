// Chapter 1

// 1.
alert("Welcome");
// 2.
alert("please enter a valid password");
// 3.
alert("welcome to JS Land...\nHappy Coding!")
// 4.
alert("welcome to JS Land...");
alert("Happy Coding");

// Chapter 2

// 1.
var username;
// 2.
var myName = "Wardha Kashif";
// 3.
var message;
message = "Hello World";
alert(message);
// 4.
var name = "Jhon Doe";
var age = "16 Years old";
var subject = "Certified Mobile App Development";
// 5.
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);
// 6.
var email = "wardhakashif00@gmail.com";
alert("My email address is "+email);
// 7.
var book = "A smarter way to learn Javascript";
alert(book);
// 8.
document.write("Yes I can write HTML throught Javascript");
// 9.
alert("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");

// Chapter 3

// 1.
var age;
age = 20;
alert("I am "+age+" years old");
// 2.
var visits = 1;
alert("You have visiy=ted this website "+visits+" times");
// 3.
var birthYear = 2000;
document.write(birthYear);
// 4.
var visitorName = "Jhon Doe";
var productTitle = "T shirt";
var Quantity = 5;
document.write(visitorName+" ordered " + Quantity + productTitle +" on XYZ clothing store ")

// Chapter 4

// 1.
var a,b,c;
// 2.
var name , name1 , name_ , name_mine , name123__;
// var 1name , Iname* , namee-xyz , name{mine ,12_dkf; //illegal variables names

// Chapter 5
// 1.
document.write("sum of 3 and 5 is " + (3+8));
// 2.
document.write("difference of 3 and 5 is " + (3-8));
document.write("multiplication of 3 and 5 is " + (3*8));
document.write("division of 3 and 5 is " + (3/8));
// 3.
var myvar;
console.log("Value after variable declaration is:" + myvar )
myvar = 3;
console.log("Initial value of variable is : "+ myvar);
myvar++;
console.log("value after increment is : "+ myvar);
myvar+7;
console.log("value after addition is : "+ myvar);
myvar--;
console.log("value after decrement is : "+ myvar);
console.log("the output is : "+ myvar%3)
// 4.
var cost = 500;
document.write("Total cost to buy tickets to a movie is " + cost * 5 + "PKR");
// 5.
document.write("Table of 4 \n 4x1=4\n4x2=8\n4x3=12\n4x4=16\n4x5=20\n4x6=24\n4x7=28\n4x8=32\n4x9=36\n4x10=40\n");
// 6.
var cel = 25;
document.write((cel * (9/5)) +5);
var fahrenheit = 70;
document.write((fahrenheit-32)*(5/9));
// 7.
var price1 = 1000;
var price2 = 120;
var quantity1 = 2;
var quantity2 = 7;
var shippingcharges = 200;
document.write("total cost of your order is " + (price1*quantity1)+(price2*quantity2)+shippingcharges);
// 8.
var totalMarks = 550;
var marksObt = 480;
var percentage = (480/550) * 100;
document.write("Percentage:" + percentage );
// 9.
document.write("Total currency in PKR : " + ((10*104.8) + (25*28) ));
// 10.
var num = 10;
num = ((num + 5)*10)/2
// 11.
var CurrentYear = 2020;
var birthYear = 2000;
document.write("Your age is " + (CurrentYear-birthYear));
// 12.
var radius = 20;
document.write("circumference is : " + (2* Math.PI*radius));
document.write("area of circle is : " + (Math.PI*Math.pow(radius,2)));
// 13.
var snack= "chocolate chip";
var currentAge = 20;
var EstimatedAge = 40;
var amount = 4;
document.write("you will need " + (EstimatedAge-currentAge)*4 + snack + "to last until you ripe old age of " + EstimatedAge );

// Chapter 6-9

// 1.
var num = prompt("Enter a number")
document.write("the value of a number : " + num);
document.write("the value of a ++num : " + ++num);
document.write("now the value of a number : " + num);
document.write("the value of a num++ : " + num++);
document.write("now the value of a number : " + num);
document.write("the value of a --num : " + --num);
document.write("now the value of a number : " + num);
document.write("the value of a num-- : " + num--);
document.write("now the value of a number : " + num);
// 2.
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;
// 3.
var usrname = prompt("enter the name of user");
alert("Welcome " + usrname);
// 5.
num = prompt("enter a number");
if(num == "") num = 5;
for(var i=0; i<10; i++ ){
    document.write(num + " x " + i + " = " + num*i);
}
// 6.
var subject1 = prompt("enter subject1 name");
var subject2 = prompt("enter subject2 name");
var subject3 = prompt("enter subject3 name");
var totalMarksPerSubject = 100;
var ObtMarks1 = prompt("enter subject1 marks")
var ObtMarks2 = prompt("enter subject2 marks")
var ObtMarks3 = prompt("enter subject3 marks")
totalMarks = ObtMarks1 + ObtMarks2 + ObtMarks3;
percentage = (totalMarks/(totalMarks*3)) * 100;
document.write(percentage);

// Chapter 9-11

// 1.
var city = prompt("enter city name");
if(city == 'karachi'){
    alert('welcome to karachi');
}
// 2.
var gender = prompt("enter your gender ");
if(gender == "male") alert("Good morning sir");
if(gender == "female") alert("Good morning ma'am");
// 3.
var color = prompt("enter traffic signal color");
if(color == "red") alert("Must Stop");
if(color == "yellow") alert("Ready to move");
if(color == "green") alert("Move now");
// 4.
var fuel = prompt("enter remaing fuel in liters");
if(fuel < 0.25) alert("Please refill the fuel in your car");
// 5.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// message would be displayed
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// // message would not be displayed
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
} 
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
// condition 2 and 4 are true
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// message would be displayed
if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
// true would be displayed
if("car" < "cat"){
    alert("car is smaller than cat");
    }
// message would be displayed
// 6.
document.write("Marks sheet")
ObtMarks1 = prompt("enter subject1 marks")
ObtMarks2 = prompt("enter subject2 marks")
ObtMarks3 = prompt("enter subject3 marks")
totalMarks = ObtMarks1 + ObtMarks2 + ObtMarks3;
percentage = (totalMarks/(totalMarks*3)) * 100;
document.write("total Marks : " + 300);
document.write("Marks Obtained : " + totalMarks);
document.write("Percentage : " + percentage + "%");
var grade,remarks;
if(percentage >= 80) {grade = "A-one"; remarks = "Excellent";}
else if(percentage >= 70) {grade = "A"; remarks = "Good";}
else if(percentage >= 60) {grade = "B"; remarks = "You need to improve" ;}
else if(percentage < 60) {grade = "Fail"; remarks = "Sorry"; }
document.write("Grade : " + grade);
document.write("Remarks : " + remarks);
// 7.
var secret_number = 5;
var guess = prompt("guess the secret number");
if (secret_number = guess){ alert("bingo"); }
else if(guess = secret_number+1 ){alert("close enough");}
// 8.
num = prompt("enter a number");
if(num%3 == 0) alert("the number is divisible by 3");
// 9.
num = prompt("enter a number ");
if(num%2 == 0) alert("even number");
else alert("odd number");
// 10.
var temperature = prompt("enter temperature");
if(temperature > 40) alert("it's too hot outside");
else if(temperature > 30) alert("The weather today is Normal");
else if(temperature > 20) alert("Today's weather is cool");
else if(temperature > 10) alert("OMG! today's weather is so cool.");
// 11.
var num1 = prompt("first number");
var num2 = prompt("enter second number");
var operation = prompt ("enter operation +, -, *, /, %");
if(operation = '+'){alert(num1+num2);}
else if(operation = '-'){alert(num1-num2);}
else if(operation = '*'){alert(num1*num2);}
else if(operation = '/'){alert(num1/num2);}
else if(operation = '%'){alert(num1 % num2);}

// Chapter 12-13
// 1.
var ip = prompt("enter a character");
if(ip >= 65 && ip <= 90) alert("Uppercase.");
else if(ip >= 97 && ip <= 122) alert("Uppercase.");
else if(ip >=48 && ip<= 57 ) alert("number");
// 2.
num1 = prompt("enter first number");
num2 = prompt("enter 2nd number")
if(num1>num2)alert("first number is greater");
if(num1<num2)alert("first number is lesser");
if(num1=num2)alert("first number is = second number");
// 3.
num = prompt("enter a number ");
if(num>0)alert("positive number");
if(num<0)alert("negative number");
if(num==0)alert("zero");
// 4.
 ip = prompt("enter a character");
if(ip == 97 || ip == 101 || ip == 105 || ip == 111 || ip == 117 )alert("vowel");
else alert("consonent");
// 5.
var password = "abcdef";
result = prompt("enter password");
if(result == "") prompt("Please enter your password");
if(result == password) alert("correct");
else alert("incorrect");
// 6.
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}
// 7.
var time = prompt("enter time");
var meridian;
if( time > 0 && time <=1200){
    meridian = "am";
    time = parseInt(time/100) + ":" + time%100 + meridian;
}else if(time > 1200 && time <=2400){
    meridian = "pm"
    time = parseInt(time/100 - 12) + ":" + time%100 + meridian;
}

// chapter 14-16
// 1.
var students = [];
// 2.

// 3.
var strings = ['hello' , 'world'];
// 4.
var nums = [1,2,3];
// 5.
var bools = [true,false];
// 6.
var mixed = [23, 'my variable' , false];
// 7.
var qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
document.write('Qualifications';
qualifications.forEach(qualification => {
    document.write(qualification);
});
// 8.
var marks; 
students = ['wardha','kashif','ahmed'];
marks = [320,230,480];
var i=0;
students.forEach(student => {
    document.write("Score of " + student + " is " + marks[i] + ". Percentage :" + (marks[i]/500)*100 + "%");
    i++;
});
// 9.
var colors = ['red','yellow','blue','black','brown'];
document.write(colors);
ip = prompt("what do you want to add at the beginning");
colors.unshift(ip);
ip = prompt("what do you want to add at the end");
color.pop(ip);
ip = prompt("what do you want to add at the beginning");
colors.unshift(ip);
ip = prompt("what do you want to add at the beginning");
colors.unshift(ip);
colors.shift();
colors.pop();
document.write(colors);
var index = prompt("enter the index where you want to insert ");
ip = prompt("enter a color");
colors.splice(index, ip);
index = prompt("enter the index where you want to delete ");
colors.pop(index);
// 10.
document.write("marks of student " + marks);
document.write("sorted marks of student " + marks.sort());
// 11.
var cities = ['karachi','lahore' , 'islamabad', 'quetta', 'dadu' ];
document.write(cities.slice(1,3));
// 12.
var arr = ['This' ,  'is' ,  'my' ,  'cat'];
arr.join(' ');
// 13.
arr.push('keyboard','mouse','printer','monitor');
document.write(arr.shift());
document.write(arr.shift());
document.write(arr.shift());
document.write(arr.shift());
// 14.
arr.push('keyboard','mouse','printer','monitor');
document.write(arr.pop());
document.write(arr.pop());
document.write(arr.pop());
document.write(arr.pop());
// 15.
arr['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
document.write("<select><option>"+arr[0]+"</option><option>"+arr[1]+"</option><option>"+arr[2]+"</option><option>"+arr[0]+"</option><option>"+arr[3]+"</option><option>"+arr[4]+"</option><option>"+arr[5]+"</option></select>")


// chapter 17-20
// 1.
var myarr = [[]];
// 2.
myarr = [ 
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
 ];
// 3.
for(var i =1; i<=10 ; i++){
    document.write(i);
}
// 4.
num = prompt("entter a number : ");
num2 = prompt("enter length of table : ")
for(var i =1; i<=num2 ; i++){
    document.write(num + " x " + i + " = " + num*i );
}
// 5.
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
for( i = 0; i<4; i++){
    document.write(fruits[i]);
}
for( i = 0; i<4; i++){
    document.write("Element at index " + i + " is " + fruits[i]);
}
// 6.
for( i = 1; i<=15; i++){
    document.write(i);
}
for( i = 10; i>0; i--){
    document.write(i);
}
for( i = 0; i<=20; i++){
    if(i%2 == 0){
        document.write(i);
    }
}
for( i = 0; i<=20; i++){
    if(i%2 != 0){
        document.write(i);
    }
}
for( i = 1; i<=20; i++){
    if(i%2 == 0){
        document.write(i);
    }
}
// 7.
arr = ["cake", "apple pie", "cookie", "chips", "patties"];
ip = prompt("enter bakery item");
for(i = 0 ; i<5 ; i++){
    if(arr[i] == ip){
        alert("item present in bakery");
        break;
    }
}
if(i == 5){
    alert("sorry item not present");
}
// 8.
var A = [24, 53, 78, 91, 12];
num = A[0];
for( i = 0 ; i<5 ; i++){
    if(A[i] > num){
        num = A[i];
    }
}  
document.write("largest number is : " + num);  
// 9.
 A = [24, 53, 78, 91, 12];
num = A[0];
for( i = 0 ; i<5 ; i++){
    if(A[i] < num){
        num = A[i];
    }
}  
document.write("smallest number is : " + num); 
// 10.
for(i = 5; i <=100; i = i + 5){
    document.write(i);
}




// Chapter 1

// 1.
alert("Welcome");
// 2.
alert("please enter a valid password");
// 3.
alert("welcome to JS Land...\nHappy Coding!")
// 4.
alert("welcome to JS Land...");
alert("Happy Coding");

// Chapter 2

// 1.
var username;
// 2.
var myName = "Wardha Kashif Ahmed";
// 3.
var message;
message = "Hello World";
alert(message);
// 4.
var name = "Jhon Doe";
var age = "16 Years old";
var subject = "Certified Mobile App Development";
// 5.
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);
// 6.
var email = "wardhakashif00@gmail.com";
alert("My email address is "+email);
// 7.
var book = "A smarter way to learn Javascript";
alert(book);
// 8.
document.write("Yes I can write HTML throught Javascript");
// 9.
alert("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");

// Chapter 3

// 1.
var age;
age = 20;
alert("I am "+age+" years old");
// 2.
var visits = 1;
alert("You have visiy=ted this website "+visits+" times");
// 3.
var birthYear = 2000;
document.write(birthYear);
// 4.
var visitorName = "Jhon Doe";
var productTitle = "T shirt";
var Quantity = 5;
document.write(visitorName+" ordered " + Quantity + productTitle +" on XYZ clothing store ")

// Chapter 4

// 1.
var a,b,c;
// 2.
var name , name1 , name_ , name_mine , name123__;
// var 1name , Iname* , namee-xyz , name{mine ,12_dkf; //illegal variables names

// Chapter 5
// 1.
document.write("sum of 3 and 5 is " + (3+8));
// 2.
document.write("difference of 3 and 5 is " + (3-8));
document.write("multiplication of 3 and 5 is " + (3*8));
document.write("division of 3 and 5 is " + (3/8));
// 3.
var myvar;
console.log("Value after variable declaration is:" + myvar )
myvar = 3;
console.log("Initial value of variable is : "+ myvar);
myvar++;
console.log("value after increment is : "+ myvar);
myvar+7;
console.log("value after addition is : "+ myvar);
myvar--;
console.log("value after decrement is : "+ myvar);
console.log("the output is : "+ myvar%3)
// 4.
var cost = 500;
document.write("Total cost to buy tickets to a movie is " + cost * 5 + "PKR");
// 5.
document.write("Table of 4 \n 4x1=4\n4x2=8\n4x3=12\n4x4=16\n4x5=20\n4x6=24\n4x7=28\n4x8=32\n4x9=36\n4x10=40\n");
// 6.
var cel = 25;
document.write((cel * (9/5)) +5);
var fahrenheit = 70;
document.write((fahrenheit-32)*(5/9));
// 7.
var price1 = 1000;
var price2 = 120;
var quantity1 = 2;
var quantity2 = 7;
var shippingcharges = 200;
document.write("total cost of your order is " + (price1*quantity1)+(price2*quantity2)+shippingcharges);
// 8.
var totalMarks = 550;
var marksObt = 480;
var percentage = (480/550) * 100;
document.write("Percentage:" + percentage );
// 9.
document.write("Total currency in PKR : " + ((10*104.8) + (25*28) ));
// 10.
var num = 10;
num = ((num + 5)*10)/2
// 11.
var CurrentYear = 2020;
var birthYear = 2000;
document.write("Your age is " + (CurrentYear-birthYear));
// 12.
var radius = 20;
document.write("circumference is : " + (2* Math.PI*radius));
document.write("area of circle is : " + (Math.PI*Math.pow(radius,2)));
// 13.
var snack= "chocolate chip";
var currentAge = 20;
var EstimatedAge = 40;
var amount = 4;
document.write("you will need " + (EstimatedAge-currentAge)*4 + snack + "to last until you ripe old age of " + EstimatedAge );

// Chapter 6-9

// 1.
var num = prompt("Enter a number")
document.write("the value of a number : " + num);
document.write("the value of a ++num : " + ++num);
document.write("now the value of a number : " + num);
document.write("the value of a num++ : " + num++);
document.write("now the value of a number : " + num);
document.write("the value of a --num : " + --num);
document.write("now the value of a number : " + num);
document.write("the value of a num-- : " + num--);
document.write("now the value of a number : " + num);
// 2.
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;
// 3.
var usrname = prompt("enter the name of user");
alert("Welcome " + usrname);
// 5.
num = prompt("enter a number");
if(num == "") num = 5;
for(var i=0; i<10; i++ ){
    document.write(num + " x " + i + " = " + num*i);
}
// 6.
var subject1 = prompt("enter subject1 name");
var subject2 = prompt("enter subject2 name");
var subject3 = prompt("enter subject3 name");
var totalMarksPerSubject = 100;
var ObtMarks1 = prompt("enter subject1 marks")
var ObtMarks2 = prompt("enter subject2 marks")
var ObtMarks3 = prompt("enter subject3 marks")
totalMarks = ObtMarks1 + ObtMarks2 + ObtMarks3;
percentage = (totalMarks/(totalMarks*3)) * 100;
document.write(percentage);

// Chapter 9-11

// 1.
var city = prompt("enter city name");
if(city == 'karachi'){
    alert('welcome to karachi');
}
// 2.
var gender = prompt("enter your gender ");
if(gender == "male") alert("Good morning sir");
if(gender == "female") alert("Good morning ma'am");
// 3.
var color = prompt("enter traffic signal color");
if(color == "red") alert("Must Stop");
if(color == "yellow") alert("Ready to move");
if(color == "green") alert("Move now");
// 4.
var fuel = prompt("enter remaing fuel in liters");
if(fuel < 0.25) alert("Please refill the fuel in your car");
// 5.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// message would be displayed
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// // message would not be displayed
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
} 
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
// condition 2 and 4 are true
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// message would be displayed
if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
// true would be displayed
if("car" < "cat"){
    alert("car is smaller than cat");
    }
// message would be displayed
// 6.
document.write("Marks sheet")
ObtMarks1 = prompt("enter subject1 marks")
ObtMarks2 = prompt("enter subject2 marks")
ObtMarks3 = prompt("enter subject3 marks")
totalMarks = ObtMarks1 + ObtMarks2 + ObtMarks3;
percentage = (totalMarks/(totalMarks*3)) * 100;
document.write("total Marks : " + 300);
document.write("Marks Obtained : " + totalMarks);
document.write("Percentage : " + percentage + "%");
var grade,remarks;
if(percentage >= 80) {grade = "A-one"; remarks = "Excellent";}
else if(percentage >= 70) {grade = "A"; remarks = "Good";}
else if(percentage >= 60) {grade = "B"; remarks = "You need to improve" ;}
else if(percentage < 60) {grade = "Fail"; remarks = "Sorry"; }
document.write("Grade : " + grade);
document.write("Remarks : " + remarks);
// 7.
var secret_number = 5;
var guess = prompt("guess the secret number");
if (secret_number = guess){ alert("bingo"); }
else if(guess = secret_number+1 ){alert("close enough");}
// 8.
num = prompt("enter a number");
if(num%3 == 0) alert("the number is divisible by 3");
// 9.
num = prompt("enter a number ");
if(num%2 == 0) alert("even number");
else alert("odd number");
// 10.
var temperature = prompt("enter temperature");
if(temperature > 40) alert("it's too hot outside");
else if(temperature > 30) alert("The weather today is Normal");
else if(temperature > 20) alert("Today's weather is cool");
else if(temperature > 10) alert("OMG! today's weather is so cool.");
// 11.
var num1 = prompt("first number");
var num2 = prompt("enter second number");
var operation = prompt ("enter operation +, -, *, /, %");
if(operation = '+'){alert(num1+num2);}
else if(operation = '-'){alert(num1-num2);}
else if(operation = '*'){alert(num1*num2);}
else if(operation = '/'){alert(num1/num2);}
else if(operation = '%'){alert(num1 % num2);}

// Chapter 12-13
// 1.
var ip = prompt("enter a character");
if(ip >= 65 && ip <= 90) alert("Uppercase.");
else if(ip >= 97 && ip <= 122) alert("Uppercase.");
else if(ip >=48 && ip<= 57 ) alert("number");
// 2.
num1 = prompt("enter first number");
num2 = prompt("enter 2nd number")
if(num1>num2)alert("first number is greater");
if(num1<num2)alert("first number is lesser");
if(num1=num2)alert("first number is = second number");
// 3.
num = prompt("enter a number ");
if(num>0)alert("positive number");
if(num<0)alert("negative number");
if(num==0)alert("zero");
// 4.
 ip = prompt("enter a character");
if(ip == 97 || ip == 101 || ip == 105 || ip == 111 || ip == 117 )alert("vowel");
else alert("consonent");
// 5.
var password = "abcdef";
result = prompt("enter password");
if(result == "") prompt("Please enter your password");
if(result == password) alert("correct");
else alert("incorrect");
// 6.
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}
// 7.
var time = prompt("enter time");
var meridian;
if( time > 0 && time <=1200){
    meridian = "am";
    time = parseInt(time/100) + ":" + time%100 + meridian;
}else if(time > 1200 && time <=2400){
    meridian = "pm"
    time = parseInt(time/100 - 12) + ":" + time%100 + meridian;
}

// chapter 14-16
// 1.
var students = [];
// 2.

// 3.
var strings = ['hello' , 'world'];
// 4.
var nums = [1,2,3];
// 5.
var bools = [true,false];
// 6.
var mixed = [23, 'my variable' , false];
// 7.
var qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
document.write('Qualifications';
qualifications.forEach(qualification => {
    document.write(qualification);
});
// 8.
var marks; 
students = ['wardha','kashif','ahmed'];
marks = [320,230,480];
var i=0;
students.forEach(student => {
    document.write("Score of " + student + " is " + marks[i] + ". Percentage :" + (marks[i]/500)*100 + "%");
    i++;
});
// 9.
var colors = ['red','yellow','blue','black','brown'];
document.write(colors);
ip = prompt("what do you want to add at the beginning");
colors.unshift(ip);
ip = prompt("what do you want to add at the end");
color.pop(ip);
ip = prompt("what do you want to add at the beginning");
colors.unshift(ip);
ip = prompt("what do you want to add at the beginning");
colors.unshift(ip);
colors.shift();
colors.pop();
document.write(colors);
var index = prompt("enter the index where you want to insert ");
ip = prompt("enter a color");
colors.splice(index, ip);
index = prompt("enter the index where you want to delete ");
colors.pop(index);
// 10.
document.write("marks of student " + marks);
document.write("sorted marks of student " + marks.sort());
// 11.
var cities = ['karachi','lahore' , 'islamabad', 'quetta', 'dadu' ];
document.write(cities.slice(1,3));
// 12.
var arr = ['This' ,  'is' ,  'my' ,  'cat'];
arr.join(' ');
// 13.
arr.push('keyboard','mouse','printer','monitor');
document.write(arr.shift());
document.write(arr.shift());
document.write(arr.shift());
document.write(arr.shift());
// 14.
arr.push('keyboard','mouse','printer','monitor');
document.write(arr.pop());
document.write(arr.pop());
document.write(arr.pop());
document.write(arr.pop());
// 15.
arr['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
document.write("<select><option>"+arr[0]+"</option><option>"+arr[1]+"</option><option>"+arr[2]+"</option><option>"+arr[0]+"</option><option>"+arr[3]+"</option><option>"+arr[4]+"</option><option>"+arr[5]+"</option></select>")


// chapter 17-20
// 1.
var myarr = [[]];
// 2.
myarr = [ 
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
 ];
// 3.
for(var i =1; i<=10 ; i++){
    document.write(i);
}
// 4.
num = prompt("entter a number : ");
num2 = prompt("enter length of table : ")
for(var i =1; i<=num2 ; i++){
    document.write(num + " x " + i + " = " + num*i );
}
// 5.
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
for( i = 0; i<4; i++){
    document.write(fruits[i]);
}
for( i = 0; i<4; i++){
    document.write("Element at index " + i + " is " + fruits[i]);
}
// 6.
for( i = 1; i<=15; i++){
    document.write(i);
}
for( i = 10; i>0; i--){
    document.write(i);
}
for( i = 0; i<=20; i++){
    if(i%2 == 0){
        document.write(i);
    }
}
for( i = 0; i<=20; i++){
    if(i%2 != 0){
        document.write(i);
    }
}
for( i = 1; i<=20; i++){
    if(i%2 == 0){
        document.write(i);
    }
}
// 7.
arr = ["cake", "apple pie", "cookie", "chips", "patties"];
ip = prompt("enter bakery item");
for(i = 0 ; i<5 ; i++){
    if(arr[i] == ip){
        alert("item present in bakery");
        break;
    }
}
if(i == 5){
    alert("sorry item not present");
}
// 8.
var A = [24, 53, 78, 91, 12];
num = A[0];
for( i = 0 ; i<5 ; i++){
    if(A[i] > num){
        num = A[i];
    }
}  
document.write("largest number is : " + num);  
// 9.
 A = [24, 53, 78, 91, 12];
num = A[0];
for( i = 0 ; i<5 ; i++){
    if(A[i] < num){
        num = A[i];
    }
}  
document.write("smallest number is : " + num); 
// 10.
for(i = 5; i <=100; i = i + 5){
    document.write(i);
}




