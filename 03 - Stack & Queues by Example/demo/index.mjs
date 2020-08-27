import Util from './util.mjs';
import Queue from './queue/queue.mjs';
import Stack from './stack/stack.mjs';

// Stack
const stack = new Stack(3);

stack.push(2);
stack.push(5);
Util.displayStack(stack, 'Added (2, 5)');

let value = stack.pop();
Util.displayStack(stack, `Removed ${value}`);
 

// Queue
console.log('\n\nQueue Example\n');

const queue = new Queue(5);
queue.enqueue(1);
queue.enqueue(3);
Util.displayQueue(queue, 'Added (1, 3)');