// Question One: create four accounts
const accountOne = {
    name: "Favour",
    balance: 20000,
    currency: "EUR",
    accountType: "checking"
};
const accountTwo = {
    name: "Daniel",
    balance: 50000,
    currency: "USD",
    accountType: "savings"
};
const accountThree = {
    name: "Divine",
    balance: 20000,
    currency: "USD",
    accountType: "checking"
};
const accountFour = {
    name: "Faith",
    balance: 20000,
    currency: "EUR",
    accountType: "savings"
}; 

// Question 2: Simulate deposits
const depositOne = 2000;
const depositTwo = 5000;

// Adding depositOne to account Two
accountTwo.balance += depositOne;
console.log(`Hi ${accountTwo.name}, You got a deposit of ${depositOne}. Your new balance is ${accountTwo.balance}`);

// Adding depositTwo to account Four
accountFour.balance += depositTwo;
console.log(`Hi ${accountFour.name}, You got a deposit of ${depositTwo}. Your new balance is ${accountFour.balance}`);

// Question 3: Attempt withdrawal
const withdrawalAmount1 = 19950;
const withdrawalAmount2 = 100000;

// Withdrawal attempt on account three
if (accountThree.balance >= withdrawalAmount1) {
    accountThree.balance -= withdrawalAmount1
    console.log(`Hi ${accountThree.name}, You have successfully withrawn ${withdrawalAmount1}. Your new balance is ${accountThree.balance}`)
} else {
    console.log(`Withdrawal denied for ${accountThree.name}: insufficient funds`)
}

// Withdrawal attempt on account four
if (accountFour.balance >= withdrawalAmount2) {
    accountFour.balance -= withdrawalAmount2
    console.log(`Hi ${accountFour.name}, You have successfully withrawn ${withdrawalAmount2}. Your new balance is ${accountFour.balance}`)
} else {
    console.log(`Withdrawal denied for ${accountFour.name}: insufficient funds`)
}

// Question 4: Transfers
const transferAmount = 30000;

// Transfer attempt from accountOne and accountFour
if (accountOne.currency == accountFour.currency) {
    accountOne.balance -= transferAmount;
    accountFour.balance += transferAmount;
    console.log(`Transfer Successful, ${accountOne.name}, Your balance after transfer is ${accountOne.balance}`) 
} else {
    console.log("Transfer failed: currency mismatch")
}

// Question 5: Monthly maintenance
// maintenance of accountThree
if (accountThree.accountType == "Savings") {
    const interest = (2/100) * accountThree.balance;
    accountThree.balance += interest;
    console.log(`Monthly maintenance done, an interest of ${interest} has been added to your balance: New Balance: ${accountThree.balance}`)
} else {
    const checkingfee = 50;
    accountThree.balance -= checkingfee;
    console.log(`Monthly maintenance done, checking fee ${checkingfee} deducted. New Balance: ${accountThree.balance}`)
}

// Question 6: Print out highest balance and lowest balance
let highestBalance = accountOne.balance;
let lowestBalance = accountOne.balance;
let highestAccount = accountOne;
let lowestAccount = accountOne;

// check for highest
if (accountTwo.balance > highestBalance) {
    highestBalance = accountTwo.balance;
    highestAccount = accountTwo
}
if (accountThree.balance > highestBalance) {
    highestBalance = accountThree.balance;
    highestAccount = accountThree
}
if (accountFour.balance > highestBalance) {
    highestBalance = accountFour.balance;
    highestAccount = accountFour
}

// check for lowest
if (accountTwo.balance < lowestBalance) {
    lowestBalance = accountTwo.balance;
    lowestAccount = accountTwo
}
if (accountThree.balance < lowestBalance) {
    lowestBalance = accountThree.balance;
    lowestAccount = accountThree;
}
if (accountFour.balance < lowestBalance) {
    highestBalance = accountFour.balance;
    lowestAccount = accountFour
}

console.log(`Hi ${highestAccount.name}, You have the highest balance of ${highestAccount.balance}`)
console.log(`Hi ${lowestAccount.name}, You have the lowest balance of ${lowestAccount.balance}`)

// Question 7: Account status check

let accountstatus1 = "";
// check for account one
if (accountOne.balance > 0) {
    accountstatus1 = "Active";
} else if (accountOne.balance === 0) {
    accountstatus1 = "Empty";
} else {
    accountstatus1 = "Overdrawn"
}

let accountstatus2 = "";
// check for account two
if (accountTwo.balance > 0) {
    accountstatus2 = "Active";
} else if (accountThree.balance === 0) {
    accountstatus2 = "Empty";
} else {
    accountstatus2 = "Overdrawn"
}

let accountstatus3 = "";
// check for account three
if (accountThree.balance > 0) {
    accountstatus3 = "Active";
} else if (accountThree.balance === 0) {
    accountstatus3 = "Empty";
} else {
    accountstatus3 = "Overdrawn"
}

let accountstatus4 = "";
// check for account four
if (accountFour.balance > 0) {
    accountstatus4 = "Active";
} else if (accountThree.balance === 0) {
    accountstatus4 = "Empty";
} else {
    accountstatus4 = "Overdrawn"
}




// Question 8: Transaction Summary
console.log(`${accountOne.name}'s final balance is ${accountOne.balance}: Status- ${accountstatus1}`);
console.log(`${accountTwo.name}'s final balance is ${accountTwo.balance}: Status- ${accountstatus2}`);
console.log(`${accountThree.name}'s final balance is ${accountThree.balance}: Status- ${accountstatus3}`);
console.log(`${accountFour.name}'s final balance is ${accountFour.balance}: Status- ${accountstatus4}`);

// Bonus Challenge

let foreigntransfer = 5000;
let moneyreceived = 0;
function handleMismatch(sender, receiver) {
        sender.balance -= foreigntransfer;
        if (sender.currency == "EUR") {
            foreigntransfer *= 1.1
            moneyreceived = foreigntransfer
            receiver.balance += foreigntransfer
        } else {
            foreigntransfer /= 1.1
            moneyreceived = foreigntransfer
            receiver.balance += foreigntransfer
        }
    }

// Trying transfer between from account one to account two(different currency)
if (accountOne.currency != accountTwo.currency) {
    handleMismatch(accountOne, accountTwo);
    console.log(`Transfer Successful, ${accountOne.name}, Your new balance is ${accountOne.balance}`) 
    console.log(`Incoming transfer of ${moneyreceived}, ${accountTwo.name} Your new balance is ${accountTwo.balance}`) 
} 



