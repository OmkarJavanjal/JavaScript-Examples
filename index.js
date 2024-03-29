/*This course is designed and developed by Omkar Javanjal.
About Me:
  I'm Javascript Enthusiastic Developer and working with many Javascript libraries and frameworks like React.js, Angular,RxJS, node.js, nest.js, etc and many middlewares like Redux, Saga, NgRx, Selectors, etc.

  Please follow me at github: https://github.com/OmkarJavanjal
  You will find many interesting topics, new technologis and examples.
 */

//Refresh right side browser window Page if any error occurs as Stackblitz is not able to handle prototypes perfectly. 


// Import stylesheets
import './style.css';
// comment in JS
/*multiline
JS 
comment*/
//Variable in JS

//getElementById
var a= 12;
const appDiv = document.getElementById('demo1');
appDiv.innerHTML = `<h2>${a}</h2>`;

//getElementsByTagName
var x = document.getElementsByTagName("p");
x[0].innerText = 13;
x[0].style.background = "green";

//getElementsByClassName
var x = document.getElementsByClassName("intro")[0].innerText = 'HI THERE';

var x = document.querySelectorAll("p.intro1");
x[0].innerText = 'First intro1 selected'

//DataTypes and Arrays
//Variables
var b;//Variable Declaration
const appDiv = document.getElementById('demo3');
appDiv.innerHTML = `<h2>${b}</h2>`;

var b; //Vaariable Declaration
b = 14; //Vaariable defination
var c = 15; //Vaariable Declaration and defination
const appDiv = document.getElementById('demo4');
appDiv.innerHTML = `<h2>${b}</h2>`;

//Data DataTypes

//There are 7 basic data types in JavaScript.

/*number for numbers of any kind: integer or floating-point.
string for strings. A string may have one or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
object for more complex data structures.
symbol for unique identifiers.*/

var length = 16;                               // Number
var lastName = "Johnson";                      // String
var loggedIn = true;                           //boolean
var x = {firstName:"John", lastName:"Doe"};    // Object
var cars = ["Saab", "Volvo", "BMW"];           // Object
var y;                                         //undefined
var z = null;                                  //object
var w = function myFunc(){}                    //object function
var v = Symbol("id");                          //symbol
console.log('typeof : ', typeof length, typeof lastName, typeof loggedIn, typeof x, typeof cars, typeof y, typeof z, typeof w, typeof v);

//Arrays in JavaScript
/*An array is a special variable, which can hold more than one value at a time.*/ 
var car = new Array(100); //Creates Empty Array of size 100
var car1 = [100];  //does not create empty array of size 100
var cars = new Array("Saab", "Volvo", "BMW"); //Another way to create empty array
var cars1 = ["Saab", "Volvo", "BMW"];
var mixedArr = ['ACC', 2, {id:'1'}, function(){}, ()=>{}, true, [12,'a']];
var argArray = ["1", '']
//Accessing array values
console.log('first val: ', mixedArr[0], 'second val: ', mixedArr[1]);

var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
var x = person.length;     // person.length will return 0
var y = person[0];         // person[0] will return undefined
var z = person['age'];

/*In JavaScript, arrays use numbered indexes.  
In JavaScript, objects use named indexes.*/

//basic Array Methods
var arr = [];
arr.push('ACC');//Add element at end //MUTABLE
arr.push('HF');
console.log('arr1: ', arr);
arr.pop();  //removes last element //MUTABLE
console.log('arr2: ', arr);
arr.push('HF');
arr.unshift('IBM','INF');   //adds values at first position //MUTABLE
console.log('arr3: ', arr);
arr.shift();    //removes first element //MUTABLE
console.log('arr4: ', arr);
arr.sort();   //sorts arr alphabetically bydefault //mutable
console.log('arr5: ', arr);
var slc = arr.slice(1,2); //slices array from index to upto index(dont include last index)   //IMMUTABLE
console.log('arr6: ', slc);
console.log('arr7: ', arr);

//For more info, visit: https://www.w3schools.com/js/js_arrays.asp
//For more JS array methods, visit: https://www.w3schools.com/jsref/jsref_obj_array.asp


//Control Structres in JavaScript
//if(){}
//if(){} else {}
//if(){} else if(){}
//switch(..){case..:.. }

