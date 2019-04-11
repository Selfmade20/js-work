var userBalance = 10000;

function currentBalance() {
    return userBalance;
}

function giveUserBalance() {
    return "User Balance " + currentBalance();
}


function withdraw(withDrawalAmount) {
    var balance = currentBalance();
    if (balance >= withDrawalAmount) {
        userBalance = userBalance - withDrawalAmount;
        return "Withdrawal of " + withDrawalAmount + " Successful";
    } else {
        return "Insufficient funds";
    }
}

function deposit(depositAmount) {
    var balance = giveUserBalance();

    if (depositAmount >= 15000) {
        userBalance = userBalance + depositAmount;
        return "Deposit Limit exceeded"
    }

    else {
        userBalance = userBalance + depositAmount;
        return "Deposit of " + depositAmount + " Successful";
    }


}



console.log(giveUserBalance());
console.log(withdraw(5000));
console.log(giveUserBalance());
console.log(withdraw(900));
console.log(giveUserBalance());
console.log(withdraw(1200));
console.log(giveUserBalance());
console.log(deposit(10000));
console.log(giveUserBalance());  
var transactionHistory = [];

transactionHistory.push(giveUserBalance());
transactionHistory.push(withdraw(5000));
transactionHistory.push(giveUserBalance());
transactionHistory.push(withdraw(900));
transactionHistory.push(giveUserBalance());
transactionHistory.push(withdraw(1200));
transactionHistory.push(giveUserBalance());
transactionHistory.push(deposit(10000));
transactionHistory.push(giveUserBalance());


console.log(transactionHistory);

function transactionHistory() {
    //console.log(transactionHistory)   
}
