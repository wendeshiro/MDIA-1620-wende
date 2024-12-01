// Welcome!
//
//                                                                            #####                              
//                         #                                               ###########                            
//    ##                    ##                                          ################                         
//  ######                   ###       ####                            #################                         
//  #   # ###############     ###    ########                          #### #######                              
//   # # #  #           ###    ####### #### ##                          #######  ##                 #####        
//   ###  ##            ####   ##################                   ###############                 ############ 
//        ##            ####     #####    ########              #####        #######                ############ 
//         #################          ###   #######       ## ##############  ######                 #####        
//         #####     ######      #    ###   #########     ##########################      ###############        
//          ###       ###       ##           #########    ## ##  #############  #####    #################       
//          ###       ###      ####       ############     # ##   #####          ####    #################       
//          ###       ###      ####  #####   ########      ####  #####          ## ##    ################        
//          ###       ###       #####         ########     ##    #######       ######       ###     ###          
//          ###       ###                     #########           ####          ####        ###     ###        
//          ###       ###                                          ####                     ###     ###         
//          ###       ###                                           ###                                          
//


//------------------------- Seting up shop -------------------------//

let horses = [];
let welcomeMessage = "Hi, welcome to my fancy, lovely, charming, cozy, and spacious stables!";
let latePaymentFee = 10;
let stallsNumber = 30;

//------------------------- First day -------------------------//

function Horse(name, nickname, faveTreat, age, isInside, color, faveWeather) {
    this.name = name;
    this.nickname = nickname;
    this.faveTreat = faveTreat;
    this.age = age;
    this.monthlyRent = 200;
    this.isInside = isInside;
    this.color = color;
    this.faveWeather = faveWeather;
    this.horseIntro = function() {
        console.log(`Howdy! My horse's name is ${this.name}. As you can see, its color is ${this.color}. Its favorite treat is ${this.faveTreat}, and its favorite weather is ${this.faveWeather}.`);
    };
    this.horseFunFact = function() {
        console.log(`A fun fact: The word "Shiba" in the name "${this.name}" comes from Japanese.`);
    };
}

const shibaaka = new Horse("Shibaaka", "Aka", "fish", 2, true, "red", "rainy");
const shibakuro = new Horse("Shibakuro", "Kuro", "beef", 3, true, "black", "sunny");
const shibashiro = new Horse("Shibashiro", "Shiro", "chicken", 4, false, "white", "snowy");

horses.push(shibaaka, shibakuro, shibashiro);

const shibagoma = {
    name: "Shibagoma",
    nickname: "Goma",
    faveTreat: "fries",
    age: 5,
    monthlyRent: 200,
    isInside: true,
    color: "black and tan",
    faveWeather: "misty",
    horseIntro: function() {
        console.log(`Howdy! My horse's name is ${this.name}. As you can see, its color is ${this.color}. Its favorite treat is ${this.faveTreat}, and its favorite weather is ${this.faveWeather}.`);
    },
    horseFunFact: function() {
        console.log(`A fun fact: The word "Shiba" in the name "${this.name}" comes from Japanese.`);
    },
};

horses.push(shibagoma);


shibaaka.isHungry = true;
shibakuro.isHungry = false;
shibashiro.isHungry = true;
shibagoma.isHungry = true;


//------------------------- Stable roster -------------------------//

console.log(horses);

// [
//     Horse {
//       name: 'Shibaaka',
//       nickname: 'Aka',
//       faveTreat: 'fish',
//       age: 2,
//       monthlyRent: 200,
//       isInside: true,
//       color: 'red',
//       faveWeather: 'rainy',
//       horseIntro: [Function (anonymous)],
//       horseFunFact: [Function (anonymous)],
//       isHungry: true
//     },
//     Horse {
//       name: 'Shibakuro',
//       nickname: 'Kuro',
//       faveTreat: 'beef',
//       age: 3,
//       monthlyRent: 200,
//       isInside: true,
//       color: 'black',
//       faveWeather: 'sunny',
//       horseIntro: [Function (anonymous)],
//       horseFunFact: [Function (anonymous)],
//       isHungry: false
//     },
//     Horse {
//       name: 'Shibashiro',
//       nickname: 'Shiro',
//       faveTreat: 'chicken',
//       age: 4,
//       monthlyRent: 200,
//       isInside: false,
//       color: 'white',
//       faveWeather: 'snowy',
//       horseIntro: [Function (anonymous)],
//       horseFunFact: [Function (anonymous)],
//       isHungry: true
//     },
//     {
//       name: 'Shibagoma',
//       nickname: 'Goma',
//       faveTreat: 'fries',
//       age: 5,
//       monthlyRent: 200,
//       isInside: true,
//       color: 'black and tan',
//       faveWeather: 'misty',
//       horseIntro: [Function: horseIntro],
//       horseFunFact: [Function: horseFunFact],
//       isHungry: true
//     }
//   ]


