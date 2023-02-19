// console.log("hello world");

const { name } = require("ejs");

//varibles
// console.log(2+2);

// num = 4 + 4 
// console.log(num);

// console.log(num + 5);

// let num1 = 6 + 6 
// console.log(num1);

// num1 = 7 + 4
// console.log(num1);

// let user = "omkar" 
// console.log(user);

//const

// let radius = 5
// const pi =3.14

// let area

// area = pi * radius * radius

// console.log(area);

// data types 

// primitive = number, string, boolean, null, undefined, symbol
// non-peimitive = object

// let num = 4
// console.log(typeof num);

// let myName = "omkar"

// let lastName = "sable"

// let user = myName + " " + lastName
// console.log(user)
// console.log(typeof myName);

// let bool = 5 > 6
// console.log(bool)

// let user1 = null
// console.log(typeof user1);

// let omkar
// console.log(omkar)

// let num3=5
// console.log(typeof num3/"omkar")


// let num1 =1
// let num2  =3

// let result

// result = num1 + num2

// console.log(result);

// let num =8
// num++ 
// console.log(num)


// let x=7, y=8, z=9

// let result = x > y ||  x < z

// let n  = ! result

// console.log(result, n);
// let x = "3"
// let y = 3
// let data = x === y
// console.log( data);

//if else
// let num1 = 6
// let num2 = 4
// let num3 = 8;

// let result = num1 > num2;
// if(result){
//     console.log("num is greater");
// }else{
//     console.log("num is lesseer");
// }

// if ( num1 > num2 && num1 > num3){
//     console.log("num1 is greater ");
// }else if (num2 > num1  && num2 > num3){
//      console.log("num2 is greater");
// }else {
//     console.log("num3 is greater ");
// }

// if (num3 % 2 === 0){
//     console.log("num is even");
// }else{
//     console.log("num is odd");
// }

//ternary operator

// let x = 20;

// x % 2 === 0 ? console.log("even") : console.log("odd") 

//switch statments

// switch (2) {
//     case 1:
//         console.log("false");
//         break;
//     case 2:
//          console.log("true");
//         break;

//     default:
//         console.log("hjsh");
//         break;
// }

//Templete literals

// let num1 =  7
// let num2 = 4 

// let result = num1 + num2

// console.log("the addition of" +  num1 +  "&" +  num2 +  "is" + result)

// console.log(`the addition of ${num1} & ${num2} is ${result}`);

// while loops
// let i = 1;
// while (i <= 5 ) {
//     console.log("Hi");
//     i++;
// }

// do while loops 

// let i = 0;
// do {
//     console.log("one time");
//     i++;
// } while (i <= 5);

// For loop
// for ( let i = 1 ; i <= 5 ; i++){
//     console.log("HI");
// for( let j = 1; j <=5; j++){
//     console.log("Hello");
// }
// }

// for( let i =1 ; i<=100; i++){
//     if(i % 3 === 0){
//         console.log(i);
//     }
// }

// let num = 882828829
// while(num > 0){
// console.log(num%10);
// num = parseInt(num/10);
// }

// when we know satrting point & ending point we use For loop
//  when we don't know satart & end we use while loop

//objects

// let aliens = {
//    userName : "omkar",
//    rollNO : 1
// }
// console.log(aliens.rollNO);
// console.log(aliens['rollNO']);
// console.log(typeof(aliens));

//complex object
// let alien = {
//     name: 'omkar',
//     tech: 'JS',
//     laptop: {
//         cpu : 'i7',
//         ram: 4,
//         brand : 'dell'
//     }
// }

// console.log(alien.laptop.brand.length);

// console.log(alien?.laptop?.brand?.length);

// delete alien.laptop

// console.log(alien)

//for in loop

// for( let key in alien.laptop){
//     console.log(key, alien.laptop[key]);
// }

// functions in JS

// function greet(){
//     console.log("Hi");
// }

// greet();
// greet();
// greet();
// greet();

// passing value through function

// function greet(user){
//     return `Hello ${user}`
// }
// let user = 'omkar'
// let str = greet(user);
// console.log(str);

//function expression
// let add = function(num1, num2)
// {
//      return(num1 + num2);
// }

// let sum = add(5,8);
// console.log(sum);

//local and global variable
// variables created inside block , parenthesis it is local  variables you can't print outside function
// variables created outside is global variables , you can print this variables anywhere.

// function add (num1, num2, num3 = 4){
//     return num1 + num2 + num3;
// }

// let result = add(5,7,8);
// console.log(result);

// Arrow functions in Javascript

// let greet = (user) => {
//     console.log("testted" + " " + user);
//     return 1;
// }

// console.log(greet('omkar'));

// methods in Java script
// function + Object
// let laptop = {
//     cpu : "i9",
//     ram : 16,
//     brand : 'HP',

//     greets: function(){
//         console.log("hello world")
//     }
// }

// laptop.greets();

// what is this?
// let laptop = {
//         cpu : "i9",
//         ram : 16,
//         brand : 'HP',
    
//         getConfig: function(){
//             console.log(this.cpu)
//         }
//     }
    
//     let laptop1 = {
//         cpu : "i7",
//         ram : 8,
//         brand: 'dell',

//         getConfig: function(){
//             console.log(this.brand)
//         }
//     }
//     laptop1.getConfig();

    // this referes to current object

// why it is called This?



// function getFastLaptop(laptop1, laptop2)
// {
//     if(laptop1.cpu > laptop2.cpu){
//         console.log(laptop1);
//     }else{
//         console.log(laptop2);
//     }

// }


// let laptop1 = {
//         cpu : "i9",
//         ram : 16,
//         brand : 'HP',

//         compare : function(other){
//          if (this.cpu > other.cpu){
//             console.log(this)
//          }else {
//             console.log(other)
//          }
//         },
    
//         getConfig: function(){
//             console.log(this.cpu)
//         }
//     }
    
//     let laptop2 = {
//         cpu : "i7",
//         ram : 8,
//         brand: 'dell',

//         getConfig: function(){
//             console.log(this.brand)
//         }
//     }


//     laptop1.compare(laptop2);
    // getFastLaptop(laptop1, laptop2);
  

// constructor function in Javascript
//multiple object of same type.

// function Alien(name, tech){
//   this.name = name;
//   this.tech = tech;

//   this.work = function(){
//     console.log("bjbxmn")
//   }

// }

// let alien1 = new  Alien ('omkar', 'js')
// let alien2 = new  Alien ('omkar1', 'js1')

// alien2.tech = "blockChain";

// console.log(alien2);

// alien1.work();


// Arrays

// let values = new Array();

// let values = [5,7,8];

// console.log(values[1]);

// let data = ['omkar', 6 , 'sumeet', {tech:"JS"}, function(){console.log("HI");}];

// names[3] ='omi';
// names.push ='omi';

// console.log(data);

// data[4]();

// let data = [5,6,7,8,9];
// console.log(data.push(2));
// console.log(data);