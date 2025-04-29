


//=================code====================

//linklist-----------------------

class NodeList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

 var head = null;

 function add(newData) {
   const newNode = new NodeList(newData);
     let curr;
    if(head===null){
        head=newNode
        curr=head
    }else{
                curr=head

        while(curr.next!==null){
            curr=curr.next
        }
        curr.next=newNode;
    }
  
}
function displayList() {
    let current = head;
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
}

// Example usage:
add(3);
add(7);
add(11);
console.log("linklist elements:");
displayList();  // for singly linked list

//stack using linklist------------
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var head = null;

function push(newData) {
    const newNode = new Node(newData);
    newNode.next = head;
    head = newNode;
}

function displayStack() {
    let current = head;
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
}


// Example usage:
push(3);
push(7);
push(11);
console.log("stack using linklist elements:");
displayStack(); // for stack

// JavaScript program for linked-list implementation of queue


class QNode {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

var front = null, rear = null;

function enqueue(key) {
    // Create a new LL node
    let temp = new QNode(key);

    // If queue is empty, then new node is front and rear both
    if (rear === null) {
        front = rear = temp;
        return;
    }

    // Add the new node at the end of queue and change rear
    rear.next = temp;
    rear = temp;
}

function dequeue() {
    // If queue is empty, return NULL.
    if (front === null)
        return null;

    // Store previous front and move front one node ahead
    let temp = front;
    front = front.next;

    // If front becomes NULL, then change rear also as NULL
    if (front === null)
        rear = null;

    return temp.key;
}

function displayQueue() {
    let current = front;
    while (current !== null) {
        console.log(current.key);
        current = current.next;
    }
}


// Example usage
enqueue(10);
enqueue(20);
dequeue();
dequeue();
enqueue(30);
enqueue(40);
enqueue(50);
dequeue();
console.log("Queue elements using linklist elements:");

displayQueue(); // for queue





