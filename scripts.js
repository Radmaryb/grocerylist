
let firstItem = prompt(`Enter the first grocery item:`);
var amount1 = prompt(`How many ${firstItem} would you like?`);

let secondItem = prompt(`Enter the second grocery item:`);
var amount2 = prompt(`How many ${secondItem} would you like?`);

let thirdItem = prompt(`Enter the third grocery item:`);
var amount3 = prompt(`How many ${thirdItem} would you like?`);


console.log(`Shopping List
${amount1} ${firstItem}
${amount2} ${secondItem} 
${amount3} ${thirdItem}`);

let total = (Number(amount1) + Number(amount2) + Number(amount3));
console.log(`Total number of items ${total}`);

