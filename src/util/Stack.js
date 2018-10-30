class Stack {
    constructor() {
        this.items = [];
    }

    push(elem) {
        this.items.push(elem);
    }

    pop() {
        if (this.items.length === 0)
            return "Underflow";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

export default Stack;