import Stack from './stack/stack.mjs';
import Queue from './queue/queue.mjs';

export default class Util {

    static displayStack(stack, message) {
        const tmpStack = Object.assign(new Stack(stack.size), JSON.parse(JSON.stringify(stack)));
        let showTopTitle = true;
        const positionsEmpty = (tmpStack.size - 1) - tmpStack.top;

        if (message) console.log(`\n\t${message}`)

        console.log('\n\t╔═══╗');

        while (tmpStack.top !== -1) {
            console.log(`\t║ ${tmpStack.pop()} ║\t${showTopTitle ? '← TOP' : ''}`);
            console.log(tmpStack.top === -1 && positionsEmpty === 0 ? '\t╚═══╝\n' : `\t╠═══╣`)
            showTopTitle = false;
        }

        for (let i = 1; i <= positionsEmpty; i++) {
            console.log('\t║   ║');
            console.log(i === positionsEmpty ? '\t╚═══╝\n' : `\t╠═══╣`)
        }
    }

    static displayQueue(queue, message) {

        if (!queue) throw new Error('The queue is required.');

        const tmpQueue = Object.assign(new Queue(), JSON.parse(JSON.stringify(queue)));

        if (message) console.log(`\n\t${message}`)

        if (tmpQueue.head === -1 && tmpQueue.tail === -1) {
            // console.log('\n\tThe queue is empty.\n');
            // return;
        }

        console.log('\t╔═══╗');

        for (let i = 0; i < tmpQueue.size; i++) {

            let message = '';
            if (i === (tmpQueue.head % tmpQueue.size) && i === (tmpQueue.tail % tmpQueue.size)) {
                message = 'HEAD -- TAIL';
            } else if (i === (tmpQueue.head % tmpQueue.size)) {
                message = 'HEAD';
            } else if (i === (tmpQueue.tail % tmpQueue.size)){
                message = 'TAIL';
            }

            console.log(`\t║ ${ tmpQueue.storage[i] || '✗' } ║`, message);
            console.log(i === tmpQueue.size-1 ? '\t╚═══╝' : `\t╠═══╣`);
        }

        console.log(`\nHEAD: ${tmpQueue.head},`, `TAIL: ${tmpQueue.tail}\n\n`);
    }

}