#! /usr/bin/env node
import inquirer from 'inquirer';

const currency: any= {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

let user_ans = await inquirer.prompt([
{name:'from', message:'Enter From Currency', type:'list', choices:['USD', 'EUR', 'GBP', 'INR', 'PKR']},
{name:'to', message:'Enter To Currency', type:'list', choices:['USD', 'EUR', 'GBP', 'INR', 'PKR']},
{name:'amount', message:'Enter Amount', type:'number'}]);

let fromCurrency = currency[user_ans.from];
let toCurrency = currency[user_ans.to];
let amount = user_ans.amount;
let base = amount / fromCurrency;
let converted = base * toCurrency;
console.log(`${amount} ${user_ans.from} is equal to ${converted} ${user_ans.to}`);
