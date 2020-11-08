let updates = ['Cave', 'Cow', 'Villager', 'UI', 'Stone', 'Food', 'Cloud', 'Bodily Functions', 'Overworld'];
let num1 = Math.floor(Math.random() * (updates.length - 2));
let num2 = Math.floor(Math.random() * (updates.length - num1 - 2)) + num1 + 1;
let num3 = Math.floor(Math.random() * (updates.length - num1 - num2 - 2)) + num2 + 1;