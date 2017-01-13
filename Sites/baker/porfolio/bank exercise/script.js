/**
 * Created by bobnweave on 5/3/16.
 */

function profile(firstName, lastName, savings, checking){
    this.firstName = firstName;
    this.lastName = lastName;
    this.savings = savings;
    this.checking = checking;

    this.transfer = function(accountTo, accountFrom, amount){
        if(accountFrom.balance >= amount) {
            accountTo.balance += amount;
            accountFrom.balance -= amount;
        }
        else{
            console.log("insufficient funds");
        }
    };
}

function Account(balance, accountNumber){
    this.balance = balance;
    this.accountNumber = accountNumber;
    this.withdrawal = function(amount){};
    this.deposit = function(amount){};
}

function Savings (interestRate) {
        this.interestRate = interestRate;
    }


function checking(numberOfChecks){
    this.numberOfChecks = numberOfChecks;
}

function createProfile(name, checkingBalance, savingBalance, interestRate, numberOfChecks){


    var profile = new profile();
}