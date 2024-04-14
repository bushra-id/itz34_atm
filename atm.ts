#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

let myBalance =  100000;   // Dollar$
const myPin = 9876;       // Pin Number

// starting message.
console.log(chalk.bold .blue.italic("\n\n\tWellcome to your ATM acount!\t\n\n") );

let pinanswer = await inquirer.prompt(
    [{
        name: "pin",
        message: "enter your pin code",
        type: "number"
    }]
);

if (pinanswer.pin === myPin) {
    console.log(chalk.greenBright.bold("correct pin code!!!"))   

    const operationAns = await  inquirer.prompt(
    [{
          name:"operation",
          message: "please select option",
          type:"list",
          choices:["withdraw", "check balance","fastcash"]
    }]
 );
    
 if (operationAns.operation === "withdraw"){
 let amountAns =  await inquirer.prompt(
    [{
           name:"amount",
           message:"enter your amount",
           type:"number"
    }]
 );
   
 if (amountAns.amount > myBalance){
   console.log(chalk.italic.red.bold("Sorry, your balance is insufficient for withdrawal from the account!!"));
 }else{
        myBalance -= amountAns.amount;
        console.log(chalk.italic.greenBright.bold(`Your remaining balance is: ${myBalance}`   ));
      }}


 if(operationAns.operation==="check balance"){
        console.log(chalk.italic.blue.bold(`Your current balance is: ${myBalance}`  ));
 }
 else if (operationAns.operation === "fastcash") {
   let fastamountanswer = await inquirer.prompt([{
           name: "fastAmount",
           message: "please select option",
           type: "list",
           choices: ["500", "1000", "5000", "50000"]
       }]);
     myBalance -= fastamountanswer.fastAmount;
   console.log(chalk.yellowBright.bold(`successfully withdrawal your remaining balance is: ${myBalance}` ))
 console.log(chalk.bold.greenBright("Thanks for using this fast service"))
      }
}
else{
  console.log(chalk.italic.red.bold("Incorrect pin number!!! \ntry again.!\n "))}