var result = 1;
if(result === 1) {
  console.log('result is 1');
}

// simple if else
if(result === 2) {
  console.log('result is 2');
} else {
  console.log('result is not 2');
}

//nested if..else..
if(result === 2) {
  console.log('result is 2');
} else if(result === 1) {
  console.log('result is 1');
}

//nested if..else..
if(result === 2) {
  console.log('result is 2');
} else if(result === 1) {
  console.log('result is 1');
} else {
  console.log('result is neither 1 nor 2');
}

//switch case without break statement
switch(result){
  case 1: console.log('switch result is 1');
  case 2: console.log(' switch result is 2');
  default: console.log('switch result');
}

//switch case with break statement
switch(result){
  case 1: console.log('switch result is 1'); break;
  case 2: console.log(' switch result is 1'); break;
  default: console.log('switch result');
}

//Loops
/*JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true*/

//for more info, visit: https://www.w3schools.com/js/js_loop_for.asp

var arr2 = ['India', 'USA', 'Russia', 'France', 'Germany'];
//for loop
// for (statement 1 optional; statement 2 optional; statement 3 optional) {
//   // code block to be executed
//if statement 2 is ommited, you need to add break statement
// }
var len = arr2.length; //best practice is to calculate the length outside the loop
var arrCopy = [];
for(var i=0; i< len; i++) {
  arrCopy = [...arrCopy, arr2[i]]; //copying aaray in immutable way with spread operator
}
console.log('copied arr: ', arrCopy);


//short way to write, define and intialise
for(var i=0, len2= arr2.length, arrCopy2 = []; i< len2; i++) {
  arrCopy2 = [...arrCopy, arr2[i]]; //copying aaray in immutable way with spread operator
}
console.log('copied arr: ', arrCopy2);


//The For/In Loop
//The JavaScript for/in statement loops through the properties of an object:
var obj = {fname:"John", lname:"Doe", age:25};
var text = "";
for (var key in obj) { 
  text += obj[key];
}
console.log('for in loop text: ', text )


//The For/Of Loop
/*The JavaScript for/of statement loops through the values of an iterable objects

for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.

The for/of loop has the following syntax:

for (variable of iterable) {
  // code block to be executed
}
*/

//Does not work for object as object is not iterable 
var obj = {fname:"John", lname:"Doe", age:25};
var text = "";
for (var val of obj) { 
  text += val;
}
console.log('obj is not a iterable data structure text2: ', text );

//Does work for iterable Data Structures
var cars = ['BMW', 'Volvo', 'Mini'];
var text = "";
for (var val of cars) {
  text += val;
}
console.log('works for iterable data structure text3: ', text );

var txt = 'JavaScript';
var text = "";
for (var val of txt) {
  text += val;
}
console.log('even works for string text4: ', text );

//The While Loop
/*The while loop loops through a block of code as long as a specified condition is true.

while (condition) {
  // code block to be executed
}
*/
var text = '';
var i=8;
while (i < 10) {
  text += "The number is " + i;
  i++;
}
console.log('while loop text: ', text );

//The Do/While Loop
/* The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

do {
  // code block to be executed
}
while (condition);
*/
var text = '';
var i=10;
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);
console.log('do while loop text: ', text );


//ES6 forEach loops
var arr2 = ['India', 'USA', 'Russia', 'France', 'Germany'];
var arrCopy2 = [];

arr2.forEach((item,index,arr) => {
 arrCopy2 = [...arrCopy2,item];
});

console.log('arrcopy2:', arrCopy2);


//JS functions

//Regular Functions
/*A JavaScript function is a block of code designed to perform a particular task.*/
function myFunction5(a, b) {
  return a * b;             // Function returns the product of a and b
}

var x5 = myFunction5(4, 3);   // Function is called, return value will end up in x
console.log('val of x: ', x5);

//number of input parameters unknown
function myFunction2(...a) {
  console.log('arguments: ' + arguments.length);
  return a[0] * (a[1] ? a[1] : 1);             // Function returns the product of a and b
}

var x = myFunction2(4,3);   // Function is called, return value will end up in x
console.log('val of x: ', x);


//Function returning function
function sum(x){
  return function(y){
    return function(z){
      return x+y+z;
    }
  }
}
console.log('Sum: ' + sum(2)(3)(4));

