const { add, subtract, multiply, divide } = require('./calculation');

const ratePerHour = 300;
const hoursPerDay = 4;
const daysPerWeek = 6;
const taxRate = 0.10;
const sssDeduction = 1200;
const pagIbigDeduction = 300;
const philHealthDeduction = 400;

const grossIncome = multiply(ratePerHour, multiply(hoursPerDay, daysPerWeek));
const tax = multiply(grossIncome, taxRate);
const totalDeductions = add(add(sssDeduction, pagIbigDeduction), add(philHealthDeduction, tax));
const netSalary = subtract(grossIncome, totalDeductions);

console.log(`Gross Income: ${grossIncome}`);
console.log(`Tax: ${tax}`);
console.log(`SSS: ${sssDeduction}`);
console.log(`Pag-Ibig fund: ${pagIbigDeduction}`);
console.log(`PhilHealth: ${philHealthDeduction}`);
console.log(`Total Deductions: ${totalDeductions}`);
console.log(`Net Salary: ${netSalary}`);
