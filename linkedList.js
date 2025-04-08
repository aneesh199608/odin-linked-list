import Node from './node.js';

export default class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node (value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    prepend(value) {
        const newNode = new Node (value);
        newNode.next = this.head;
        this.head = newNode;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    headNode() {
        return this.head;
    }

    tail() {
        if(!this.head) return null;

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        return current;
    }
}