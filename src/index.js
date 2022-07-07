import {choice, remove} from './helpers'
import fruits from './food'

let rFruit = choice(fruits);

console.log(`I'd like one ${rFruit}, please.`);
console.log(`Here you go: ${rFruit}`);
console.log(`Delicious! May I have another?`);

let left = remove(fruits, rFruit);

console.log(`I'm sorry, we're all out. We do have ${left.length} other fruits though`)