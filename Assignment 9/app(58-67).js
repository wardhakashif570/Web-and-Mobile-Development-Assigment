            //////Question#1//////
//ans i
var main=document.getElementById("main-content");

//ansii
var p=document.getElementById("main-content");
console.log(p.childNodes);

//ansiii
var ren=document.getElementsByClassName("render").innerHTML;
console.log(ren);

//ansiv
var data = document.getElementById("first-name");
data.value = 'Wardha';

//ansv
var data = document.getElementById("last-name");
data.value = 'Kashif';
var data = document.getElementById("email");
data.value = 'warda@.com';


/////Question#2//////
//ansi
var formType=document.getElementById("form-content").nodeType;
console.log(formType);

//ansii
var noTyp= document.getElementById("last-name").nodeType;
var noCh=document.getElementById("last-name").childNodes;
var noChTy=noCh.nodeType;
console.log(noChTy);

//ansiii

console.log(document.getElementById("last-name").childNodes);

//ansiv
console.log(document.getElementById("main-content").firstChild);
console.log(document.getElementById("main-content").lastChild);

//ansv

console.log(document.getElementById("last-name").nextSibling);
console.log(document.getElementById("last-name").previousSibling);

//ansvi
console.log(document.getElementById("email").parentNode);
console.log(document.getElementById("email").nodeType);