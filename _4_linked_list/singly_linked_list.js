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

function insertAtStart(head, val) {
    let newNode = new Node(val, head);
    return newNode;
}

function insertAtLast(head, val) {
    let newNode = new Node(val);
    if (head === null) return newNode;
    let curr = head;
    while (curr.next !== null) {
        curr = curr.next;
    }
    curr.next = newNode;
    return head;
}

function insertAtPosition(head, val, pos) {
    if (head === null) {
        if (pos === 1) {
            return new Node(val);
        } else {
            return head;
        }
    }

    if (pos === 1) return new Node(val, head);

    let curr = head;
    let cnt = 0;
    while (curr !== null) {
        cnt++;
        if (cnt === pos - 1) {
            let newNode = new Node(val, curr.next);
            curr.next = newNode;
            return head;
        }
        curr = curr.next;
    }
    return head;
}

function insertBeforeNode(head, data, val) {
    if (head === null) {
        return null;
    }

    if (head.data === val) return new Node(data, head);

    let curr = head;
    while (curr.next !== null) {
        if (curr.next.data === val) {
            let newNode = new Node(data, curr.next);
            curr.next = newNode;
            return head;
        }
        curr = curr.next;
    }
    return head;
}

function deleteHeadNode(head) {
    if (head === null) {
        return null;
    }
    let temp = head;
    head = head.next;
    temp.next = null;
    return head;
}

function deleteLastNode(head) {
    if (head === null || head.next === null) {
        return null;
    }
    let temp = head;
    while (temp.next.next !== null) {
        temp = temp.next;
    }
    temp.next = null;
    return head;
}

function deleteKthNode(head, k) {
    if (head === null || head.next === null) {
        return null;
    }
    if (k === 1) {
        let temp = head;
        head = head.next;
        temp.next = null;
        return head;
    }
    let cnt = 0;
    let curr = head;
    let prev = null;
    while (curr !== null) {
        cnt++;
        if (cnt === k) {
            prev.next = curr.next;
            curr.next = null;
            return head;
        }
        prev = curr;
        curr = curr.next;
    }
    return head;
}

function deleteNodeWithValue(head, val) {
    if (head === null) {
        return null;
    }
    if (head.data === val) {
        let temp = head;
        head = head.next;
        temp.next = null;
        return head;
    }
    let curr = head;
    let prev = null;
    while (curr !== null) {
        if (curr.data === val) {
            prev.next = curr.next;
            curr.next = null;
            return head;
        }
        prev = curr;
        curr = curr.next;
    }
    return head;
}

let arr = [2, 5, 8, 7, 6];
let head = convertArr2LL(arr);
traverse(head);
head = insertBeforeNode(head, 100, 6);
traverse(head);