//---------------------- Growing business ----------------------//

stallsNumber = stallsNumber - horses.length;

if (stallsNumber < 2) {
    console.log("We need to build more stalls.");
} else {
    console.log(`We have ${stallsNumber} stalls available!`);
}

function logLateFee(horseIndex) {
    let totalLateFee = horses[horseIndex].monthlyRent + latePaymentFee;
    console.log(`${horses[horseIndex].name} will owe $${totalLateFee} if the rent is paid late.`);
}

logLateFee(0); //Shibaaka will owe
logLateFee(1); //Shibakuro will owe
logLateFee(2); //Shibashiro will owe
logLateFee(3); //Shibagoma will owe

for (let i = 0; i < horses.length; i++) {
    let horse = horses[i];
    let horseName = horse["name"];
    let favorite = horse["faveTreat"];
    let likesChicken = favorite === "chicken";

    if (likesChicken) {
        console.log(horseName + " loves chicken!");
        break;
    }

    console.log(`${horseName} likes ${favorite}, and doesn't like chicken. Please remember it and keep checking!`);
}


function horseNickname(horse) {
    return horse.nickname;
}

console.log(`${shibakuro.name}'s nickname is ${horseNickname(shibakuro)}.`);


//------------------------- Day to day operations -------------------------//

function takeForWalk(horse) {
    if (horse.faveWeather === "rainy" && horse.isInside === true) {
        console.log(`It's rainy today. ${horse.name} loves the rain! Let's take ${horse.name} and its favorite treat ${horse.faveTreat} for a walk.`);
    } else if (horse.faveWeather !== "rainy" && horse.isInside === true) {
        console.log(`It's rainy today. ${horse.name} doesn't like the rain. It prefers ${horse.faveWeather} days, so no walk today. Let's give ${horse.name}'s favorite treat ${horse.faveTreat} in the stables.`);
    } else {
        console.log(`It's rainy today. ${horse.name} doesn't like the rain, but it's not in the stable. Let's go find him and bring it back and give it its favorite treat ${horse.faveTreat}.`); 
    } 
};

takeForWalk(shibaaka);

function bringHorsesOutAndIn(isDark) {  // to move horses outside in the morning and move horses inside at night.
    for (let i = 0; i < horses.length; i++) {
        horses[i].isInside = false;
        console.log(`The rain has stopped, it's sunny now! ${horses[i].name} has been moved to spend time in the sun.`);
        if(isDark) {
            if (!horses[i].isInside) {
                horses[i].isInside = true;
                console.log(`${horses[i].name} has been called inside because it's getting dark.`);
            }
        }
    }
}

bringHorsesOutAndIn(true); // It's getting dark outside.

shibaaka.changeHorsesLocation = function() {
    if (!this.isInside) {
        this.isInside = true;
    } else {
        this.isInside = false;
    }
}
shibakuro.changeHorsesLocation = function() {
    if (!this.isInside) {
        this.isInside = true;
    } else {
        this.isInside = false;
    }
}
shibashiro.changeHorsesLocation = function() {
    if (!this.isInside) {
        this.isInside = true;
    } else {
        this.isInside = false;
    }
}
shibagoma.changeHorsesLocation = function() {
    if (!this.isInside) {
        this.isInside = true;
    } else {
        this.isInside = false;
    }
}

shibaaka.changeHorsesLocation();
shibakuro.changeHorsesLocation();
shibashiro.changeHorsesLocation();
shibagoma.changeHorsesLocation();

function callHorsesForTreats() {
    for (let i = 0; i < horses.length; i++) {
        if (!horses[i].isInside) {
            console.log(`${horses[i].name} is outside, let's call them in and give it its favorite treat ${horses[i].faveTreat}.`);
            horses[i].isInside = true;
        }
        console.log(`*${horses[i].name} feels satisfied after enjoying its favorite treats ${horses[i].faveTreat}.`);
    }
}

callHorsesForTreats();