//function returning Object and function returning object returning function
function sum2(x){
  return function(y){
    return{
      prod: x*y,
      sum: function(z){
        return x+y+z;
      } 
    }
  }
}
console.log('Sum2: ' , sum2(2)(3).prod, sum2(2)(3).sum(4));

//function returning Array Object
function sum3(x){
  return function(y){
    return[x*y, function(z){return x+y+z;}]
    }
}
console.log('Sum3: ' , sum3(2)(3)[0], sum3(2)(3)[1](4));

//Anonymous Functions
//Function be stored in variable
var func = function(){
  console.log('Called Func');
}
func();

//difference between anonymous function and regular one is anonymous functions are compiled during runtime , so they can not be hoisted, but regular function compiled during parse time so they gets hoisted.
//Example

func2();
function func2(){ //Regular functions can be called before defining
  console.log('Called Func2');
}

//uncomment for testing
// func3();
// var func3 = function(){ //Anonymous function cant be called before defining
//   console.log('Called Func3');
// }

//IIFE 
(function func4(){ //Regular functions can be called before defining
  console.log('Called Func4');
})();

//ES6 Arrow functions
var arrowFunc = (x)=>{
  console.log('Arrow Function Called: ' + x)
}
arrowFunc(100);


//For more info, visit: https://www.w3schools.com/js/js_functions.asp


//Modules
//When application goes bigger we split our application according to feature in smaller folders called modules.

//For more info, visit: https://javascript.info/modules-intro


//OO JavaScript (Class, Objects, Inheritance)

//JS Objects
//Different ways to create JS Objects
//object literal
var obj = {
    property1 : 'A',
    property2 : 1
    };
//or
var obj1 = {};
obj1.prop1 = 'A';
obj1.prop1 = 'B';

//with Object keyword
var emp=new Object();  
emp.id=101;  
emp.name="Ravi Malik";  
emp.salary=50000;   


//By using an Object constructor
function emp1(id,name,salary){  
this.id=id;  
this.name=name;  
this.salary=salary;  
}  
var e = new emp1(103,"Vimal Jaiswal",30000);

//Accessing properties
var obj3 = {
    property1 : 'ABC',
    property2 : 1
    };
console.log('prop1: ', obj3.property1);
//or
console.log('prop1: ', obj3['property1']);  //private properties can be accessed with this ways
//Copying/Assigning Object
var obj4 = obj3;  //Passed by reference
var obj5 = Object.create(obj3);
//IMP: Remember that in JS objects are always passed by reference, so classes, objects, arrays, functions, etc are always passed by reference if you are assigning one obj to another

var obj6 = Object.assign({},obj3); //In this case shallow object properties does not get passed by reference but deep objects gets passed by reference

//Imp: Remember that literals like string, number, boolean(not object like new String('A')) are always gets passed by value

//JavaScript Object Methods
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log('Fullname: ', person.fullName());
/*
The this Keyword
In a function definition, this refers to the "owner" of the function.

In the example above, this is the person object that "owns" the fullName function.

In other words, this.firstName means the firstName property of this object.

It has different values depending on where it is used:

In a method, this refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.
https://www.w3schools.com/js/js_this.asp
*/

//JavaScript Accessors (Getters and Setters)
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "en",
  get lang() {
    return this.language;
  },
  set lang(lang) {
    this.language = lang;
  }
};

person.lang = "en";
var lang1 = person.lang;
console.log('lang: ', lang1);

//For more info about Objects, Visit:https://www.javatpoint.com/javascript-objects

//JavaScript Classes
//Declaring class  
class Employee  
  {  
//Initializing an object  
    constructor(id,name)  
    {  
      this.id=id;  
      this.name=name;  
    }  
//Declaring method  
    detail()  
    {  
      console.log('EmployeeDetails: ', this.id+" "+this.name);  
    }  
  }  
//passing object to a variable   
var e1=new Employee(101,"Martin Roy");  

e1.detail(); //calling method  //JS hoisting is not applicable to classes so they can not be invoked before defining


