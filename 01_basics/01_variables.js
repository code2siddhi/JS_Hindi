const accountID = 1445533
let accountEmail = "siddhi@google.com"
var accountPassword = "12345"
let accountState;
accountCity = "jaipur"
// accountID = 2 // not allowed
 accountEmail = "hc@hc.com"
 accountPassword = "212121212"
 accountCity = "Bengaluru"
console.log(accountID);
console.table([accountID , accountEmail , accountPassword , accountCity ,accountState ]);

// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);
/*
  Prefer not to use of var
   because issue in block and funtional scope
*/


console.log(typeof(accountCity));