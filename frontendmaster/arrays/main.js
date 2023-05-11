//Arrays let us keep multiple values together in a single collection
let synonyms = ["plethora", "array", "cornucopia"];

//Like strings, arrays have a length
synonyms.length

//And each value has an index
synonyms[1] //array
synonyms.indexOf("cornucopia") //2

//Also like strings, we can check if an array contains a certain value
synonyms.includes("plethora") //true
synonyms.includes("variety") //false

//Unlike strings, we can modify arrays
synonyms[1] = "variety"; //synonyms = ["plethora", "variety", "cornucopia"];
let lastItem = synonyms.pop(); //synonyms = ["plethora", "variety"];
synonyms.push("multitude"); //synonyms = ["plethora", "variety", "cornucopia", "multitude"];

//Arrays can be empty, or hold a single item
let emptyArray = [];
let oneItemArray = ["lonely"];

//Arrays can hold any type of items, or mix and match!
let mixedArray = ["pop", 6, "squish", false, document];

//Arrays can do lots of useful tricks!
["c", "a", "d", "b"].sort() //it sorts the letters (4)['a', 'b', 'c', 'd']

["lions", "tigers", "bears oh my!"].join(" & ")//'lions & tigers & bears oh my!'

[1, 2, 3].concat([4, 5, 6])// [1, 2, 3, 4, 5, 6] concatenate

let abcArray = ["a", "b", "c"]; //declare an array
abcArray[1] = "d"; 
abcArray; //["a","d","c"]

let abcString = "abc";//declare a variable
abcString[1] = "d";
abcString; //"abc"

//"Mutable" data can be edited (e.g. Arrays)
//"Immutable" data always stays the same (e.g. strings & other primitives)

let numbers1 = [1, 2, 3];
let result1 = numbers1.push(4);
numbers1; //[1, 2, 3, 4]

let numbers2 = [1, 2, 3];
let result2 = numbers2.concat([4]);
numbers2; //[1, 2, 3]

//Some actions "mutate" an array (e.g. oldArray.push(newValue))  ...aka change the array in-place
//Other actions do not mutate the original array, but instead create a new copy (e.g. oldArray.concat(otherArray))

let letVariable = "original value";
letVariable = "new value"; //it changes

const constVariable = "original value";
constVariable = "new Value"; //error can't change 

const operands = [4, 6];
const sum = operands[0] + operands[1];//10
operands[0] = 5;
const newSum = operands[0] + operands[1];//11




