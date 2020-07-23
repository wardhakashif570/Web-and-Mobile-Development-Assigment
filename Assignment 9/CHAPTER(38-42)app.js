//1
function  cal(a,b)
{var val=a;
 for(i=1;i<=b;i++)
{
val = val * a;    
}
return val;
}
var d= cal(2,4);
document.write(d);

//2
var a=Number(prompt("Enter a year"));
if(a % 4===0)
{
document.write("it is a leap year");
}  
else{
    document.write("It is not a leap year");
}
//3
function Area(a,b,c)
  {
   var area;
   area= (cal(a,b,c) * (cal(a,b,c) - a) * (cal(a,b,c) - b) * (cal(a,b,c) -c));
    document.write("area is " + area);  
  }
function cal(a,b,c)
{
 var S= ((a + b + c)/2);
 return S;
}

cal(2,3,4);
Area(2,3,4);
//4
var a=Number(prompt("Enter a marks received"));
function average(a)
{
    var b=( a / 3);
    document.write("The average is " + b + "<br>");
}
function percentage(a)
{
var c= (a / 300) * 100;
document.write("The percentage is " + c + "%");
}
average(a);
percentage(a);
//5
function Cal()
{
var a="warda";
for(i=0;i<a.length;i++)
{
if(a[i]=="a")
{
    document.write("the index of a is " + i);
    break;
}
}
}
Cal();
//6
function removeVowel(text)
    {
    var result = "";
   for(i=0; i < text.length ;i++)
   {
      var c=text[i];
      if("aeiou",match(c.LowerCase())== null)
      {
          result += c;
      }   
    return result;
    }
    }
var a=removeVowel("my name is warda"); 
document.write(a); 
//7

var a = prompt("Enter a string");
       var found = 0;
        function isvowel(ch) {

            switch (ch) {
                case 'A':
                case 'a':
                case 'E':
                case 'e':
                case 'I':
                case 'i':
                case 'O':
                case 'o':
                case 'U':
                case 'u':
                    return true;
                default:
                    return false;
            }
        }
       
        for (i = 0; i<a.length; i++) {
            if (isvowel(a[i])) {

                found ++;
            }
            else {
                found = 0;
            }
            if (found == 2) {
                document.write(a[i - 1], a[i] + "<br>");
                //found = 0;
                
            }
        }

//8

var a=Number(prompt("Enter the distance between two cities"));
     function meter(a)
     {
      document.write("In meter is " + (a * 1000) + "<br>" );
     }
     function feet(a)
     {
        document.write("In feet is " + (a * 3280.8) + "<br>" );

     }
     function inches(a)
     {
        document.write("In inches is " + (a * 39370.178740) + "<br>" );
      
     }
     function centimeters(a)
     {
        document.write("In centimeter is " + (a * 100000) + "<br>" );
      
     }
meter(a);
feet(a);
inches(a);
centimeters(a);
//9
function salary(b)
  {
  var a=Number(prompt("enter a hours of employees "));
  if(a > 40)
  {
   var c=(a-40) * 12;
   document.write("the  total salry is " + (c + b));
  }
  else
  {
   document.write("no overtime paid");
  }

  }
  salary(12000);
//10
var a=parseInt(prompt("enter the amount"));
  document.write("the total 100 notes is " + (a / 100) + "<br>");   
  document.write("the total 50 notes is " + (a % 100)/50  + "<br>");   
  document.write("the total 10 notes is " + ((a % 100) % 50)/10  + "<br>");   
  document.write("the amount still is " + (a % 10)); 