// Array (data structure)
// Its means Linear collection of things


let students = ["walishah", "Feroz", "Zaryab"];   //create array like that

console.log(students[0]); //walishah

let nums = [99, 23, 34, 92, 45, 76]; //visulizing array

console.log(nums[4]); //45

let mix = ["walishah", 21, 98.20]; //mix array 

console.log(mix[0][4]); //result -> s

// Array is mutable its mean array is editable                ("Array counting starting from 1 and indexing counting starting from 0")

let books = ["fruite book", "Story book", "Animal Book"];

books[0] = "Travel Book"; //that's how we edit array value

books[10] = "only books"; //remain 7 array its empty 

//Array Methods--------------------------------------------------------------

//(1)push:add to end
//(2)pop:delete from end and return it
//(3)unshift:add to start
//(4)shift:delete from end and return it

let car = ["a", "b", "c"];

car.push('d');
// car.pop(); its by defualt delete end value
// car.unshift('df');
// car.shift(); its by defualt delete first value

console.log(car);

let months = ["january", "april", "march", "Aug"];   //------------------------------------------

months.shift();
months.shift();
months.unshift('Octuber');
months.unshift('Dec');

// Output look live ['Dec', 'Octuber', 'march', 'Aug']

console.log(months);

//Array methods indexOf / include -----------------------------

let primary = ["12", "45", "67", "78", "98"];

// primary.indexOf("67"); //result index no 2-------------------------

primary.includes("900"); //false

primary.includes("78"); //trure

//concatination concat() marge 2 arrays

// months.concat(primary);--------example-------------

// let n = months.concat(primary); ----------------------------

// n.reverse(); that is reverse tha n array -------------------

// slice in array 

// months.slice(0, 3); ---------------------------------------------

// it show 2 index because last index is exculsive means minus ho jata he

// splice array method

//formula arrayname.splice(start,deletecount, "itemadd1","itemadd2" & so on);

// splice: remove/ replace /add element in place-------------------------------------------------

let gari = ["toyota", "Bmw", "xuv", "cultus"];

// gari.splice(1, 0, "ford", "fordagain"); //(no1 is  index no)(no 0 is how many element you can delete or replace array)(add element),(add element); 
//result is ['toyota', 'ford', 'fordagain', 'Bmw', 'xuv', 'cultus']


// gari.splice(2, 6);
//result is ['toyota', 'ford']

// gari.push("wali");

gari.splice(0, 0, "ford", "fordagain", "thenagainford");
//result is ['ford', 'fordagain', 'thenagainford', 'toyota', 'Bmw', 'xuv', 'cultus']

console.log(gari);


//sort method--------------------------------------

let alphabets = ["d", "a", "f", "b"];

alphabets.sort();
//result is ['a', 'b', 'd', 'f']

console.log(alphabets);

// practice question

let din = ["jaunary", "july", "march", "augest"];

din.splice(0, 2, "july", "june");


console.log(din);
//result is ['july', 'June', 'march', 'augest']

let lang = ["c", "c++", "css", "html", "javascript", "python", "go", "java"];

let newlang = lang.reverse().indexOf("javascript");

console.log(newlang);
























