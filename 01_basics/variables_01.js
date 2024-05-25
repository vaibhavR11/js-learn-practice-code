const accountId = 24586; // stores constant value which cannot be changed
let accountEmail = "variables13@gmail.com"; // we use let when we want to change the value
var accountPassword = "Variables@2939";
accountState = "NA";

accountId = 65651; // not allowed


// console.log(accountId, accountEmail, accountPassword, accountState);
console.table([accountId, accountEmail, accountPassword, accountState]);


// Prefer not to use var because of issue in block scope and functional scope