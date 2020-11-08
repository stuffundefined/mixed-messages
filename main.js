let updates = ['Cave', 'Cow', 'Villager', 'UI', 'Stone', 'Food', 'Cloud', 'Bodily Functions', 'Overworld'];
let num1, num2, num3;
do {
    [num1, num2, num3] = [Math.floor(Math.random() * updates.length), Math.floor(Math.random() * updates.length), Math.floor(Math.random() * updates.length)];
    console.log(num1, num2, num3);
} while(num1 === num2 || num1 === num3 || num2 === num3);
console.log(`Next updates:\n${updates[num1]} update\n${updates[num2]} update\n${updates[num3]} update`);