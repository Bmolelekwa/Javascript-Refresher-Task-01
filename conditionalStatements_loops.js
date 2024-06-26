function checkTemperature(temperature) {
    if (temperature < 0) {
        console.log("It's freezing!");
    } else if (temperature >= 0 && temperature <= 15) {
        console.log("It's cold.");
    } else if (temperature >= 16 && temperature <= 25) {
        console.log("It's mild.");
    } else {
        console.log("It's warm.");
    }
}

checkTemperature(-5)
checkTemperature(11)
checkTemperature(18)
checkTemperature(27)


function checkTemperatureSwitch(temperature) {
    switch (true) {
        case (temperature < 0):
            console.log("It's freezing!");
            break;
        case (temperature >= 0 && temperature <= 15):
            console.log("It's cold.");
            break;
        case (temperature >= 16 && temperature <= 25):
            console.log("It's mild.");
            break;
        case (temperature > 25):
            console.log("It's warm.");
            break;
    }
}

checkTemperatureSwitch(-5)
checkTemperatureSwitch(11)
checkTemperatureSwitch(18)
checkTemperatureSwitch(27)



function checkDivisibility(number) {
    if(number % 2 === 0 && number % 3 === 0){
        console.log("Divisible by both");
    }
    else if(number % 2 === 0){
        console.log("Divisible by 2");
    }
    else if(number % 3 === 0){
        console.log("Divisible by 3");
    }
    else{
        console.log("Not divisible by both");
    }
}

checkDivisibility(60)
checkDivisibility(4)
checkDivisibility(27)
checkDivisibility(11)



function checkDivisibilitySwitch(number) {
    switch (true) {
        case (number % 2 === 0 && number % 3 === 0):
            console.log("Divisible by both");
            break;
        case (number % 2 === 0):
            console.log("Divisible by 2");
            break;
        case (number % 3 === 0):
            console.log("Divisible by 3");
            break;
        default:
            console.log("Not divisible by both");
    }
}

//Test
checkDivisibility(60)
checkDivisibility(4)
checkDivisibility(27)
checkDivisibility(11)



for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

let sumTotal = 0;
for (let i = 1; i <= 100; i++) {
    sumTotal += i;
}
console.log(sumTotal);


const numbers1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i])
}


const numbers2 = [3, 7, 2, 5, 10, 6];
let largest = numbers2[0];

for(let i = 1; i< numbers2.length; i++){
    if(numbers2[i]> largest){
        largest = numbers2[i]
    }
}
console.log(largest)



let i1 = 1;
while (i1 <= 10) {
    console.log(i1);
    i1++;
}

let i2 = 2;
while (i2 <=20) {
    console.log(i2);
    i2 +=2;
}

let i3 = 1;
let total = 0;
while (i3 <= 100) {
    total += i3;
    i3++;
}
console.log(total)


let i4 = 5;
while (i4 < 50){
    console.log(i4);
    i4 += 5;
}


let prints = '';
let l1 = 0;
do {
    l1 = l1 + 1;
    prints = prints + l1;
}  while (l1 < 10);

console.log(prints);


let l2 = 1;
let print2 = 0;
do {
    print2 += l2;
    l2++;
}  while (l2 <= 100);

console.log(print2);


let userNumber;
do {
    userNumber = parseInt(prompt("Enter a number greater than 10"));
} while (userNumber <= 10)
console.log(userNumber);



const requiredNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = parseInt(prompt("You are required to guess a number between 1 and 10: "), 10);
    if (guess < requiredNumber) {
        console.log("It's low try again");
    } else if (guess > requiredNumber) {
        console.log("It's high try again");
    } else if (!isNaN(guess)) {
        console.log("Good Job", requiredNumber);
    }
} while (guess !== requiredNumber);