//example2
class CompanyName  
{  
  constructor()  
  {  
    this.company="Javatpoint";  
  }  
}  
class Employee extends CompanyName {  
  constructor(id,name) {  
   super();  
    this.id=id;  
    this.name=name;  
  }   
}     
var emp = new Employee(1,"John");  
console.log('Employee Inheritacnce: ', emp.company);
//for more info, visit: https://www.javatpoint.com/javascript-oops-classes



//JavaScript Prototype Object

//Use browser console. copy and paste this prototype in console and study

//constructor prototype
function Employee(firstName,lastName)  
{  
  this.firstName=firstName;  
  this.lastName=lastName;  
}  
  
Employee.prototype.fullName=function()  
  {  
    return this.firstName+" "+this.lastName;  
  }  
  
var employee11=new Employee("Martin","Roy"); 
console.log('Employee Prototype: ', employee11);

//object  prototype
/*Uncomment below part and test as I said initially stackblitz is not good to handle prototype properties. If you iuncomment it will give error, but if you reload right side browser window it will work. You can also copy paste it in chrome browser console and test. */
// var mainObj = {
//   prop1:'a'
// }
// mainObj.__proto__.prop2 = 'b';

// console.log('mainobj prototype: ', mainObj);
// console.log('mainobj prototype: ', mainObj.__proto__);

//JS static Keyword
class Test  
{  
  static display()  
  {  
    return "static method is invoked"  
  }  
}  
console.log('Static: ', Test.display()); 


//JavaScript Encapsulation
/*The JavaScript Encapsulation is a process of binding the data (i.e. variables) with the functions acting on that data. It allows us to control the data and validate it. To achieve an encapsulation in JavaScript: -

Use var keyword to make data members private.
Use setter methods to set the data and getter methods to get that data.
The encapsulation allows us to handle an object using the following properties:

Read/Write - Here, we use setter methods to write the data and getter methods read that data.

Read Only - In this case, we use getter methods only.

Write Only - In this case, we use setter methods only. 

https://www.javatpoint.com/javascript-oops-encapsulation
*/
class Student  
  {  
    constructor()  
    {  
       var name;  
       var marks;  
    }  
        getName()  
        {  
          return this.name;  
        }  
      setName(name)  
      {  
        this.name=name;  
      }  
        
      getMarks()  
      {  
        return this.marks;  
      }  
    setMarks(marks)  
    {  
      this.marks=marks;  
    }  
  
    }  
    var stud=new Student();  
     stud.setName("John");  
console.log('Get name: ', stud.getName());


//Javascript Inheritance
/*The JavaScript inheritance is a mechanism that allows us to create new classes on the basis of already existing classes. It provides flexibility to the child class to reuse the methods and variables of a parent class.

The JavaScript extends keyword is used to create a child class on the basis of a parent class. It facilitates child class to acquire all the properties and behavior of its parent class.

Points to remember
It maintains an IS-A relationship.
The extends keyword is used in class expressions or class declarations.
Using extends keyword, we can acquire all the properties and behavior of the inbuilt object as well as custom classes.
We can also use a prototype-based approach to achieve inheritance.
https://www.javatpoint.com/javascript-oops-inheritance
 */

class Bike  
{  
  constructor(company)  
  {  
    this.company=company;  
  }  
}  
class Vehicle extends Bike {  
  constructor(name,price,comp) {  
   super(comp);  
    this.name=name;  
    this.price=price;  
  }   
}  
var v = new Vehicle("Shine","70000", "Honda");  
console.log('Inheritance Example: ', v.name, v.company );

//prototype based inheritance
function A()  
{  
}  
A.prototype.display=function()  
{  
  return "A is invoked";  
}  
function B()  
{  
    
}  
  
B.prototype=Object.create(A.prototype);  
console.log(new B().display());

//JavaScript Polymorphism
/*The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms. It provides an ability to call the same method on different JavaScript objects. As JavaScript is not a type-safe language, we can pass any type of data members with the methods.
https://www.javatpoint.com/javascript-oops-polymorphism */
class C  
  {  
     display()  
    {  
      console.log("C is invoked");  
    }  
  }  
class D extends C  
  {  
    display()  //Function overriding
    {  
      console.log("B is invoked");  
    }  
    display(inp)  //Function overloading
    {  
      console.log("D is invoked");  
    }
  }  
  
  new D().display();

//same example with prototype-based approach
function E()  
{  
}  
E.prototype.display=function()  
{  
  return "E is invoked";  
}  
function F()  
{ }  
  
