const accountId = 13242
let accountEmail = "hitesh@google.com"
var accountPassword = "1223"
accountCity = "Jaipur"

// accountId= 2 // not allowed 

accountEmail = "hc@hc.com"
accountPassword = "55454"
accountCity = "Bengaluru"
let accountState;

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
