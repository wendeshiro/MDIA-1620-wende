console.log("horse22223!");

let horseName = "shiba"; // this is a comment

horseName = "shiba2";
let horseAge = 18;
console.log(horseName);
console.log(horseAge);

let isHorseInStable = true;
console.log(isHorseInStable);

isHorseInStable = false;
console.log(isHorseInStable)

horseName = "shiba3";
console.log(horseName);

console.log(typeof "52321412313");

console.log(typeof 52321412313);

console.log(typeof isHorseInStable);

console.log(typeof horseAge);

const STABLE_MONTHLY_FEE = 100;
console.log(STABLE_MONTHLY_FEE);
console.log(2 + 3);
console.log(STABLE_MONTHLY_FEE - 2);
console.log(2 * 3);
console.log(STABLE_MONTHLY_FEE / 2);
console.log(STABLE_MONTHLY_FEE ** 2);

let horseAgeIn10Years = horseAge + 10;
let horseAgeIn20Years = horseAge + 20;
console.log(horseAgeIn10Years);
console.log(horseAgeIn20Years);

console.log(horseName + " is the name of my horse")

let horseIntroduction = " is the name of my horse. test 2"
console.log(horseName + horseIntroduction)

let rentIntro = "It costs " + STABLE_MONTHLY_FEE + " monthly"
console.log(rentIntro)

let rentIntro2 = `It costs ${STABLE_MONTHLY_FEE} monthly. test 2`
console.log(rentIntro2)

let horseNickName = "shiro";
let stableDiscount = STABLE_MONTHLY_FEE*3*0.9
let introToSamuel = `Hello Samuel, welcome to my stable. My horse name is ${horseName} and his nickname is ${horseNickName}. As a welcome gesture, I will offer a 10% discount. :) The cost for a stable three-month stay will be $${stableDiscount}.`
console.log(introToSamuel)

// Week 5 Lab Practice

if (true) {
    console.log("if true, this text will appear");
}

if (3 < 4) {
    console.log("if 3<4 is true, this text will appear");
}

if (3 > 4) {
    console.log("if 3 > 4 is true, this text will appear.");
}

if (false) {
    console.log("if false, this text will appear.");
}

let isHorseInside = true;
if (isHorseInside === true) {
    console.log(horseName + " is inside");
}
if (isHorseInside) {
    console.log(horseName + " is inside test2");
}

isHorseInside = false;
if (isHorseInside) {
    console.log(horseName + " is inside"); //if true, this will be output.
} else {
    console.log(horseName + " is outside"); //if false, this will be output.
}

isHorseInside = false;
let horseColor = "red";
if (isHorseInside) {
    console.log(horseName + " is inside"); //if true, this will be output.
} else if (horseColor === "red") { 
    console.log("The horse color is red");
} else {
    console.log("The horse is outside and it is not red");
}

horseColor = "blue";
if (isHorseInside) {
    console.log(horseName + " is inside"); //if true, this will be output.
} else if (horseColor === "red") { 
    console.log("The horse color is red");
} else {
    console.log("The horse is outside and it is not red");
}

horseName = "shiro lesson 5";
if(horseName !== "shiro lesson 5") {
    console.log(horseName + ", you came to the wrong classroom");
} else {
    console.log(horseName + ", welcome to lesson 5");
}

horseName = "shiro lesson 5";
if(horseName === "shiro lesson 5") {
    console.log(horseName + ", welcome to lesson 5");
} else {
    console.log(horseName + ", you came to the wrong classroom");
}

horseName = "shiro (lesson 5 && practice ver.)";
horseColor = "yellow";
if(horseName === "shiro (lesson 5 && practice ver.)" && horseColor === "yellow" ) {
    console.log(horseName + " are doing the && practice");
} else {
    console.log(horseName + ", you came to the wrong classroom");
}

horseName = "shiro (lesson 5 || practice ver.)";
horseColor = "dark yellow";
if(horseName === "shiro (lesson 5 || practice ver.)" || horseColor === "yellow" ) {
    console.log(horseName + " are doing the || practice, but the color is somewhat different.");
} else {
    console.log(horseName + ", you came to the wrong classroom");
}

horseName = "shiro (lesson 5 || practice ver.)";
horseColor = "dark yellow";
if(horseName === "shiro (lesson 5 || practice ver.)" || horseColor === "yellow" ) {
    console.log(horseName + " are doing the || practice, but the color is somewhat different.");
} else {
    console.log(horseName + ", you came to the wrong classroom");
}

horseName = "shiro (lesson 5 ! practice ver.)";
isHorseInside = false;
if (!isHorseInside) {
    console.log(horseName + " is outside"); //if false, this will be output.
} else {
    console.log(horseName + " is inside"); //if true, this will be output.
}

// Week 6 Lab Practice

let word = "Chaiquan";
console.log(word.charAt(0));
console.log(word.charAt(2));

horseName = "shiro (lesson 6 ver.)"

// Horse = ["name", age, isInside, "nickName"]
let horseOne = [horseName, horseAge, isHorseInside, horseNickName];
let horseTwo = ["shibamame", 1, false, "mame", 22222];
console.log(horseOne);
console.log(horseTwo);

console.log(horseOne.length);
console.log(horseTwo.length);

horseOne.push("red");
console.log(horseOne);
horseTwo.push("yellow");
console.log(horseTwo);

console.log(horseOne[0]+" is the horsename, and he's "+horseOne[1]+" years old.");

console.log(horseOne[1] + horseTwo[1]);

if(horseOne[1] === 18){
    console.log(`Yes, ${horseOne[0]} is ${horseOne[1]} years old.`)
}


// - output an intro to your horses ↓
let horseNames = [horseName, "shibamame", "shibakuro"];
let horseIntro = `There are ${horseNames.length} horses staying at my stables: ${horseNames[0]}, ${horseNames[1]}, and ${horseNames[2]}.`;
console.log(horseIntro)

// - output whether your horses are inside or outside at least 3 horses ↓

let horseStatus = ["inside", "outside", "outside"] // shiro (lesson 6 ver.), shibamame, shibakuro
console.log(`${horseNames[0]} is ${horseStatus[0]}. ${horseNames[1]} is ${horseStatus[1]}. ${horseNames[2]} is ${horseStatus[2]}.`)



