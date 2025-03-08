//#### LAB 5 - OBJECTS ####
//PART 2:  CREATE A BANK CUSTOMER OBJECT
//1. Create the object structure first.
var bankcustomer={
    lastName:"gill",
    branchNumber:"1234",
    accountBalance:500.25,
    interestRate:1.03,// for 3%
    multipleaccounts:true,
    makeDeposit: function(amount){
    bankcustomer.accountBalance= bankcustomer.accountBalance + amount ;  
    return"Thank you, your current balance is now" + bankcustomer.accountBalance 
},
makeWithdrawal:function(amount){
    bankcustomer.accountBalance= bankcustomer.accountBalance - amount;
    return"Thank you, your current balance is now" + bankcustomer.accountBalance
    
},
addinterest:function(amount){
    
    if(bankcustomer.multipleaccounts===true){
        bankcustomer.accountBalance=bankcustomer.accountBalance*( bankcustomer.interestRate + 0.005);
     } else{
            bankcustomer.accountBalance= bankcustomer.accountBalance * bankcustomer.interestRate;
        }
        
    
    return"Thank you, your current balance is now" + bankcustomer.accountBalance

},

}

bankcustomer.makeDeposit(200); // deposit of 200$
console.log(bankcustomer.accountBalance)
bankcustomer.makeWithdrawal(75);//withdraw 75$
console.log(bankcustomer.accountBalance);
bankcustomer.addinterest();
console.log(bankcustomer.accountBalance);


//2. Add the required properties to your object.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
//4. Add your second method and test it.
//5. Create the required output to complete steps 6-10 of the lab.
//6. Once everything is working, tackle the Stretch Goal!