F.prototype=Object.create(E.prototype);  
console.log(new F().display());

//object based approach
var j = {
	name: function() {
		console.log('obj j is invoked');
	}
}
var k = {
	name: function() {
		console.log('obj k is invoked');
	}
}
k.__proto__ = j;
console.log(k.name());
console.log(k.__proto__.name());


//JavaScript Abstraction
/*An abstraction is a way of hiding the implementation details and showing only the functionality to the users. In other words, it ignores the irrelevant details and shows only the required one.
Points to remember
We cannot create an instance of Abstract Class.
It reduces the duplication of code.
https://www.javatpoint.com/javascript-oops-abstraction */

//Creating a constructor function  

//Test it on browser console, not working here
 function Vehicle()  
{  
    this.vehicleName="vehicleName";  
    throw new Error("You cannot create an instance of Abstract Class");  
}  
Vehicle.prototype.display=function()  
{  
    return "Vehicle is: " + this.vehicleName;  
}  
//Creating a constructor function  
function Bike(vehicleName)  
{  
    this.vehicleName=vehicleName;  
}  
//Creating object without using the function constructor  
Bike.prototype=Object.create(Vehicle.prototype);  
var bike=new Bike("Honda");  
console.log(bike.display());  

//Global/Local Scope
/*In JavaScript there are two types of scope:

Local scope
Global scope
JavaScript has function scope: Each function creates a new scope.

Scope determines the accessibility (visibility) of these variables.

Variables defined inside a function are not accessible (visible) from outside the function.
https://www.w3schools.com/js/js_scope.asp
 */


//Local/Function JavaScript variables

// code here can NOT use carName
//console.log('carname outside: ', carName6);
(function myFunction() {
  var carName6 = "Volvo";
  console.log('carname inside: ', carName6);
  // code here CAN use carName
})();

//Global JavaScript Variables
var carName = "Volvo1";
// code here can use carName
console.log('carname outside1: ', carName);
(function myFunction() {
  // code here can also use carName
  console.log('carname inside1: ', carName);
})();

//Scope determines the accessibility of variables, objects, and functions from different parts of the code.

//Automatically global
myFunction();
// code here can use carName
console.log('carname outside2: ', carName);
function myFunction() {
  carName = "Volvo2";
  console.log('carname inside2: ', carName);
}
//In "Strict Mode", undeclared variables are not automatically global.
/*Example:
"use strict";
myFunction();
function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}
 */
/*With JavaScript, the global scope is the complete JavaScript environment.
In HTML, the global scope is the window object. All global variables belong to the window object. */

//JS Let 
/*ES2015 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope variables (and constants) in JavaScript.

Before ES2015, JavaScript had only two types of scope: Global Scope and Function Scope. 
https://www.w3schools.com/js/js_let.asp
*/
//JavaScript Block Scope

{
  var x = 2;
}
// x CAN be used outside with var

{
  let x = 2;
}
// x can NOT be used outside with let


var x = 10;
// Here x is 10
{
  var x = 2;
  // Here x is 2
}
// Here x is 2

var x = 10; //or let
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10

var i = 5;
for (var i = 0; i < 10; i++) {
  // some statements
}
// Here i is 10

let i = 5;
for (let i = 0; i < 10; i++) {
  // some statements
}
// Here i is 5

var x = 2;       // Allowed
let x = 3;       // Not allowed

{
  var x = 4;   // Allowed
  let x = 5   // Not allowed
}

/**Hoisting
Variables defined with var are hoisted to the top (if you don't know what Hoisting is, read our Hoisting Chapter).

You can use a variable before it is declared:

Variables defined with let are not hoisted to the top.

Using a let variable before it is declared will result in a ReferenceError.

The variable is in a "temporal dead zone" from the start of the block until it is declared: */

//JavaScript Const

const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

/**Block Scope
Declaring a variable with const is similar to let when it comes to Block Scope.

The x declared in the block, in this example, is not the same as the x declared outside the block:
https://www.w3schools.com/js/js_const.asp
 */

var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10

/**The keyword const is a little misleading.

It does NOT define a constant value. It defines a constant reference to a value.

Because of this, we cannot change constant primitive values, but we can change the properties of constant objects. */

