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
console.log(giveUserBalance());
console.log(withdraw(5000));
console.log(giveUserBalance());
console.log(withdraw(900));
console.log(giveUserBalance());



transactionHistory = [];

transactionHistory.push(giveUserBalance());
transactionHistory.push(withdraw(5000));
transactionHistory.push(giveUserBalance());
transactionHistory.push(withdraw(900));
transactionHistory.push(giveUserBalance());


console.log(transactionHistory);

function transactionHistory() {
 //console.log(transactionHistory)   
}