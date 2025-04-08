import LinkedList from "./linkedList.js";

const list = new LinkedList();

list.append('B');
list.append('C');
list.prepend('A');

let current = list.head;
while(current !== null) {
    console.log(current.value);
    current = current.next;
}

console.log('Size:', list.size());
console.log('Head:', list.headNode().value);
console.log('Tail:', list.tail().value);