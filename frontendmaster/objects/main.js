const js = {
    name: "JavaScript",
    abbreviation: "JS",
    isAwesome: true,
    officialSpec: "ECMAScript",
    birthYear: 1995,
    creator: "Brendan Eich"
};
/*Objects collect multiple values together to describe more complex data
Similar to how we can point at different values using variables in our code,
objects let us point at related values using properties in the object.*/

//Getting property values
js.name //"JavaScript"
js.isAwesome //true

//Using property values
js.name.startsWith("Java") //true
let age = 2022 - js.birthYear; //age=27

//Setting property values
const indecisive = {
    lunch: "sandwich"
};
indecisive.lunch = "tacos"; //{lunch: 'tacos'}
indecisive.snack = "chips"; //{lunch: 'tacos', snack: 'chips'}

//Exercise
const rania = {
    name: "rania",
    home: "mansoura",
    age: 22,
    languages: ["English", "arabic"],
    pet: "cat",
    vehicle: "bike",
    hobbies: ["travel", "reading", "gaming"]
};

//Properties can point to functions too
//We call function-properties "methods" on objects
const dog = {
    name: "Ein",
    breed: "Corgi",
    speak: function () {
        console.log("woof woof");
    }
}
dog.speak();

//this in a method lets us reference other properties on the object
anjana.speak = function () {
    console.log("Hi my name is", this.name);
}
anjana.speak();

//Nested objects
const menu = {
    lunch: {
        appetizer: "salad",
        main: "spaghetti",
        dessert: "tiramisu"
    },
    dinner: {
        appetizer: "samosa",
        main: "saag paneer",
        dessert: "gulab jamun"
    }
};
const tiramisu = menu.lunch.dessert;

//Objects in Arrays & Objects
const spices = [
    {name: "Emma", nickname: "Baby"},
    {name: "Geri", nickname: "Ginger"},
    {name: "Mel B", nickname: "Scary"},
    {name: "Mel C", nickname: "Sporty"},
    {name: "Victoria", nickname: "Posh"}
];
const spiceGirls = {
    albums: ["Spice", "Spiceworld", "Forever"],
    motto: "Girl Power",
    members: spices
};

//Exercise
spiceGirls.motto

spices[1]
spiceGirls.members[1]

spiceGirls.albums[1]

spices[4].name

//document
document.title = "Tic Tac Toe";
document.querySelector("h2").append(" and love");                

//console
console.log("hello coder!");
console.log(document.querySelector("h1").textContent);
console.warn("something seems iffy");
console.error("oh no, it broke!");
console.clear();

//Math
let randomNumber = Math.random();
const pi = Math.PI;
const five = Math.abs(-5);

//strings
//Strings are primitive values (not objects)
//but JS automatically wraps them in String objects
const hello = "hello";
console.log(hello.length);
const yello = hello.toUpperCase();

//play tic tac toe
const players=[
    {name:rania, symbol:"x"}
];
players.push({name:ahmed, symbol:"o"})
document.getElementById("p1-name").textContent
document.getElementById("p2-name").textContent=players[1].name
document.querySelectorAll(".square")
squares[4].textContent="x"
squares[0].textContent=players[1].symbol
