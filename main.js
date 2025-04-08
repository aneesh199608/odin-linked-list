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

console.log('Node at index 1:', list.at(1).value);

const popped = list.pop();
console.log('Popped:', popped.value);
console.log('After popping, new tail:', list.tail().value);

console.log('Contains C:', list.contains('B'));
console.log('Find B:', list.find('B'));
console.log('List:', list.toString());

list.insertAt('X', 1); 
console.log('After insertAt:', list.toString());

list.removeAt(2); 
console.log('After removeAt:', list.toString());

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

