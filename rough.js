class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function convert(arr) {
    let head = new Node(arr[0]);
    let curr = head;
    for(let i = 1; i < arr.length; i++) {
        curr.next = new Node(arr[i]);
        curr = curr.next;
    }
    return head;
}

function traverse(head) {
    let curr = head;
    while(curr !== null) {
        console.log(curr.data + " ");
        curr = curr.next;
    }
    console.log();
}

function findLength(head) {
    let curr = head;
    let count = 0;
    while(curr !== null) {
        count++;
        curr = curr.next;
    }
    return count;
}

function search(head, val) {
    let curr = head;
    while(curr !== null) {
        if(curr.data == val) return 1;
        curr = curr.next;
    }
    return 0;
}

function insertAtFirst(head, val) {
    let newNode = new Node(val, head);
    return newNode;
}

function insertAtLast(head, val) {
    let newNode = new Node(val);
    if(head === null) return newNode;
    let curr = head;
    while(curr.next !== null) {
        curr = curr.next;
    }
    curr.next = newNode;
    return head;
}