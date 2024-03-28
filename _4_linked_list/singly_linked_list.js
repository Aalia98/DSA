class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function convertArr2LL(arr) {
    let head = new Node(arr[0]);
    let curr = head;
    for (let i = 1; i < arr.length; i++) {
        curr.next = new Node(arr[i]);
        curr = curr.next;
    }
    return head;
}

function traverse(head) {
    let curr = head;
    while (curr !== null) {
        console.log(curr.data + " ");
        curr = curr.next;
    }
    console.log();
}

function lengthOfLinkedList(head) {
    let curr = head;
    let count = 0;
    while (curr !== null) {
        count++;
        curr = curr.next;
    }
    return count;
}

function searchNode(head, val) {
    let curr = head;
    while (curr !== null) {
        if (curr.data === val) {
            return 1;
        }
        curr = curr.next;
    }
    return 0;
}

let arr = [2, 5, 8, 7, 6];
let head = convertArr2LL(arr);