//Constant Objects can Change
//You can change the properties of a constant object:
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

//But you can NOT reassign a constant object:
const car = {type:"Fiat", model:"500", color:"white"};
car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

//Constant Arrays can Change
//You can change the elements of a constant array:
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

//But you can NOT reassign a constant array:
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR

//Redeclaring
var x = 2;    //  Allowed
var x = 3;    //  Allowed
x = 4;        //  Allowed

var x = 2;         // Allowed
const x = 2;       // Not allowed
{
  let x = 2;     // Allowed
  const x = 2;   // Not allowed
}

//Redeclaring a variable with const, in another scope, or in another block, is allowed:
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}

/**Hoisting
Variables defined with var are hoisted to the top (if you don't know what Hoisting is, read our Hoisting Chapter).

You can use a var variable before it is declared:
 */
carName = "Volvo";    // You CAN use carName here
var carName;
/**Variables defined with const are not hoisted to the top.

A const variable cannot be used before it is declared: 
carName = "Volvo";    // You can NOT use carName here
const carName = "Volvo";*/



//CallBack
/**What is a Callback?
Simply put: A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.
More complexly put: In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions. Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function. */

function add15(a, b , callback){ 
   console.log(`The sum of ${a} and ${b} is ${a+b}.`); 
   callback(); 
   } 
     
   // disp() function is called just 
   // after the ending of add() function  
   function disp(){ 
   console.log('This must be printed after addition'); 
   } 
     
   // Calling add() function 
   add15(5,6,disp); 


//Promise
/*
What is a Promise?
A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

How Promises Work
A promise is an object which can be returned synchronously from an asynchronous function. It will be in one of 3 possible states:

Fulfilled: onFulfilled() will be called (e.g., resolve() was called)
Rejected: onRejected() will be called (e.g., reject() was called)
Pending: not yet fulfilled or rejected
A promise is settled if it’s not pending (it has been resolved or rejected). Sometimes people use resolved and settled to mean the same thing: not pending.
Once settled, a promise can not be resettled. Calling resolve() or reject() again will have no effect. The immutability of a settled promise is an important feature.
Visit for more info:

https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

https://www.geeksforgeeks.org/javascript-promises/
 */

const wait = time => new Promise((resolve) => setTimeout(resolve, time));
wait(4000).then(() => console.log('Hello!')); // 'Hello!'


//Promises can be chained
const wait2 = time => new Promise(
  res => setTimeout(() => res(), time)
);

wait2(5000)
  // onFulfilled() can return a new promise, `x`
  .then(() => new Promise(res => res('foo')))
  // the next promise will assume the state of `x`
  .then(a => a)
  // Above we returned the unwrapped value of `x`
  // so `.then()` above returns a fulfilled promise
  // with that value:
  .then(b => console.log(b)) 


var promise = new Promise(function(resolve, reject) { 
  const x = "geeksforgeeks"; 
  const y = "geeksforgeeks"
  if(x === y) { 
    resolve(); 
  } else { 
    reject(); 
  } 
}); 
  
promise. 
    then(function () { 
        console.log('Success, You are a GEEK'); 
    }). 
    catch(function () { 
        console.log('Some error has occured'); 
    });


var promise2 = new Promise(function(resolve, reject) { 
    resolve('Geeks For Geeks'); 
}) 
  
promise2 
    .then(function(successMessage) { 
       //success handler function is invoked 
        console.log(successMessage); 
    }, function(errorMessage) { 
        console.log(errorMessage); 
    }) 


    
var promise3 = new Promise(function(resolve, reject) { 
    reject('Promise Rejected') 
}) 
  
promise3 
    .then(function(successMessage) { 
        console.log('success: ', successMessage); 
    }, function(errorMessage) { 
       //error handler function is invoked 
        console.log('reject: ', errorMessage); 
    }) 



var promise4 = new Promise(function(resolve, reject) { 
    reject('Promise Rejected') 
}) 
  
promise4 
    .then(function(successMessage) { 
        console.log(successMessage); 
    }) 
    .catch(function(errorMessage) { 
       //error handler function is invoked 
        console.log(errorMessage); 
    });



var promise5 = new Promise(function(resolve, reject) { 
    throw new Error('Some error has occured') 
}) 
  
