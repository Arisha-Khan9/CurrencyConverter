import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 278,
};
let user_answers = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter from currency:",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR'],
    },
    {
        name: "to",
        type: "list",
        message: "Enter to currency:",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR'],
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount:",
    },
]);
// console.log(user_answers);
//dynamic conditions
let fromAmount = currency[user_answers.from];
let toAmount = currency[user_answers.to];
let amount = user_answers.amount;
let basedCurrency = amount / fromAmount;
let convertedCurrency = basedCurrency * toAmount;
console.log(convertedCurrency);
// if we want to covert currency (from - to).firstly we have to convertd it in based currency by divide the amount,
// we want to covert and than multiply the answer (based currency) to the currency in w/c we want to covert.
