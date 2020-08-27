export default class Stack {

    constructor(size) {
        this.storage = {};
        this.top = -1;
        this.size = size;
    }

    push(element) {
        if (this.top === this.size - 1) throw new Error('The stack is overflowed.');
        this.top++;
        this.storage[this.top] = element;
    }

    pop() {
        if (this.isEmpty()) throw new Error('The stack is empty.');
        const element = this.peek();
        delete this.storage[this.top];
        this.top--;
        return element;
    }

    peek() {
        return this.storage[this.top];
    }

    isEmpty = () => this.top === -1;

}