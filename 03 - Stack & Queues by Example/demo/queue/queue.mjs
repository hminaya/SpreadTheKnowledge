export default class Queue {

    constructor(size) {
        this.size = size;
        this.head = -1;
        this.tail = -1;
        this.storage = {};
    }

    enqueue(element) {

        // Is Full
        if (this.isFull()) throw new Error('The queue is full.');

        // Is the First Element
        if (this.head === -1 && this.tail === -1) {
            this.head = 0;
        }

        this.tail++;
        const idx = this.tail % this.size;
        this.storage[idx] = element;
    }

    dequeue() {
        // Is Empty
        if (this.isEmpty()) throw new Error('The queue is empty.')

        const headIndex = this.head % this.size;
        const tmp = this.storage[headIndex];

        // Is the Last Element
        if (this.head === this.tail) {
            this.head = this.tail = -1;
        } else {
            this.head++;
        }

        delete this.storage[headIndex];
        return tmp;
    }

    isFull = () => ((this.tail + 1) % this.size) === (this.head % this.size);

    isEmpty = () => this.head === -1 && this.tail === -1;

}