promise5 
    .then(function(successMessage) { 
        console.log(successMessage); 
    }) 
    .catch(function(errorMessage) { 
       //error handler function is invoked 
        console.log(errorMessage); 
    }); 



//Async/Await
/*What is Async/Await?
The newest way to write asynchronous code in JavaScript.
It is non blocking (just like promises and callbacks).
Async/Await was created to simplify the process of working with and writing chained promises.
Async functions return a Promise. If the function throws an error, the Promise will be rejected. If the function returns a value, the Promise will be resolved.


Await
Async functions can make use of the await expression. This will pause the async function and wait for the Promise to resolve prior to moving on.
Without Async, Await can not be used

Visit for more info:
https://codeburst.io/javascript-es-2017-learn-async-await-by-example-48acc58bad65

https://javascript.info/async-await

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

https://www.geeksforgeeks.org/async-await-function-in-javascript/
 */

//Syntax:
// Normal Function
function add(x,y){
  return x + y;
}
// Async Function
async function add(x,y){
  return x + y;
}

//Async with arrow function
var getData1 = async() => { 
	var data = "Hello World"; 
	return data; 
} 
getData1().then(data => console.log(data)); 


//Aync Await
const getData2 = async() => { 
	var y = await "Hello World"; 
	console.log(y); 
} 
console.log(1); 
getData2(); 
console.log(2); 
//output will be 1,2,Hello World as getData is async


async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  console.log('aync demo1: ',result); // "done!"
}
f();


//Error Handling
async function f2() {

  try {
    let response = await fetch('http://no-such-url');
  } catch(err) {
    console.log('aync demo2 error: ',err); // TypeError: failed to fetch
  }
}
f2();



//Async Class method
class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}
new Waiter()
  .wait()
  .then(console.log); // 1



//Without Async Await
function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

function addPromise(x){
  return new Promise(resolve => {
    doubleAfter2Seconds(10).then((a) => {
      doubleAfter2Seconds(20).then((b) => {
        doubleAfter2Seconds(30).then((c) => {
          resolve(x + a + b + c);
      	})
      })
    })
  });
}
addPromise(10).then((sum) => {
  console.log('Sum without asynck await:', sum);
});



//With Async Await
function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

async function addAsync(x) {
  const a = await doubleAfter2Seconds(10);
  const b = await doubleAfter2Seconds(20);
  const c = await doubleAfter2Seconds(30);
  return x + a + b + c;
}


addAsync(10).then((sum) => {
  console.log('Sum with asynck await:',sum);
});



//Real time example
async function fetchUsers(endpoint) {
  const res = await fetch(endpoint);
  let data = await res.json();

  data = data.map(user => user.username);

  console.log('Response: ',data);
}

fetchUsers('https://jsonplaceholder.typicode.com/users');


//Like promise.then, await allows to use thenable objects (those with a callable then method). The idea is that a 3rd-party object may not be a promise, but promise-compatible: if it supports .then, that’s enough to use with await.

//Here’s a demo Thenable class, the await below accepts its instances:

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    // resolve with this.num*2 after 1000ms
    setTimeout(() => resolve(this.num * 2), 1000); // (*)
  }
};

async function f3() {
  // waits for 1 second, then result becomes 2
  let result = await new Thenable(10);
  console.log('Thenable asynck await:',result);
}
f3();


//Import export in JS

import {displayName} from './displayName';

(function fullname(){
  new displayName('Omkar','Javanjal');
})()


//Inheritance new obj example2

function Person(firstName, lastName) {
		this.FirstName = firstName || "unknown";
		this.LastName = lastName || "unknown";            
	}

	Person.prototype.getFullName = function () {
		return this.FirstName + " " + this.LastName;
	}
	function Student(firstName, lastName, schoolName, grade)
	{
		Person.call(this, firstName, lastName);

		this.SchoolName = schoolName || "unknown";
		this.Grade = grade || 0;
	}
	//Student.prototype = Person.prototype;
	Student.prototype = new Person();
	Student.prototype.constructor = Student;

	var std = new Student("James","Bond", "XYZ", 10);

  console.log('getfullname: ', std.getFullName());  //prints fullname 


//example link: //https://www.tutorialsteacher.com/javascript/inheritance-in-javascript

//For any issue you can reach me at github