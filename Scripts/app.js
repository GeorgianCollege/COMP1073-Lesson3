// main javascript document

"use strict";

var username = "Tom";
var age = 30;
var isHungry = true;

var usernames = [];

// Initialize the array with values
usernames = ["Mike", "Rich", "Anju", "Margot"];
console.log("before the push: " + usernames);

//add an element to the bottom of the array
usernames.push("Tom");
console.log("after the push: " + usernames);

//remove an element from the bottom of the array
usernames.pop();
console.log("after the pop: " + usernames);





/*
var usernames = [];
//var usernames = new Array();


usernames[0] = "Mike";
console.log(usernames[0]);

usernames[1] = "Rich";
usernames[2] = "Anju";
usernames[3] = 400;

usernames[0] = "Tom";
console.log(usernames[0]);

usernames[5] = "Another User";

console.log(usernames);
console.log(usernames[4]);
*/