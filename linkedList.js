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

    // size() {
    //     let count = 0;
    //     let current = this.head;
    //     while (current) {
    //         count++;
    //         current = current.next;
    //     }
    //     return count;
    // }

    //using recursion here
    size(node = this.head) {

        if (node === null) return 0;
        return 1 + this.size(node.next);
    
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

    at(index) {
        if(index < 0) return null;
        
        let current = this.head;
        let count = 0;

        while(current !== null) {
            if(count === index) return current;
            count++;
            current = current.next;
        }
        return null;
    }

    pop() {
        if(!this.head) return null;

        if(!this.head.next) {
            const popped = this.head;
            this.head = null;
            return popped;
        }

        let current = this.head;
        while (current.next.next !== null) {
        current = current.next;
        }

        const popped = current.next;
        current.next = null;
        return popped;
    }

    contains(value) {
        let current = this.head;
        while (current) {
          if (current.value === value) return true;
          current = current.next;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let index = 0;
        while (current) {
          if (current.value === value) return index;
          current = current.next;
          index++;
        }
        return null;
    }

    toString() {
        let current = this.head;
        let result = '';
        while (current) {
          result += `( ${current.value} ) -> `;
          current = current.next;
        }
        return result + 'null';
    }

    insertAt(value, index) {
        if (index < 0) return;
      
        const newNode = new Node(value);
      
        if (index === 0) {
          newNode.next = this.head;
          this.head = newNode;
          return;
        }
      
        let prev = this.at(index - 1);
        if (!prev) return;
      
        newNode.next = prev.next;
        prev.next = newNode;
    }

    removeAt(index) {
        if (!this.head || index < 0) return;
      
        if (index === 0) {
          this.head = this.head.next;
          return;
        }
      
        let prev = this.at(index - 1);
        if (!prev || !prev.next) return;
      
        prev.next = prev.next.next;
    }
  
}