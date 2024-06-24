class Node {
    constructor(data, next = null, back = null) {
        this.data = data;
        this.next = next;
        this.back = back;
    }
}

function convertArr2DLL(arr) {
    let head = new Node(arr[0]);
    let prev = head;

    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i]);
        prev.next = temp;
        temp.back = prev;
        prev = temp;
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

function deleteHead(head) {
    if (head === null || head.next === null) {
        return null;
    }

    let prev = head;
    head = head.next;

    head.back = null;
    prev.next = null;

    return head;
}

function deleteTail(head) {
    if (head === null || head.next === null) {
        return null;
    }

    let tail = head;
    while (tail.next !== null) {
        tail = tail.next;
    }

    let newTail = tail.back;
    newTail.next = null;
    tail.back = null;

    return head;
}

function deleteKthElement(head, k) {
    if (head === null) {
        return null;
    }

    let count = 0;
    let kNode = head;
    while (kNode !== null) {
        count++;
        if (count === k) {
            break;
        }
        kNode = kNode.next;
    }

    let prev = kNode.back;
    let front = kNode.next;

    if (prev === null && front === null) {
        delete kNode;
        return null;
    } else if (prev === null) {
        return deleteHead(head);
    } else if (front === null) {
        return deleteTail(head);
    }

    prev.next = front;
    front.back = prev;

    kNode.next = null;
    kNode.back = null;

    delete kNode;

    return head;
}

function deleteGivenNode(temp) {
    let prev = temp.back;
    let front = temp.next;

    if (front === null) {
        prev.next = null;
        temp.back = null;
        return;
    }

    prev.next = front;
    front.back = prev;

    temp.next = null;
    temp.back = null;

    return;
}

function insertBeforeHead(head, val) {
    let newHead = new Node(val, head, null);
    head.back = newHead;

    return newHead;
}

function insertBeforeTail(head, val) {
    if (head.next === null) {
        return insertBeforeHead(head, val);
    }

    let tail = head;
    while (tail.next !== null) {
        tail = tail.next;
    }
    let prev = tail.back;

    let newNode = new Node(val, tail, prev);

    prev.next = newNode;
    tail.back = newNode;

    return head;
}

function insertBeforeKthElement(head, k, val) {
    if (k === 1) {
        return insertBeforeHead(head, val);
    }

    let temp = head;
    let count = 0;
    while (temp !== null) {
        count++;
        if (count === k) break;
        temp = temp.next;
    }
    let prev = temp.back;

    let newNode = new Node(val, temp, prev);

    prev.next = newNode;
    temp.back = newNode;

    newNode.next = temp;
    newNode.back = prev;

    return head;
}

function insertBeforeNode(node, val) {
    let prev = node.back;

    let newNode = new Node(val, node, prev);

    prev.next = newNode;
    node.back = newNode;

    return;
}

function insertAtTail(head, k) {
    let newNode = new Node(k);

    if (head === null) {
        return newNode;
    }

    let tail = head;
    while (tail.next !== null) {
        tail = tail.next;
    }

    tail.next = newNode;
    newNode.back = tail;

    return head;
}

let arr = [3, 5, 8, 7, 6];
let head = convertArr2DLL(arr);
traverse(head);
