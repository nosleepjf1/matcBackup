var monthlyIncome = 3316.0;

var utilities = 250;
var monthlyEntertainmentServices = 75;
var tithing = monthlyIncome / 10;
var carPayment = 500;
var studentLoanPayment = 500;
var carInsurance = 70;
var randomServices = 50;
var gas = 150;
var randomSpending = 300;
var foodAndToiletries = 200;


var result = monthlyIncome - utilities - monthlyEntertainmentServices - tithing - carPayment - studentLoanPayment
- carInsurance - randomServices - gas - randomSpending - foodAndToiletries;

document.write(result);