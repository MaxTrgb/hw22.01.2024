// Task 1

// var userName = prompt("enter yor name:");
// alert("hello, " + userName);


// Task2 

// var userBirthYear = prompt("Enter your birth year:");
// const currentYear = 2024;

// alert("User years:" + (currentYear-userBirthYear));

// Task 3

// let sideLength = prompt("Enter your side length:");
// alert("perimeter of a square: " + (sideLength*4));

// Task 4

// let circleRadius = prompt("Enter circle radius:");
// alert("Circle radius:" + (3.14*circleRadius*circleRadius));

// Task 5

// var distanceKm = prompt("Enter distance between the two cities:");
// var hoursToReach = prompt("Enter how many hours you want to take:");
// var speedRequired = distanceKm / hoursToReach;

// alert("You need to travel at speed of " + speedRequired + " km/h.");

// Task 6

// const exchangeRate = 0.85;
// var dollars = prompt("Enter the amount in dollars:");
// var euros = dollars * exchangeRate;

// alert(dollars + " dollars is equal to " + euros + " euros at the exchange rate of " + exchangeRate);

// Task 7

// var flashDriveCapacityGB = prompt("Enter the flash drive capacity in GB:");
// var flashDriveCapacityMB = flashDriveCapacityGB * 1024;
// var fileSizeMB = 820;
// var filesToFit = Math.floor(flashDriveCapacityMB / fileSizeMB);

// alert("You can fit approximately " + filesToFit + " files of 820 MB on the flash drive with a capacity of " + flashDriveCapacityGB + " GB.");

// Task 8

// var walletAmount = prompt("Enter the amount of money in your wallet:");
// var chocolateCost = prompt("Enter the cost of one chocolate bar:");
// var chocolatesToBuy = Math.floor(walletAmount / chocolateCost);
// var remainingMoney = walletAmount % chocolateCost;

// alert("With $" + walletAmount + " in your wallet and each chocolate costing $" + chocolateCost + ", you can buy " + chocolatesToBuy + " chocolates. You will have $" + remainingMoney.toFixed(2) + " in change.");

// Task 9

// var userInput = prompt("Enter a three-digit number:");
// var number = parseInt(userInput);

// if (isNaN(number) || userInput.length !== 3) {
//     alert("Please enter a valid three-digit number.");
// } else {    
//     var digit1 = Math.floor(number / 100);
//     var digit3 = number % 10;
    
//     if (digit1 === digit3) {
//         alert(number + " is a palindrome!");

//     } else {
//         alert(number + " is not a palindrome.");
        
//     }
// }

// Task 10

var userInput = prompt("Enter an integer:");
var number = parseInt(userInput);
var isInteger = !isNaN(number) && Number.isInteger(number);
var isEven = isInteger && (number & 1) === 0;
var isOdd = isInteger && (number & 1) !== 0;

if (isEven) {
    alert(number + " is an even number!");
} else if (isOdd) {
    alert(number + " is an odd number!");
} else {
    alert("Please enter a valid integer.");
}
